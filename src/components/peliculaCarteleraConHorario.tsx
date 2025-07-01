'use client'

import React, {useEffect} from "react";
import {FotoPelicula} from "@/components/fotoPelicula";
import {ICine} from "@/data/cines";
import {ICarteleraPeliculaHorario} from "@/interfaces/formularios";
import {Monoton as Font} from 'next/font/google';
import {width} from "@mui/system";

const font = Font({
    subsets: ["latin"],
    weight: ["400"], // Regular weight
});

export const PeliculaCarteleraConHorario = ({cine, proyeccion, numPeliculas}: { cine: ICine, proyeccion: ICarteleraPeliculaHorario, numPeliculas: number}) => {

    const horarios = proyeccion.dias.map((dia) => {
        const diaSemana = dia.dia.getDay();
        const diaSemanaTexto = ['D', 'L', 'M', 'X', 'J', 'V', 'S'][diaSemana].toUpperCase();
        const mes = dia.dia.getMonth();
        //const mesTexto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][mes].toUpperCase();

        // Mapear horarios con banderas
        const horarios = dia.horarios.map((horario) => {
            const bandera = horario.vose
                ? (
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginLeft: '8px',
                    }}>
                    (<span>VOSE</span>)
                </span>
                )
                : '';
            return (
                <span
                    key={horario.hora}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '1.4em',
                        fontWeight: 'bold',
                        color: '#333',
                        // marginRight: '12px'
                    }}
                >
                {`${horario.hora}H`}{bandera}
            </span>
            );
        });

        // Combinar horarios con comas y manejar el último elemento con "y"
        const horariosText = horarios.length > 0
            ? (
                <span className={`no-underline`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {horarios.map((horario, index) => (
                <React.Fragment key={index}>
                    {horario}
                </React.Fragment>
            ))}
        </span>
            ) : '';

        // Contenedor para los días y horarios
        return (
            <div
                key={dia.dia.getTime()}
                style={{
                    display: 'block',
                    padding: '0 12px 0 12px',
                    fontSize: '1em',
                    lineHeight: numPeliculas == 3 ? '1.6em' : '1.8em',
                    marginBottom: numPeliculas >= 2 ? '0px' : '10px',
                    color: '#222'
                }}
            >
                <div><strong style={{ fontSize: '1.6em', textDecoration: 'underline'}} className={`text-${cine.color}`}>
                    {diaSemanaTexto} {dia.dia.getDate()}
                </strong></div>
                <div style={{textAlign: "center"}}>{horariosText}</div>
            </div>
        );
    });

    return (
        <div
            style={{
                width: '100%',
                paddingLeft: '20px',
                paddingRight: '20px',
            }}
            className="flex flex-col justify-center"
        >
            {proyeccion.pelicula.imagen ? (
                <div className="flex flex-col w-full items-center">
                    <div className="w-full flex justify-center mb-2 px-4">
                        <FotoPelicula cine={cine} pelicula={proyeccion.pelicula} />
                    </div>
                    <div className="flex flex-col uppercase font-bold text-center w-full">
                        <div
                            className={`underline text-${cine.color}`}
                            style={{
                                marginBottom: '10px',
                                textAlign: 'center',
                                height: '5em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.85)',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                padding: '0.3em 0.8em',
                                minHeight: '2.8em',
                                transition: 'background 0.2s'
                            }}
                            title={proyeccion.pelicula.titulo}
                        >
                            <strong
                                style={{
                                    fontSize: numPeliculas == 3 ? '1.1em' : '1.5em',
                                    lineHeight: '1.3em',
                                    display: 'inline-block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    textAlign: 'center',
                                    maxHeight: '2.8em',
                                    letterSpacing: '0.02em',
                                    transition: 'font-size 0.2s'
                                }}
                            >
                                {proyeccion.pelicula.titulo}
                            </strong>
                        </div>
                        <div className="flex flex-row gap-0 justify-center" style={{width: '108%', marginLeft: '-2%'}}>
                            {horarios.map((horario, index) => (
                                <React.Fragment key={`horario-${index}`}>
                                    <div
                                        className={`text-${cine.color} text-top font-bold flex items-top justify-top mb-${
                                            numPeliculas > 1 ? 2 : 4
                                        }`}
                                        style={{
                                            fontSize: numPeliculas == 3 ? '0.45em' : '0.65em',
                                            flex: 1,
                                            minWidth: 0,
                                            overflow: 'hidden',
                                            width: 'calc(100% / ' + horarios.length + ' + 20px)',
                                            //maxWidth: 'calc(100% / ' + horarios.length + ' + 20px)',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            marginTop: '1em',
                                            maxWidth: '74px'
                                        }}
                                    >
                                        {horario}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>

    )
}