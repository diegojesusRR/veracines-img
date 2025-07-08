"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-[800px] flex flex-col justify-center items-center">
            <h1>Creador de portadas Veracines</h1>
            <div className="grid grid-cols-4 gap-4">
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-cara-a"}> Cartelera Cara A</Link>
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-cara-b"}> Cartelera Cara B</Link>
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-mixta"}> Cartelera Mixta</Link>
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-hoy"}> Cartelera 2 Peliculas</Link>
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-invierno"}> Cartelera Con Horarios</Link>
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-6"}> Cartelera 6 Peliculas</Link>
                <Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-12"}> Cartelera 12 Peliculas</Link>
                {/*<Link className="p-4 border-2 bg-vera text-white text-xl m-4" href={"/cartelera-doble"}> Cartelera 2 Pelicula</Link>*/}
            </div>
        </div>

    );
}
