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

export const Formulario = ({termino, setFoto}:{termino: string, setFoto: () => void}) => {

    const [imagenes, setImagenes] = useState([]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [temporizador, setTemporizador] = useState(null as any|null);
    const [isLoadingFoto, setIsLoadingFoto] = useState(false);

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
                setIsLoadingFoto(false);
            } catch (error) {
                console.error(error);
                setIsLoadingFoto(false);
            }
        }, tiempoEspera));
    };

    const fotoAnterior = () => {
        setIndiceActual(indiceActual > 0 ? indiceActual - 1 : imagenes.length - 1);
    };

    const fotoSiguiente = () => {
        setIndiceActual(indiceActual < imagenes.length - 1 ? indiceActual + 1 : 0);
    };

    return (
        <Card elevation={9} sx={{ width: "400px", marginLeft:"20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{ padding: "10px" }}>
                <Typography variant="h5">Configuración</Typography>
                {
                    isLoadingFoto ? <span>{isLoadingFoto ? "Cargando..." : ""}</span> :
                        <Stack direction={"row"} spacing={2}>
                            <Button onClick={fotoAnterior} sx={{magin: "0 5px"}}>Anterior</Button>
                            <Typography variant="body1"> Foto {indiceActual+1}/{imagenes.length}</Typography>
                            <Button onClick={fotoSiguiente} sx={{magin: "0 5px"}}>Siguiente</Button>
                        </Stack>
                }
            </Box>
        </Card>

    )
}