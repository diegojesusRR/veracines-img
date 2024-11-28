import {Card, TextField,} from "@mui/material";
import {IPelicula} from "@/interfaces/formularios";
import {useEffect, useState} from "react";

export const FormularioPelicula = ({
                                       pelicula,
                                       onChange,
                                       label
                                   }: {
    pelicula: IPelicula | undefined,
    onChange: (pelicula: IPelicula) => void,
    label: string,
}) => {


    const [isLoadingFoto, setIsLoadingFoto] = useState(false);
    const [temporizador, setTemporizador] = useState(null as any | null);

    const [imagenes, setImagenes] = useState([] as string[]);
    const [indiceActual, setIndiceActual] = useState(0);

    const [imagen, setImagen] = useState(pelicula?.imagen ?? '');
    const [titulo, setTitulo] = useState(pelicula?.titulo ?? '');
    const [tamanoTitulo, setTamanoTitulo] = useState(pelicula?.tamanoTitulo ?? 12);

    useEffect(() => {
        if (titulo.length >= 2) {
            handleBuscarFotos(titulo);
        }
    }, [titulo]);

    useEffect(() => {
        onChange({...pelicula ?? {}, imagenes, imagen: imagen, titulo, tamanoTitulo});
    }, [imagen, titulo, tamanoTitulo]);
    const handleBuscarFotos = async (titulo: string) => {

        setIsLoadingFoto(true);
        // Definir un tiempo de espera (en milisegundos)
        const tiempoEspera = 500; // Puedes ajustar este valor según tus necesidades

        if (titulo.length <= 2) return;

        // Limpiar el temporizador existente si existe
        if (temporizador) {
            clearTimeout(temporizador);
        }

        // Establecer un nuevo temporizador
        setTemporizador(setTimeout(async () => {
            const query = new URLSearchParams({q: titulo});

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
                setImagen(imagenes[0] ?? '')
            } catch (error) {
                setIsLoadingFoto(false);
            }
        }, tiempoEspera));
    };

    const handleChangeIndexImagen = (index: number) => {
        setIndiceActual(index);
        setImagen(imagenes[index]);
    }

    return (
            <div className={"flex"}>
                <TextField
                    label={label}
                    id="titulo-input"
                    value={titulo}
                    onChange={(e) => {
                        setTitulo(e.target.value);
                    }}
                    fullWidth
                    sx={{marginBottom: "10px"}}
                />
                <div className="flex flex-row justify-center items-center space-x-4 py-3 px-2">
                    <button className={"bg-azul text-white p-2"}
                            onClick={() => handleChangeIndexImagen((indiceActual - 1 + imagenes.length) % imagenes.length)}>-
                    </button>
                    <div>{indiceActual + 1}/{imagenes.length}</div>
                    <button className={"bg-azul text-white p-2"}
                            onClick={() => handleChangeIndexImagen((indiceActual + 1) % imagenes.length)}>+
                    </button>

                </div>
            </div>
    )
}