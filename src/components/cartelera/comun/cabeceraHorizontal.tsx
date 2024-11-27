import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo-cine.png";
import { ICine } from "@/data/cines";
import { MdLocationOn } from "react-icons/md"; // Importa el icono de ubicación
import { Monoton as Font } from 'next/font/google';

const font = Font({
    subsets: ["latin"],
    weight: ["400"], // Regular weight
});

export const CabeceraHorizontal = ({ cine }: { cine: ICine }) => {
    return (
        <div
            className={`relative w-full h-36 bg-${cine?.color} flex items-center px-8`}
        >
            {/* Fondo con sombreado dinámico */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-white/5 via-black/20 to-transparent"
                style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)',
                    zIndex: 0,
                }}
            />

            {/* Contenedor principal */}
            <div className="flex items-center" style={{ zIndex: 10, marginRight: '30px'}}>
                {/* Elemento 1: Logo */}
                <div style={{position: "relative"}}>

                    <div
                        className="bg-white shadow-lg shadow-gray-500/50 flex items-center justify-center"
                        style={{width: 110, height: 110}}
                    >
                        <Image src={logo} alt="Logo del cine" width={80} height={80} className="object-contain"/>
                    </div>
                    <div
                        className="bg-[#0e226a] shadow-lg shadow-gray-500/50 flex items-center justify-center absolute w-[80px] h-[80px] top-[5px] left-[5px]"
                        style={{width: 110, height: 110, zIndex: -1}}
                    />
                </div>

            </div>

            {/* Elemento 2: Veracines */}
            <div className={`flex flex-col`}>
                <span
                    className={`text-white text-[3rem] flex-1 text-left ${font.className}`}
                    style={{zIndex: 10}}
                >
                VERACINES
            </span>

                {/* Elemento 3: Nombre del cine con icono de ubicación */}
                <span
                    className={`items-center text-white text-[1.5rem] text-right ${font.className}`}
                >
                    {cine?.nombre}
            </span>
            </div>

        </div>
    );
};
