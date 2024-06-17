
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-mano/page";
import {PeliculaCartelera} from "@/components/peliculaCartelera";

export const CarteleraCaraB = ({config} : {config: IConfigCartelera}) => {
    return (
        <div className="portada w-[800px] h-[800px] relative flex flex-col">
            {config.cine &&
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-auto p-4 relative"}>
                    {config.cine && config.peliculas && config.peliculas.map((pelicula, index) => pelicula && <PeliculaCartelera key={`pelicula-caraB-${index}`} cine={config.cine!} pelicula={pelicula}/>)}
                </div>
            }
        </div>
    )
}