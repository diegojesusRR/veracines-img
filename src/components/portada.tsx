
import React from "react";
import {Cabecera} from "@/components/cabecera";
import {Pelicula} from "@/components/pelicula";
import {Footer} from "@/components/footer";

export const Portada = ({config} : {config: any}) => {
    return (
        <div className="portada w-[800px] h-[800px] pl-4 pr-6 pt-4 relative flex flex-col">
            {config.cine &&
                <React.Fragment>
                    {config.cine && <Cabecera config={config}/>}
                    {config.cine && config.pelicula && <Pelicula config={config}/>}
                    {config.cine && <Footer config={config}/>}
                </React.Fragment>
            }
        </div>
    )
}