
import React from "react";
import {Cabecera} from "@/components/cabecera";
import {Pelicula} from "@/components/pelicula";
import {Footer} from "@/components/footer";
import {IConfigCartelera} from "@/app/cartelera-mano/page";

export const CarteleraCaraA = ({config} : {config: IConfigCartelera}) => {
    return (
        <div className="portada w-[800px] h-[800px] pl-4 pr-6 pt-4 relative flex flex-col">
            {config.cine &&
                <React.Fragment>
                </React.Fragment>
            }
        </div>
    )
}