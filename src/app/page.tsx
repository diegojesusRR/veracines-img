"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Portada} from "@/components/portada";
import {Formulario} from "@/components/forms/formulario";

export default function Home() {

    const configInicial = {
        precio: "5,50€",
    }

    const [config, setConfig] = useState(configInicial);

    useEffect(() => {
    }, [config]);

    return (
        <div className="h-[800px] flex flex-col justify-center items-center">
            <h1>Creador de portadas Veracines</h1>
            <div className=" flex flex-row ">
                <a className="p-4 border-2 bg-azul text-white text-xl m-4" href="/cartelera-mixta">Cartelera Mixta</a>
                <a className="p-4 border-2 bg-azul text-white text-xl m-4" href="/cartelera-mano">Cartelera Cara B</a>
            </div>
        </div>

    );
}
