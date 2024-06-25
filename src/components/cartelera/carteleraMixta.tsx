
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import {PeliculaCartelera} from "@/components/peliculaCartelera";
import {CineCabeceraVertical} from "@/components/cineCabeceraVertical";
import {FotoButton} from "@/components/fotoButton";

export const CarteleraMixta = ({config1, config2} : {config1: IConfigCartelera, config2: IConfigCartelera}) => {

    return (
        <>
            <FotoButton label={"carteleraMixta"}/>
            <div className="portada">
                <div className="w-[800px] h-[400px] relative flex flex-row">
                    {config1.cine && <CineCabeceraVertical config={config1} />}
                    {config1.cine &&
                        <div className={"grid grid-cols-4  m-auto p-4 pb-0 relative"}>
                            {config1.cine && config1.peliculas && config1.peliculas.map((pelicula, index) => pelicula &&
                                <PeliculaCartelera key={`pelicula-cine1-${index}`} cine={config1.cine!} pelicula={pelicula}/>)}
                        </div>
                    }
                </div>
                <div className="w-[800px] h-[400px] relative flex flex-row">
                    {config2.cine && <CineCabeceraVertical config={config2} />}
                    {config2.cine &&
                        <div className={"grid grid-cols-4 m-auto p-4 pt-0 relative"}>
                            {config2.cine && config2.peliculas && config2.peliculas.map((pelicula, index) => pelicula &&
                                <PeliculaCartelera key={`pelicula-cine2-${index}`} cine={config2.cine!}
                                                   pelicula={pelicula}/>)}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}