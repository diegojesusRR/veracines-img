
import React from "react";
import {IPelicula} from "@/app/cartelera-cara-b/page";
import {ICine} from "@/public/data/cines";

export const ReversoCaraA = ({cine, proximamente} : {cine: ICine, proximamente: (IPelicula|undefined)[]}) => {
    return (
        <div className="portada w-[400px] h-[800px] relative flex flex-col">
            {cine &&
                <>
                    <img
                        alt={`foto_pelicula`}
                        className={`object-cover border-${cine.color}`}
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        src={`reverso-${cine.corto}.png`}
                    />
                    {proximamente && proximamente.length > 0 && proximamente.find(x => x?.imagen) !== undefined &&
                        <div className={`absolute top-0 left-0 w-full h-1/2 text-primary p-4`}>
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

                </>

            }

        </div>
    )
}