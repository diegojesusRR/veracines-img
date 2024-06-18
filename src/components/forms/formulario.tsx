import {
    Box,
    Button,
    Card, Checkbox,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import * as htmlToImage from 'html-to-image';
import {useEffect, useState} from "react";
import {cines} from "@/public/data/cines";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Formulario = ({config, setConfig}:{config: any, setConfig: any}) => {

    const [cine, setCine] = useState(config.cine);
    const [titulo, setTitulo] = useState(config.pelicula?.titulo);
    const [imagenes, setImagenes] = useState([config.pelicula?.imagen]);
    const [proyecciones, setProyecciones] = useState(config.proyecciones??[]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [temporizador, setTemporizador] = useState(null as any|null);
    const [isLoadingFoto, setIsLoadingFoto] = useState(false);

    useEffect(() => {
        if(!config.cine || !config.pelicula){
            setProyecciones([]);
        }
    }, [config]);
    const handleChangeCine = (event: any) => {
        const cine = cines.find((cine) => cine.id === event.target.value)
        setCine(cine)
        setConfig({...config, cine})
    }

    const handleChangeProyecciones = (indexProyeccion: any, indexHorario: any, campo: any, valor: any) => {
        const nuevasProyecciones = [...proyecciones];
        nuevasProyecciones[indexProyeccion].horarios[indexHorario][campo] = valor;
        setProyecciones(nuevasProyecciones);
        setConfig({...config, proyecciones: nuevasProyecciones})
    };
    const handleChangeFechaProyeccion = (index: any, fecha: Date) => {
        const nuevasProyecciones = [...proyecciones];
        nuevasProyecciones[index].fecha = fecha;
        setProyecciones(nuevasProyecciones);
        setConfig({...config, proyecciones: nuevasProyecciones})
    }

    const handleAnadirDiaProyeccion = () => {
        const nuevasProyecciones = [...proyecciones];

        if(proyecciones.length === 0){
            nuevasProyecciones.push({ fecha: new Date(), horarios: [{ hora: '' }] })
        }
        else {
            const ultimoDia = new Date(proyecciones[proyecciones.length-1].fecha);
            ultimoDia.setDate(ultimoDia.getDate() + 1);
            nuevasProyecciones.push({ fecha: ultimoDia, horarios: [{ hora: '' }] });
        }

        setProyecciones(nuevasProyecciones);
        setConfig({...config, proyecciones: nuevasProyecciones})
        console.log(config)
    }

    const handleEliminarDiaProyeccion = (index: number) => {
        const nuevasProyecciones = [...proyecciones];
        nuevasProyecciones.splice(index, 1);
        setProyecciones(nuevasProyecciones);
        setConfig({...config, proyecciones: nuevasProyecciones})
    }

    const handleAnadirHorario = (index: number) => {
        const nuevasProyecciones = [...proyecciones];
        nuevasProyecciones[index].horarios.push({ hora: '' });
        setProyecciones(nuevasProyecciones);
        setConfig({...config, proyecciones: nuevasProyecciones})
    }

    const handleEliminarHorario = (indexProyeccion: number, indexHorario: number) => {
        const nuevasProyecciones = [...proyecciones];
        nuevasProyecciones[indexProyeccion].horarios.splice(indexHorario, 1);
        setProyecciones(nuevasProyecciones);
        setConfig({...config, proyecciones: nuevasProyecciones})
    }

    const handleHacerFoto = () => {
        const portada = document.querySelector('.portada')
        if(portada){
            htmlToImage.toJpeg(portada as HTMLElement)
                .then(function (dataUrl) {
                    let link = document.createElement('a');
                    link.download = 'publi-veracines.jpeg';
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });

            /*
            htmlToImage.toPng(portada as HTMLElement)
                .then(function (dataUrl) {
                    var img = new Image();
                    img.src = dataUrl;
                    document.body.appendChild(img);
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
             */
        }
    }

    const handleBuscarFotos = async (titulo: string) => {

        setIsLoadingFoto(true);
        // Definir un tiempo de espera (en milisegundos)
        const tiempoEspera = 500; // Puedes ajustar este valor según tus necesidades

        if (titulo.length < 3) return;

        // Limpiar el temporizador existente si existe
        if (temporizador) {
            clearTimeout(temporizador);
        }

        // Establecer un nuevo temporizador
        setTemporizador(setTimeout(async () => {
            const query = new URLSearchParams({ q: titulo });

            const url = `https://online-movie-database.p.rapidapi.com/auto-complete?${query}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'de58a36d60msh38c0bd2a06641f1p169b55jsn1e02990ef9b1',
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const imagenes = result.d.map((pelicula: any) => pelicula.i?.imageUrl).filter((x: any) => x);
                setImagenes(imagenes);
                setIndiceActual(0);
                setConfig({ ...config, pelicula: { ...config.pelicula, titulo, imagen: imagenes[0] } });
                setIsLoadingFoto(false);
            } catch (error) {
                console.error(error);
                setIsLoadingFoto(false);
            }
        }, tiempoEspera));
    };

    const fotoAnterior = () => {
        setIndiceActual(indiceActual > 0 ? indiceActual - 1 : imagenes.length - 1);
        setConfig({...config, pelicula: { ...config.pelicula, imagen: imagenes[indiceActual] }})

    };

    const fotoSiguiente = () => {
        setIndiceActual(indiceActual < imagenes.length - 1 ? indiceActual + 1 : 0);
        setConfig({...config, pelicula: { ...config.pelicula, imagen: imagenes[indiceActual] }})
    };

    return (
        <Card elevation={9} sx={{ width: "400px", marginLeft:"20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{ padding: "10px" }}>
                <Typography variant="h5">Configuración</Typography>
                <Stack direction="column" sx={{ padding: "10px" }}>
                    <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                        <InputLabel id="cine-select-label">Cine</InputLabel>
                        <Select
                            labelId="cine-select-label"
                            id="cine-select"
                            value={cine?.id}
                            label="Cine"
                            onChange={handleChangeCine}
                        >
                            <MenuItem key={"none"} value={undefined}>
                                -
                            </MenuItem>
                            {cines.map((cine) => (
                                <MenuItem key={cine.id} value={cine.id}>
                                    {cine.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Nuevo campo de entrada para el título */}
                    <TextField
                        label="Título"
                        id="titulo-input"
                        value={titulo}
                        onChange={async (e) => {

                            // Ajustar título
                            setTitulo(e.target.value)

                            // Ajustar imagen
                            await handleBuscarFotos(e.target.value);
                        }
                    }
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                    />
                    <Box>
                        <Typography variant="subtitle1">Imagen</Typography>
                        {
                            isLoadingFoto ? <span>{isLoadingFoto ? "Cargando..." : ""}</span> :
                            <Stack direction={"row"} spacing={2}>
                                <Button onClick={fotoAnterior} sx={{magin: "0 5px"}}>Anterior</Button>
                                <Typography variant="body1"> Foto {indiceActual+1}/{imagenes.length}</Typography>
                                <Button onClick={fotoSiguiente} sx={{magin: "0 5px"}}>Siguiente</Button>
                            </Stack>
                    }
                    </Box>
                    {proyecciones && proyecciones.map((proyeccion: any, indexProyeccion: number) => (
                        <Card key={indexProyeccion} sx={{backgroundColor: "#fafafa", margin: "5px 0"}}>
                            <DatePicker
                                selected={proyeccion.fecha}
                                onChange={(date: Date) => handleChangeFechaProyeccion(indexProyeccion, date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Selecciona una fecha"
                            />
                            <Button
                                disabled={proyecciones.length === 1}
                                onClick={() => handleEliminarDiaProyeccion(indexProyeccion)}>
                                Eliminar Dia
                            </Button>
                            {proyeccion.horarios.map((horario: any, indexHorario: number) => (
                                <div key={indexHorario}>
                                    <Stack direction="row" spacing={2}>
                                        <TextField
                                            label="Hora"
                                            id={"hora-input"+indexHorario}
                                            value={horario.hora}
                                            onChange={(e) => handleChangeProyecciones(indexProyeccion, indexHorario, 'hora', e.target.value)}
                                            sx={{ marginBottom: "10px" }}
                                        />
                                        <Checkbox
                                            checked={horario.vose}
                                            onChange={(e) => handleChangeProyecciones(indexProyeccion, indexHorario, 'vose', e.target.checked)}
                                        />
                                        <span>VOSE</span>
                                        <Button
                                            disabled={proyeccion.horarios.length === 1}
                                            onClick={() => handleEliminarHorario(indexProyeccion, indexHorario)}
                                        >
                                            Eliminar
                                        </Button>
                                    </Stack>

                                </div>
                            ))}
                            <Button
                                onClick={() => handleAnadirHorario(indexProyeccion)}>
                                Agregar Nueva Hora
                            </Button>
                        </Card>
                    ))}
                    <Button
                        onClick={() => handleAnadirDiaProyeccion()}
                    >
                        Agregar Nuevo Dia
                    </Button>
                    <button className={"text-white bg-azul p-2 mt-2 w-full font-bold border-2"}
                            onClick={handleHacerFoto}>Hacer foto
                    </button>
                </Stack>
            </Box>
        </Card>

    )
}