"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-[800px] flex flex-col justify-center items-center">
            <h1>Creador de portadas Veracines</h1>
            <div className=" flex flex-row ">
                <Link className="p-4 border-2 bg-azul text-white text-xl m-4" href={"/cartelera-cara-a"}> Cartelera Cara A</Link>
                <Link className="p-4 border-2 bg-azul text-white text-xl m-4" href={"/cartelera-cara-b"}> Cartelera Cara B</Link>
                <Link className="p-4 border-2 bg-azul text-white text-xl m-4" href={"/cartelera-mixta"}> Cartelera Mixta</Link>
                <Link className="p-4 border-2 bg-azul text-white text-xl m-4" href={"/cartelera-hoy"}> Cartelera 2 Peliculas</Link>
                <Link className="p-4 border-2 bg-azul text-white text-xl m-4" href={"/cartelera-unica"}> Cartelera 1 Pelicula</Link>
                <Link className="p-4 border-2 bg-azul text-white text-xl m-4" href={"/cartelera-doble"}> Cartelera 2 Pelicula</Link>
            </div>
        </div>

    );
}
