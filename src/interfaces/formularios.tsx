import {ICine} from "@/data/cines";

export interface IPelicula {
    titulo: string,
    tamanoTitulo?: number,
    imagen?: string,
    imagenes?: string[],
}

export interface IConfigCartelera {
    minProyecciones: number,
    maxProyecciones: number,
}

export interface ICarteleraPeliculas {
    cine: ICine,
    proyecciones: ICarteleraPeliculaHorario[],
}

export interface ICarteleraPeliculaHorario {
    pelicula: IPelicula,
    dias: IProyeccionesPeliculaDia[],
}

export interface  IProyeccionesPeliculaDia {
    dia: Date,
    horarios: IProyeccionesPeliculaHorario[],
}

export interface IProyeccionesPeliculaHorario {
    hora: string,
    vose: boolean,
}