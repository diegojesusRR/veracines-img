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

export const FormularioCartelera = ({config, setConfig, index, className}:{config: IConfigCartelera, setConfig: (config: any, index?: number) => void, index?: number, className?: string}) => {

    const [cine, setCine] = useState(config.cine);
    const [peliculas, setPeliculas] = useState(config.peliculas??[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] as (IPelicula|undefined)[]);
    const [portada, setPortada] = useState(config.portada??{titulo:'', diaInicio:new Date(), diaFin:new Date()});
    const [proximasPeliculas, setProximasPeliculas] = useState([]);


    useEffect(() => {
        if(index !== undefined) {
            setConfig({
                cine,
                peliculas,
                portada,
                proximasPeliculas,
            }, index);
        }
        else {
            setConfig({
                cine,
                peliculas,
                portada,
                proximasPeliculas,
            });
        }
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

    return (
        <Card elevation={9} sx={{ width: "400px", marginLeft:"20px"}}>
            <Box alignItems="center" justifyContent="center" sx={{ padding: "10px" }}>
                <CineSelector cine={cine} setCine={setCine}/>
                <PeliculasSelector peliculas={peliculas} onChange={handleChangePelicula}/>
            </Box>
        </Card>
    )
}