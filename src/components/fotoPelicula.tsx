import React from "react";
import Image from "next/image";

import { ICine } from "@/data/cines";
import {IPelicula as IPeliculaNew} from "@/interfaces/formularios";
import {IPelicula} from "@/app/cartelera-cara-b/page";

export const FotoPelicula = ({cine, pelicula} : {cine: ICine, pelicula: IPelicula|IPeliculaNew}) => {
    return (
        <div className="relative row-span-3 w-full h-full flex items-center justify-center">
            <div className={`bg-${cine.color} p-1 flex items-center justify-center rounded-lg`}
                 style={{aspectRatio: '340/500'}}>
                <img
                    alt="foto_pelicula"
                    className={`object-cover border-${cine.color} rounded-lg`}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    src={pelicula.imagen!}
                />
            </div>
        </div>
    )
}