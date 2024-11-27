
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import {PeliculaCartelera} from "@/components/peliculaCartelera";
import {FotoButton} from "@/components/fotoButton";

export const CarteleraCaraB = ({config} : {config: IConfigCartelera}) => {
    return (
        <>
            <FotoButton label={"caraB"}/>
            <div className="portada w-[800px] h-[800px] relative flex flex-col">
                {config.cine &&
                    <div className={"grid grid-cols-4 m-auto p-4 relative"}>
                        {config.cine && config.peliculas && config.peliculas.map((pelicula, index) => pelicula && <PeliculaCartelera key={`pelicula-caraB-${index}`} cine={config.cine!} className={`mx-3`} pelicula={pelicula}/>)}
                    </div>
                }
            </div>
        </>

    )
}