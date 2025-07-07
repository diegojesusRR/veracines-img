import {ICarteleraPeliculas} from "@/interfaces/formularios";
import {CineCabeceraHorizontalV2} from "@/components/cineCabeceraHorizontalV2";
import React from "react";
import {FotoButton} from "@/components/fotoButton";
import {PeliculaHorizontalConHorario} from "@/components/peliculaHorizontalConHorario";

export const Cartelera6Peliculas = ({config}: { config: ICarteleraPeliculas }) => {
    return (<>
        <FotoButton label={"caraB"}/>
        <div className={`photo-class ${config.cine.color == 'vera' ? `bg-blue-50` : `bg-red-50`} w-[800px] h-[800px] relative flex flex-row`}>
            <div className="photo-class w-[800px] h-[800px] relative flex flex-col">
                {config.cine && <CineCabeceraHorizontalV2 config={config}/>}
                {config.cine &&
                    <div className={"grid grid-cols-2 gap-2 relative p-2"}>
                        {config.cine && config.proyecciones && config.proyecciones.map((proyeccion, index) => {
                                if (!proyeccion) return null
                                return <PeliculaHorizontalConHorario key={`cine-${index}`} cine={config.cine}
                                                                     proyeccion={proyeccion}
                                                                     numPeliculas={config.proyecciones.length}/>
                            }
                        )}
                    </div>
                }
            </div>
        </div>
    </>)
}