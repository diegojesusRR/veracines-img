import {
    Box, Button,
    Card,
} from "@mui/material";
import {useEffect, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {CineSelector} from "@/components/selector/cineSelector";
import {IConfigCartelera, IPelicula} from "@/app/cartelera-cara-b/page";
import {PeliculasSelector} from "@/components/selector/peliculasSelector";
import {PeliculaSelector} from "@/components/selector/peliculaSelector";
import {IConfigCaraA} from "@/app/cartelera-cara-a/page";

export const FormularioCaraA = ({config, setConfig, index, className}:{config: IConfigCaraA, setConfig: (config: any, index?: number) => void, index?: number, className?: string}) => {

    const [cine, setCine] = useState(config.cine);
    const [portada, setPortada] = useState(config.portada??{titulo:'', diaInicio:new Date(), diaFin:new Date()});
    const [proximamente, setProximamente] = useState(config.proximamente??[{titulo:'', diaInicio:new Date(), diaFin:new Date()},{titulo:'', diaInicio:new Date(), diaFin:new Date()}]);


    useEffect(() => {
        if(index !== undefined) {
            setConfig({
                cine,
                portada,
                proximamente,
            }, index);
        }
        else {
            setConfig({
                cine,
                portada,
                proximamente,
            });
        }
    }, [cine, portada, proximamente]);

    const handleChangePortada = (pelicula: IPelicula) => {
        setPortada(pelicula);
    };

    const handleChangeProximamente = (pelicula: IPelicula, index: number) => {
        setProximamente(proximamente.map((actual, i) => {
            if (i === index) {
                return pelicula;
            }
            return actual;
        }));
    };

    return (
        <Card elevation={9} sx={{ width: "400px", marginLeft:"20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{ padding: "10px" }}>
                <CineSelector cine={cine} setCine={setCine}/>
                <PeliculaSelector pelicula={portada} label={"Portada"} onChange={handleChangePortada} index={0}/>
                <PeliculasSelector peliculas={proximamente} onChange={handleChangeProximamente}/>
            </Box>
        </Card>
    )
}