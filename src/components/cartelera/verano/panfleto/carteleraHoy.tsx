import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import {PeliculaCartelera} from "@/components/peliculaCartelera";
import {FotoButton} from "@/components/fotoButton";
import {CineCabeceraHorizontal} from "@/components/cartelera/CineCabeceraHorizontal";

export const CarteleraHoy = ({config1, config2}: { config1: IConfigCartelera, config2: IConfigCartelera }) => {
    return (
        <>
            <FotoButton label={"caraB"}/>
            <div className="portada w-[800px] h-[800px] relative flex flex-row">
                <div className="w-[400px] h-[800px] relative flex flex-col">
                    {config1.cine && <CineCabeceraHorizontal config={config1}/>}
                    {config1.cine &&
                        <div className={"grid grid-cols-1  m-auto p-4 relative"}>
                            {config1.cine && config1.peliculas && config1.peliculas.map((pelicula, index) => pelicula &&
                                <PeliculaCartelera key={`pelicula-cine1-${index}`} maxHeight={620} cine={config1.cine!}
                                                   pelicula={pelicula}/>)}
                        </div>
                    }
                </div>
                <div className="w-[400px] h-[800px] relative flex flex-col">
                    {config2.cine && <CineCabeceraHorizontal config={config2}/>}
                    {config2.cine &&
                        <div className={"grid grid-cols-1 m-auto p-4 relative"}>
                            {config2.cine && config2.peliculas && config2.peliculas.map((pelicula, index) => pelicula &&
                                <PeliculaCartelera key={`pelicula-cine2-${index}`} maxHeight={620} cine={config2.cine!}
                                                   pelicula={pelicula}/>)}
                        </div>
                    }
                </div>
            </div>
        </>

    )
}