'use client'

import React, {useEffect} from "react";
import {FotoPelicula} from "@/components/fotoPelicula";
import {ICine} from "@/data/cines";
import {ICarteleraPeliculaHorario} from "@/interfaces/formularios";
import {Monoton as Font} from 'next/font/google';

const font = Font({
    subsets: ["latin"],
    weight: ["400"], // Regular weight
});

export const PeliculaConHorario = ({cine, proyeccion, numPeliculas}: { cine: ICine, proyeccion: ICarteleraPeliculaHorario, numPeliculas: number}) => {

    const horarios = proyeccion.dias.map((dia) => {
        const diaSemana = dia.dia.getDay();
        const diaSemanaTexto = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][diaSemana].toUpperCase();
        const mes = dia.dia.getMonth();
        const mesTexto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][mes].toUpperCase();

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
                        fontSize: '1.5em',
                        fontWeight: '500',
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
                <span className={`no-underline`}>
            {horarios.map((horario, index) => (
                <React.Fragment key={index}>
                    {horario}{index < horarios.length - 2 ? ', ' : index < horarios.length - 1 ? ' y ': ''}
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
                <div><strong style={{ color: cine.colorRef.normal, fontSize: '1.6em'}}>
                    {diaSemanaTexto} {dia.dia.getDate()} {mesTexto}
                </strong></div>
                <div style={{textAlign: "center"}}>{horariosText}</div>
            </div>
        );
    });

    return (
        <div
            style={{
                width: '100%',
                height: `calc((100% - 236px) / ${numPeliculas})`,
                paddingLeft: '20px',
                paddingRight: '20px',
            }}
            className="flex flex-col justify-center"
        >
            {proyeccion.pelicula.imagen ? (
                <div
                    className={`grid ${numPeliculas == 1 ? 'grid-cols-2' : numPeliculas == 2 ? 'grid-cols-4' : `grid-cols-6`} py-2 px-2`}
                >
                    <div className={`${numPeliculas == 3 ? 'col-start-2' : ''}`}>
                        <FotoPelicula cine={cine} pelicula={proyeccion.pelicula} />

                    </div>
                    <div
                        className={`${
                            numPeliculas == 1 ? '' : numPeliculas == 2 ? 'col-span-3' : 'col-span-4'
                        } flex flex-col space-around justify-top uppercase font-bold text-center`}
                    >
                        <div style={{marginBottom: '10px'}} className={'underline'}>
                            <strong style={{color: cine.colorRef.dark, fontSize: numPeliculas == 3 ? '1em' : '1.4em'}}>
                                {proyeccion.pelicula.titulo}
                            </strong>
                        </div>
                        <div>
                        {horarios.map((horario, index) => (
                            <div
                                key={`horario-${index}`}
                                className={`text-primary text-center font-bold flex items-center justify-center mb-${
                                    numPeliculas > 1 ? 2 : 4
                                }`}
                                style={{fontSize: numPeliculas == 3 ? '0.45em' : '0.6em'}}
                            >
                                {horario}
                            </div>
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