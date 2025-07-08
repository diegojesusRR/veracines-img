import {ICarteleraPeliculas} from "@/interfaces/formularios";
import React from "react";
import {FotoButton} from "@/components/fotoButton";
import {CineCabeceraHorizontalMiniV2} from "@/components/cineCabeceraHorizontalMini";
import {PeliculaHorizontalMini} from "@/components/PeliculaHorizontalMini";

export const Cartelera12Peliculas = ({config, config2}: { config: ICarteleraPeliculas, config2: ICarteleraPeliculas }) => {

    return (<>
        <FotoButton label={"caraB"}/>
        <div className={`photo-class bg-blue-50 w-[800px] h-[800px] relative flex flex-row`}>
            <div className="w-[400px] h-[800px] relative flex flex-col">
                {config.cine && <CineCabeceraHorizontalMiniV2 config={config}/>}
                {config.cine &&
                    <div className={"grid grid-cols-1 gap-2 relative p-2"}>
                        {config.cine && config.proyecciones && config.proyecciones.map((proyeccion, index) => {
                                if (!proyeccion) return null
                                return <PeliculaHorizontalMini key={`cine-${index}`} cine={config.cine}
                                                                     proyeccion={proyeccion}
                                                                     numPeliculas={config.proyecciones.length}
                                                                     index={index}
                                />
                            }
                        )}
                    </div>
                }
            </div>
            <div className="photo-class w-[400px] h-[800px] relative flex flex-col">
                {config2.cine && <CineCabeceraHorizontalMiniV2 config={config2}/>}
                {config2.cine &&
                    <div className={"grid grid-cols-1 gap-2 relative p-2"}>
                        {config2.cine && config2.proyecciones && config2.proyecciones.map((proyeccion, index) => {
                                if (!proyeccion) return null
                                return <PeliculaHorizontalMini key={`cine-${index}`} cine={config2.cine}
                                                                     proyeccion={proyeccion}
                                                                     numPeliculas={config2.proyecciones.length}
                                                                     index={index}
                                />
                            }
                        )}
                    </div>
                }
            </div>
        </div>
    </>)
}