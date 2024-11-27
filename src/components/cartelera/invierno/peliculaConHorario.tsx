'use client'

import React from "react";
import {FotoPelicula} from "@/components/fotoPelicula";
import {ICine} from "@/data/cines";
import {ICarteleraPeliculaHorario} from "@/interfaces/formularios";


export const PeliculaConHorario = ({cine, proyeccion}: { cine: ICine, proyeccion: ICarteleraPeliculaHorario}) => {

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
                    (<span>🇬🇧</span>)
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
                <span>
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
                    marginBottom: '16px',
                    padding: '12px',
                    fontSize: '1.2em',
                    lineHeight: '2em',
                    color: '#222'
                }}
            >
                <div><strong style={{ color: '#2d438f', fontSize: '1.6em' }}>
                    {diaSemanaTexto} {dia.dia.getDate()} {mesTexto}
                </strong></div>
                <div style={{textAlign: "center"}}>{horariosText}</div>
            </div>
        );
    });




    return (
        <div style={{width: '100%', height: 'calc(100% - 144px)', paddingLeft:'20px', paddingRight:'20px'}} className={`flex flex-col justify-center`}>
            {
                proyeccion.pelicula.imagen ?
                    <div className={`grid grid-cols-2 max-h-[640px] py-2 px-2`}>
                        <div className={``}>
                            <FotoPelicula cine={cine} pelicula={proyeccion.pelicula}/>

                        </div>
                        <div className={`col-span-1 flex flex-col space-around justify-top`}>
                            <h3 className={`col-span-3 text-primary text-center font-bold p-2 rounded-lg h-16 flex items-center justify-center underline`}
                                style={{
                                    display: 'block',
                                    marginBottom: '32px',
                                    padding: '12px',
                                    lineHeight: '2em',
                                    color: '#2d438f',
                                    fontSize: '1.6em',
                                    fontWeight: 'bold'
                                }}>
                                {proyeccion.pelicula.titulo}
                            </h3>
                            {horarios.map((horario, index) => (
                                <div key={`horario-${index}`}
                                     className={`col-span-3 text-primary text-left font-bold p-2 rounded-lg h-16 flex items-center justify-center mb-6`}
                                     style={{fontSize: '11px'}}>
                                    {horario}
                                </div>
                            ))}
                        </div>
                    </div>
                    : <></>
            }
        </div>
    )
}