import React from "react";
import {IPelicula} from "@/app/cartelera-cara-b/page";
import {ICine} from "@/data/cines";
import Image from "next/image";
import veraCinta from "@/public/images/logo-cine.png";
import regioCinta from "@/public/images/logo-regio.png";
import BurguerIcon from "@/components/iconos/burguer";
import IceCreamIcon from "@/components/iconos/icecream";
import PopCornIcon from "@/components/iconos/popcorn";
import Proyector2K from "@/components/iconos/proyector2K";
import ParkingIcon from "@/components/iconos/parking";
import ClimatizacionIcon from "@/components/iconos/climatizacion";

export const ReversoCaraA = ({cine, proximamente}: { cine: ICine, proximamente: (IPelicula | undefined)[] }) => {
    return (
        <div className="portada photo-class w-[400px] h-[800px] relative flex flex-col" id={"portada"}>
            {cine &&
                <>
                    {proximamente && proximamente.length > 0 && proximamente.find(x => x?.imagen) !== undefined &&
                        <div className={`w-full h-[320px] text-primary p-4`}>
                            <h1 className={`text-${cine.color} text-2xl w-full text-center font-bold`}>Próximamente</h1>
                            <div className={"flex flex-row justify-center items-center space-x-4"}>
                                {proximamente.map((pelicula: IPelicula | undefined, index: number) => {
                                    return pelicula && pelicula.imagen ? (
                                        <div key={index} className={`flex justify-center items-center w-1/2 p-2`}>
                                            <img
                                                alt={`foto_pelicula`}
                                                className={`object-cover border-${cine.color} rounded-lg`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'cover'
                                                }}
                                                src={pelicula.imagen}
                                            />
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>

                    }

                        <div
                            className={`text-center w-full px-2 text-sm font-semibold text-primary pb-4 text-${cine.color}`}>
                            Consulta la caltelera actualizada de Cine Municipal Terraza de Verano y Cine Regio en:
                        </div>

                        <div className="flex flex-row justify-center items-center">
                            <div className="flex-1 gap-2 flex flex-col justify-center items-center h-full">
                                <Image
                                    alt="foto_pelicula"
                                    className="bg-transparent"
                                    src={veraCinta}
                                    style={{height: "100%", width: "auto", objectFit: "contain"}}
                                />
                                <div className="flex flex-col justify-center items-center w-full mt-2">
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.veracines.es/cartelera-vera/&color=0e226a"
                                        alt="QR VeraCines"
                                        className="w-20 h-20"
                                    />
                                    <p style={{fontSize:"10px", color: '#0e226a'}}>Cine de Verano</p>
                                </div>
                            </div>
                            <div className="flex-1 gap-2 flex flex-col justify-center items-center h-full">
                                <Image
                                    alt="foto_pelicula"
                                    className="bg-transparent"
                                    src={regioCinta}
                                    style={{height: "100%", width: "auto", objectFit: "contain"}}
                                />
                                <div className="flex flex-col justify-center items-center w-full mt-2">
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.veracines.es/cartelera-regio/&color=bd2c3a"
                                        alt="QR VeraCines"
                                        className="w-20 h-20 bg-transparent"
                                    />
                                    <p style={{fontSize:"10px", color: '#bd2c3a'}}>Cine Regio</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`text-center w-full text-xs font-semibold text-primary pt-8 text-${cine.color}`}>
                            <p style={{fontSize: '0.8em'}}>www.veracines.es</p>
                            <p style={{fontSize: '0.8em'}}>660 391 365</p>
                        </div>

                    <div
                        className={`absolute bottom-0 text-center w-full text-xs font-semibold text-primary pt-4 pb-4 text-${cine.color}`}>
                        <h2 style={{fontSize: '0.8em'}}>Nuestros servicios:</h2>

                        <div className="flex flex-row justify-center items-center gap-2 pt-4 w-full px-6">

                            {/* Bocatería */}
                            <div title="Bocatería" className="flex-1 flex flex-col items-center">
                                <BurguerIcon color={cine.color} width={34} height={34}/>
                                <p style={{fontSize: '0.8em'}}>Bocatería</p>
                            </div>

                            {/* Heladería */}
                            <div title="Heladería" className="flex-1 flex flex-col items-center">
                                <IceCreamIcon color={cine.color} width={34} height={34}/>
                                <p style={{fontSize: '0.8em'}}>Heladería</p>
                            </div>
                            {/* Palomitas */}
                            <div title="Palomitas" className="flex-1 flex flex-col items-center">
                                <PopCornIcon color={cine.color} width={34} height={34}/>
                                <p style={{fontSize: '0.8em'}}>Palomitas</p>
                            </div>
                            {/* Cine 2K */}
                            <div title="2K" className="flex-1 flex flex-col items-center">
                                <Proyector2K color={cine.color} width={34} height={34}/>
                                <p style={{fontSize: '0.8em'}}>2K</p>
                            </div>
                            {/* Parking gratuito */}
                            <div title="Parking" className="flex-1 flex flex-col items-center">
                                <ParkingIcon color={cine.color} width={34} height={34}/>
                                <p style={{fontSize: '0.8em'}}>Parking</p>
                            </div>
                            {/* Climatización */}
                            <div title="Climatización" className="flex-1 flex flex-col items-center">
                                <ClimatizacionIcon color={cine.color} width={34} height={34}/>
                                <p style={{fontSize: '0.8em'}}>Climatización</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}