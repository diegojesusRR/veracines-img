import {Box, Card,} from "@mui/material";
import {useEffect, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {CineSelector} from "@/components/selector/cineSelector";
import {ICarteleraPeliculaHorario, ICarteleraPeliculas, IConfigCartelera} from "@/interfaces/formularios";
import {FormularioPeliculaHorario} from "@/components/forms/new/formularioPeliculaHorario";
import {ICine} from "@/data/cines";

export const FormularioCartelera = ({config, setConfig, configCartelera}: {
    config: ICarteleraPeliculas,
    setConfig: (config: ICarteleraPeliculas) => void,
    configCartelera: IConfigCartelera,
}) => {
    const handleChangeCine = (cine: ICine) => {
        setConfig({
            cine,
            proyecciones: config.proyecciones,
        });
    }
    const handleChangeProyeccion = (proyeccion: ICarteleraPeliculaHorario, index: number) => {

        console.log(index);
        const proyeccionesNuevas = config.proyecciones;
        proyeccionesNuevas[index] = proyeccion;
        setConfig({
            cine: config.cine,
            proyecciones: proyeccionesNuevas,
        });
    }

    // TODO: Implementar la lógica para agregar o quitar proyecciones teniendo en cuenta las restricciones de la configuración de la cartelera

    return (
        <Card elevation={9} sx={{width: "calc(100% - 800px)", marginLeft: "20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{padding: "10px"}}>
                <CineSelector cine={config.cine} setCine={handleChangeCine}/>
                {config.proyecciones.map((proyeccion, index) => <FormularioPeliculaHorario key={`peliculaHorario-${index}`} index={index} config={proyeccion} setConfig={handleChangeProyeccion}/>)}
            </Box>
        </Card>
    )
}