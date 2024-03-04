import React from "react";
import Image from "next/image";

export const FotoPelicula = ({config} : {config: any}) => {
    return (
        <div className="relative row-span-3 w-full h-full flex items-center justify-center">
            <div className={`shadow-[10px_10px_0_0] shadow-${config.cine.color} bg-${config.cine.color} p-2 flex items-center justify-center`}>
                <Image alt="foto_pelicula" className="object-contain" width={340} height={500} src={config.pelicula.imagen} />
            </div>
        </div>
    )
}