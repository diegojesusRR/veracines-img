import {
    Box, Button,
    Card,
} from "@mui/material";
import {useEffect, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {CineSelector} from "@/components/selector/cineSelector";
import {IConfigCartelera, IPelicula} from "@/app/cartelera-mano/page";
import {PeliculaSelector} from "@/components/selector/peliculaSelector";
import {PeliculasSelector} from "@/components/selector/peliculasSelector";
import * as htmlToImage from "html-to-image";

export const FormularioMixto = ({config, setConfig}:{config: IConfigCartelera, setConfig: (config: any) => void}) => {

    const [cine, setCine] = useState(config.cine);
    const [peliculas, setPeliculas] = useState(config.peliculas??[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] as (IPelicula|undefined)[]);
    const [portada, setPortada] = useState(config.portada??{titulo:'', diaInicio:new Date(), diaFin:new Date()});
    const [proximasPeliculas, setProximasPeliculas] = useState([]);


    useEffect(() => {
        setConfig({
            cine,
            peliculas,
            portada,
            proximasPeliculas,
        });
    }, [cine, peliculas, portada, proximasPeliculas]);

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