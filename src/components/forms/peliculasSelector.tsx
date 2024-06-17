
import {useEffect, useState} from "react";
import {IPelicula} from "@/app/cartelera-mano/page";
import {PeliculaSelector} from "@/components/forms/peliculaSelector";


interface PeliculaSelectorProps {
    peliculas: (IPelicula | undefined)[];
    onChange: (pelicula: IPelicula, index: number) => void;
}

export const PeliculasSelector = ({ peliculas, onChange }: PeliculaSelectorProps) => {
    // No necesitas useEffect si no tienes lógica que dependa de cambios en peliculas

    const [pelis, setPelis] = useState(peliculas);

    useEffect(() => {
        setPelis(peliculas);
    }, [peliculas]);

    return (
        <>
            {pelis?.map((pelicula, index) => {

                return (<PeliculaSelector
                    key={`pelicula-${index}`}
                    pelicula={pelicula}
                    onChange={(p) => onChange(p, index)}
                    label={`Pelicula ${index}`}
                    index={index}
                />)}
            )}
        </>
    );
};