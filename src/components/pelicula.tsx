import React from "react";
import {Kanit} from "next/font/google";
import {InfoPelicula} from "@/components/infoPelicula";
import {FotoPelicula} from "@/components/fotoPelicula";

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] })


export const Pelicula = ({config} : {config: any}) => {
    return (
        <div className="mt-5 flex space-x-4 flex-1">
            <InfoPelicula config={config}/>
            <FotoPelicula config={config}/>
        </div>
    )
}