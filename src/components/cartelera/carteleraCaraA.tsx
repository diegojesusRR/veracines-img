
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import {PortadaCaraA} from "@/components/cartelera/caraA/portada";
import {ReversoCaraA} from "@/components/cartelera/caraA/reverso";
import {IConfigCaraA} from "@/app/cartelera-cara-a/page";
import {FotoButton} from "@/components/fotoButton";

export const CarteleraCaraA = ({config} : {config: IConfigCaraA}) => {
    return (
        <>
            <FotoButton label={"caraA"}/>
            <div className="portada w-[800px] h-[800px] relative flex flex-row">
                {config.cine &&
                    <>
                        <ReversoCaraA cine={config.cine} proximamente={config.proximamente!} />
                        <PortadaCaraA cine={config.cine} portada={config.portada!} />
                    </>
                }
            </div>
        </>
    )
}