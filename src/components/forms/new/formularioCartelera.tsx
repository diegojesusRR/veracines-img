import { Box, Button, Card, Stack } from "@mui/material";
import 'react-datepicker/dist/react-datepicker.css';
import { CineSelector } from "@/components/selector/cineSelector";
import { ICarteleraPeliculaHorario, ICarteleraPeliculas, IConfigCartelera } from "@/interfaces/formularios";
import { FormularioPeliculaHorario } from "@/components/forms/new/formularioPeliculaHorario";
import { ICine } from "@/data/cines";
import SwipeableViews from 'react-swipeable-views';
import { useState } from "react";

export const FormularioCartelera = ({ config, setConfig, configCartelera }: {
    config: ICarteleraPeliculas,
    setConfig: (config: ICarteleraPeliculas) => void,
    configCartelera: IConfigCartelera,
}) => {
    const handleChangeCine = (cine: ICine) => {
        setConfig({
            cine,
            proyecciones: config.proyecciones,
        });
    };

    const handleChangeProyeccion = (proyeccion: ICarteleraPeliculaHorario, index: number) => {
        const proyeccionesNuevas = [...config.proyecciones];
        proyeccionesNuevas[index] = proyeccion;
        setConfig({
            cine: config.cine,
            proyecciones: proyeccionesNuevas,
        });
    };

    const handleAddProyeccion = () => {

        // Obtener el ultimo dia de proyecciones actuales
        const ultimoDia  = config.proyecciones[config.proyecciones.length - 1].dias[config.proyecciones[config.proyecciones.length - 1].dias.length - 1].dia;

        const proximoDia = new Date(ultimoDia.getTime() + 86400000);

        const nuevaProyeccion: ICarteleraPeliculaHorario = {
            pelicula: {
                titulo: '',
                tamanoTitulo: 12,
            },
            dias: [{
                dia: proximoDia,
                horarios: [
                    {
                        hora: config.cine.horaDefectoPelicula,
                        vose: false,
                    }
                ]
            }]
        };
        setConfig({
            cine: config.cine,
            proyecciones: [...config.proyecciones, nuevaProyeccion],
        });
    };

    const handleRemoveProyeccion = (index: number) => {
        const proyeccionesActualizadas = [...config.proyecciones];
        proyeccionesActualizadas.splice(index, 1);
        setConfig({
            cine: config.cine,
            proyecciones: proyeccionesActualizadas,
        });
    };

    return (
        <Card elevation={9} sx={{ width: 'calc(100% - 800px)', marginLeft: '20px' }}>
            <Box alignItems="center" justifyContent="center" sx={{ padding: '10px' }}>
                {/* Selector de cine */}
                <CineSelector cine={config.cine} setCine={handleChangeCine} />

                {/* Control de índice y carrusel */}
                <SwipeableProjections
                    config={config}
                    setConfig={handleChangeProyeccion}
                    handleAddProyeccion={handleAddProyeccion}
                    handleRemoveProyeccion={handleRemoveProyeccion}
                    configCartelera={configCartelera}
                />
            </Box>
        </Card>
    );
};

const SwipeableProjections = ({ config, setConfig, handleAddProyeccion, handleRemoveProyeccion, configCartelera } : {
    config: ICarteleraPeliculas,
    setConfig: (config: ICarteleraPeliculaHorario, index: number) => void,
    handleAddProyeccion: () => void,
    handleRemoveProyeccion: (index: number) => void,
    configCartelera: IConfigCartelera,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < config.proyecciones.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleAddProyeccionAndNext = () => {
        handleAddProyeccion();
        setCurrentIndex(currentIndex + 1);
    }

    const handleRemoveProyeccionAndPrevious = (index: number) => {
        handleRemoveProyeccion(index);
        setCurrentIndex(currentIndex == 0 ? 0 : currentIndex - 1);
    }

    return (
        <Box className={'w-full'}>
            {/* Botones de navegación */}
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={currentIndex === 0}
                    onClick={handlePrev}
                >
                    Anterior
                </Button>
                { currentIndex === config.proyecciones.length - 1 ? (
                    <Button
                        variant="contained"
                        color="success"
                        disabled={currentIndex >= configCartelera.maxProyecciones - 1}
                        onClick={handleAddProyeccionAndNext}
                    >
                        + Proyección
                    </Button>
                ) : <Button
                    variant="outlined"
                    color="primary"
                    disabled={currentIndex === config.proyecciones.length - 1}
                    onClick={handleNext}
                >
                    Siguiente
                </Button>}

            </Stack>

            {/* Carrusel */}
            <SwipeableViews
                index={currentIndex}
                onChangeIndex={(index) => setCurrentIndex(index)}
                enableMouseEvents
            >
                {config.proyecciones.map((proyeccion: ICarteleraPeliculaHorario, index: number) => (
                    <Box
                        key={`peliculaHorario-${index}`}
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                        }}
                    >
                        <FormularioPeliculaHorario
                            index={index}
                            config={proyeccion}
                            setConfig={setConfig}
                            cine={config.cine}
                        />
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleRemoveProyeccionAndPrevious(index)}
                            sx={{ mt: 2, width: '100%' }}
                        >
                            Eliminar Proyección
                        </Button>
                    </Box>
                ))}
            </SwipeableViews>
        </Box>
    );
};
