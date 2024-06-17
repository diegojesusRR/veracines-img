import {
    Card,

    TextField,
} from "@mui/material";
import {useEffect, useState} from "react";
import {IPelicula} from "@/app/cartelera-mano/page";
import {CustomDatepicker} from "@/components/selector/datepicker";



export const PeliculaSelector = ({pelicula, onChange, index, label}:{ pelicula: IPelicula|undefined, onChange: (pelicula: IPelicula, index: number) => void, label: string, index: number}) => {


    const [isLoadingFoto, setIsLoadingFoto] = useState(false);
    const [temporizador, setTemporizador] = useState(null as any|null);

    const [imagenes, setImagenes] = useState([] as string[]);
    const [indiceActual, setIndiceActual] = useState(0);

    const [imagen, setImagen] = useState(pelicula?.imagen??'');
    const [titulo, setTitulo] = useState(pelicula?.titulo??'');
    const [diaInicio, setDiaInicio] = useState(pelicula?.diaInicio??new Date());
    const [diaFin, setDiaFin] = useState(pelicula?.diaFin??new Date());

    useEffect(() => {
        setDiaInicio(pelicula!.diaInicio);
        setDiaFin(pelicula!.diaFin);
    }, [pelicula]);

    useEffect(() => {
        if(titulo.length>=2){
            handleBuscarFotos(titulo);
        }
    }, [titulo]);

    useEffect(() => {
        onChange({...pelicula??{}, imagenes, imagen: imagenes[0], titulo, diaInicio: diaInicio, diaFin: diaFin}, index);
    }, [diaInicio, diaFin, imagen, titulo]);
    const handleBuscarFotos = async (titulo: string) => {

        setIsLoadingFoto(true);
        // Definir un tiempo de espera (en milisegundos)
        const tiempoEspera = 500; // Puedes ajustar este valor según tus necesidades

        if (titulo.length <=2) return;

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
                const imagenes = result.d.map((imgs: any) => imgs.i?.imageUrl).filter((x: any) => x);
                setImagenes(imagenes);
                setIndiceActual(0);
                setIsLoadingFoto(false);
                setImagen(imagenes[0]??'')
            } catch (error) {
                setIsLoadingFoto(false);
            }
        }, tiempoEspera));
    };

    const handleFechaInicio = (date: Date) => {
        setDiaInicio(new Date(date.setHours(0,0,0,0)));
        setDiaFin(new Date(date.setHours(23,59,59,0)));
    }

    const handleFechaFin = (date: Date) => {
        setDiaFin(new Date(date.setHours(23,59,59,0)));
    }

    return (
        <Card className={'mt-4'}>
            <TextField
                label={label}
                id="titulo-input"
                value={titulo}
                onChange={async (e) => {
                    setTitulo(e.target.value);
                }}
                fullWidth
                sx={{marginBottom: "10px"}}
            />
            <div className={"flex"}>
                <CustomDatepicker key={`date-inicio-${index}`} className={"w-1/2"} dia={diaInicio} setDia={handleFechaInicio}/>
                <CustomDatepicker key={`date-fin-${index}`} className={"w-1/2"} dia={diaFin} setDia={handleFechaFin}/>
            </div>


        </Card>
    )
}