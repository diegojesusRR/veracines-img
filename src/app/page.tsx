"use client"
import React, {useEffect, useState} from "react";


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
                <a className="p-4 border-2 bg-azul text-white text-xl m-4" href="/cartelera-cara-a">Cartelera Cara A</a>
                <a className="p-4 border-2 bg-azul text-white text-xl m-4" href="/cartelera-cara-b">Cartelera Cara B</a>
                <a className="p-4 border-2 bg-azul text-white text-xl m-4" href="/cartelera-mixta">Cartelera Mixta</a>

            </div>
        </div>

    );
}
