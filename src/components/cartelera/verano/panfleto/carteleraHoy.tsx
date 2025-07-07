import React from "react";
import {PeliculaCartelera} from "@/components/peliculaCartelera";
import {FotoButton} from "@/components/fotoButton";
import {CineCabeceraHorizontal} from "@/components/cartelera/CineCabeceraHorizontal";
import {ICarteleraPeliculas} from "@/interfaces/formularios";
import {PeliculaCarteleraConHorario} from "@/components/peliculaCarteleraConHorario";

export const CarteleraHoy = ({config1, config2}: { config1: ICarteleraPeliculas, config2: ICarteleraPeliculas }) => {

    return (
        <>
            <FotoButton label={"caraB"}/>
            <div className="portada photo-class w-[800px] h-[800px] relative flex flex-row" id={"portada"}>
                <div className="w-[400px] h-[800px] relative flex flex-col">
                    {config1.cine && <CineCabeceraHorizontal config={config1}/>}
                    {config1.cine &&
                        <div className={"grid grid-cols-1 mt-4 relative"}>
                            {config1.cine && config1.proyecciones && config1.proyecciones.map((proyeccion, index) => {
                                    if (!proyeccion) return null
                                    return <PeliculaCarteleraConHorario key={`cine-${index}`} cine={config1.cine}
                                                                        proyeccion={proyeccion}
                                                                        numPeliculas={config1.proyecciones.length}/>
                                }
                            )}
                        </div>
                    }
                </div>
                <div className="w-[400px] h-[800px] relative flex flex-col">
                    {config2.cine && <CineCabeceraHorizontal config={config2}/>}
                    {config2.cine &&
                        <div className={"grid grid-cols-1 mt-4 relative"}>
                            {config2.cine && config2.proyecciones && config2.proyecciones.map((proyeccion, index) => {
                                    if (!proyeccion) return null
                                    return <PeliculaCarteleraConHorario key={`cine-${index}`} cine={config2.cine}
                                                                        proyeccion={proyeccion}
                                                                        numPeliculas={config2.proyecciones.length}/>
                                }
                            )}
                        </div>
                    }
                </div>
            </div>
        </>

    )
}