"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Portada} from "@/components/portada";
import {Formulario} from "@/components/formulario";

export default function Home() {

    const configInicial = {
        precio: "5,50€",
    }

    const [config, setConfig] = useState(configInicial);

    useEffect(() => {
    }, [config]);

    return (
        <div className="flex flex-row">
            <div className="hidden">
                <div className="bg-azul shadow-azul text-azul"/>
                <div className="bg-rojo shadow-rojo text-rojo"/>
                <div className="bg-naranja shadow-naranja text-naranja"/>
            </div>
            <Portada config={config}/>
            <Formulario config={config} setConfig={setConfig}/>
        </div>

);
}
