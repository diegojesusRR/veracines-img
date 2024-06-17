
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-mano/page";
import {PeliculaCartelera} from "@/components/peliculaCartelera";
import {CineCabeceraVertical} from "@/components/cineCabeceraVertical";
import veraCinta from "@/public/images/vera-cinta.png";
import garruchaCinta from "@/public/images/garrucha-cinta.png";
export const CarteleraMixta = ({config1, config2} : {config1: IConfigCartelera, config2: IConfigCartelera}) => {

    return (
        <>
            <div className="portada w-[800px] h-[400px] relative flex flex-row">
                {config1.cine && <CineCabeceraVertical config={config1} src={veraCinta}/>}
                {config1.cine &&
                    <div className={"grid grid-cols-4  m-auto p-4 pb-0 relative"}>
                        {config1.cine && config1.peliculas && config1.peliculas.map((pelicula, index) => pelicula &&
                            <PeliculaCartelera key={`pelicula-cine1-${index}`} cine={config1.cine!} pelicula={pelicula}/>)}
                    </div>
                }
            </div>
            <div className="portada w-[800px] h-[400px] relative flex flex-row">
                {config2.cine && <CineCabeceraVertical config={config2} src={garruchaCinta}/>}
                {config2.cine &&
                    <div className={"grid grid-cols-4 m-auto p-4 pt-0 relative"}>
                        {config2.cine && config2.peliculas && config2.peliculas.map((pelicula, index) => pelicula &&
                            <PeliculaCartelera key={`pelicula-cine2-${index}`} cine={config2.cine!}
                                               pelicula={pelicula}/>)}
                    </div>
                }
            </div>
        </>
    )
}