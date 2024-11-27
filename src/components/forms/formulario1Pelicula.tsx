import {
    Box, Button,
    Card,
} from "@mui/material";
import {useEffect, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {CineSelector} from "@/components/selector/cineSelector";
import {IConfigCartelera, IPelicula} from "@/app/cartelera-cara-b/page";
import {PeliculaSelector} from "@/components/selector/peliculaSelector";
import {PeliculasSelector} from "@/components/selector/peliculasSelector";
import * as htmlToImage from "html-to-image";

export const Formulario1Pelicula = ({config, setConfig}:{config: IConfigCartelera, setConfig: (config: any) => void}) => {

    const [cine, setCine] = useState(config.cine);
    const [peliculas, setPeliculas] = useState(config.peliculas??[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] as (IPelicula|undefined)[]);

    useEffect(() => {
        setConfig({
            cine,
            peliculas,
        });
    }, [cine, peliculas]);

    const handleChangePelicula = (pelicula: IPelicula, index: number) => {
        const nuevasPeliculas = peliculas.map((actual, i) => {
            if (i === index) {
                return pelicula;
            } else if (i > index) {
                const diasDeDiferencia = i - index;
                const nuevoDiaInicio = new Date(pelicula.diaFin.getTime() + (86400000 * diasDeDiferencia));
                const nuevoDiaFin = new Date(pelicula.diaFin.getTime() + (86400000 * diasDeDiferencia));
                return {
                    ...actual!,
                    diaInicio: nuevoDiaInicio,
                    diaFin: nuevoDiaFin,
                };
            }

            return actual;
        });

        setPeliculas(nuevasPeliculas);
    };

    return (
        <Card elevation={9} sx={{ width: "400px", marginLeft:"20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{ padding: "10px" }}>
                <CineSelector cine={cine} setCine={setCine}/>
                <PeliculasSelector peliculas={peliculas} onChange={handleChangePelicula}/>
            </Box>
        </Card>
    )
}