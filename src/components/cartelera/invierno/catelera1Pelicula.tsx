
import React, {useEffect} from "react";
import {CineCabeceraVertical} from "@/components/cineCabeceraVertical";
import {FotoButton} from "@/components/fotoButton";
import {ICarteleraPeliculas} from "@/interfaces/formularios";
import {CabeceraHorizontal} from "@/components/cartelera/comun/cabeceraHorizontal";
import {PeliculaConHorario} from "@/components/cartelera/invierno/peliculaConHorario";
import {Footer} from "@/components/footer";

export const Cartelera1Pelicula = ({config} : {config: ICarteleraPeliculas}) => {

    return (
        <>
            <FotoButton label={"carteleraMixta"}/>
            <div className="portada photo-class" id={"portada"}>
                <div className="w-[800px] h-[800px] relative grid-cols-1">
                    {config.cine && <CabeceraHorizontal cine={config.cine} />}
                    {config.proyecciones && config.proyecciones.map((proyeccion, index) => proyeccion &&
                        <PeliculaConHorario key={`cine-${index}`} cine={config.cine} proyeccion={proyeccion} numPeliculas={config.proyecciones.length} />)
                    }
                    {config.cine && <Footer cine={config.cine}/>}
                </div>
            </div>
        </>
    )
}