import {Box, Button, Card,} from "@mui/material";
import {useEffect, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {ICarteleraPeliculaHorario, IPelicula, IProyeccionesPeliculaDia} from "@/interfaces/formularios";
import {FormularioPelicula} from "@/components/forms/new/formularioPelicula";
import {FormularioProyeccionDia} from "@/components/forms/new/formularioProyeccionDia";

export const FormularioPeliculaHorario = ({config, setConfig, index}: {
    config: ICarteleraPeliculaHorario,
    setConfig: (config: ICarteleraPeliculaHorario, index: number) => void,
    index: number,
}) => {
    const handleChangePelicula = (pelicula: IPelicula) => {
        setConfig({
            pelicula,
            dias: config.dias,
        }, index);
    }
    const handleChangeDia = (dia: IProyeccionesPeliculaDia, indexDia: number) => {
        const diasNuevos = config.dias;
        diasNuevos[indexDia] = dia;
        setConfig({
            pelicula: config.pelicula,
            dias: diasNuevos,
        }, index);
    }

    const getSiguienteDia = () => {
        const ultimaDia = config.dias[config.dias.length - 1].dia;
        const dia = new Date(ultimaDia);
        dia.setDate(dia.getDate() + 1);
        return dia;
    }
    const addNuevoDia = () => {
        setConfig({
            pelicula: config.pelicula,
            dias: [...config.dias, {dia: getSiguienteDia(), horarios: [{hora: "18:00", vose: false}]}],
        }, index);
    }

    return (
        <Card elevation={9} sx={{ marginLeft: "20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{padding: "10px"}}>
                <FormularioPelicula pelicula={config.pelicula} onChange={handleChangePelicula} label={"Pelicula 1"}/>
                {
                    config.dias.map((x, index2) => <FormularioProyeccionDia config={x} key={`proyeccionDia-${index2}`} index={index2} onChange={handleChangeDia}/>)
                }
                <Button onClick={addNuevoDia}>+ Día</Button>
            </Box>
        </Card>
    )
}