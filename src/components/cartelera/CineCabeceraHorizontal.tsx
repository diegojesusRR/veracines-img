import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";

export const CineCabeceraHorizontal = ({config}: { config: IConfigCartelera }) => {

    return (
        <div
            className={`h-[80px] w-[360px] bg-${config.cine?.color} flex flex-row items-center justify-around mx-auto my-2 rounded-lg relative`}>
            <span className="text-white w-[220px] text-center font-bold text-xl transform ">
                {config.cine?.nombre}
            </span>
        </div>
    )
}