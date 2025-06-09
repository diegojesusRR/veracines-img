import type {GrupoProyeccion, Proyeccion} from "@/types/Proyeccion.ts";
import {PELICULAS} from "@/consts/peliculas.ts";
import {CINES} from "@/consts/cines.ts";


function getProyecciones(fechaInicio: Date, fechaFin: Date, hora: string, vose?: string): Proyeccion[] {
    //Array con los dias entre fecha inicio y fecha fin
    const dias = [];
    for (let d = fechaInicio; d <= fechaFin; d.setDate(d.getDate() + 1)) {
        dias.push(new Date(d));
    }

    return dias.map((fecha) => {
        return {
            fecha,
            hora,
            vose
        }
    });
}

const cineGarrucha = CINES.find(cine => cine.url === 'garrucha')!;
const gruposProyeccionesGarrucha: GrupoProyeccion[] = []

const cineVera = CINES.find(cine => cine.url === 'vera')!;
const gruposProyeccionesVera: GrupoProyeccion[] = []

const cineRegio = CINES.find(cine => cine.url === 'regio')!;
const gruposProyeccionesRegio: GrupoProyeccion[] = [
    {
        grupo: 1,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'gladiator-2')!,
        proyecciones: [
            ...getProyecciones(new Date('2024-11-15'), new Date('2024-11-17'),  '17:30'),
            ...getProyecciones(new Date('2024-11-15'), new Date('2024-11-17'),  '20:30'),
            ...getProyecciones(new Date('2024-11-21'), new Date('2024-11-21'), '20:00', 'en'),
        ],
        entradas: {
            espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1133&cine=REGIO',
            vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1134&cine=REGIO'
        }
    },
    {
        grupo: 2,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'wicked')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-11-22'), new Date('2024-11-22'),  '20:00'),
            ...getProyecciones(new Date('2024-11-23'), new Date('2024-11-23'),  '17:30'),
            ...getProyecciones(new Date('2024-11-23'), new Date('2024-11-23'),  '20:30'),
            ...getProyecciones(new Date('2024-11-24'), new Date('2024-11-24'),  '17:30'),
            ...getProyecciones(new Date('2024-11-28'), new Date('2024-11-28'),  '20:00', 'en')
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 3,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'la-infiltrada')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-11-30'), new Date('2024-12-01'),  '18:00'),
            ...getProyecciones(new Date('2024-11-30'), new Date('2024-11-30'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 4,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'gladiator-2')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-12-06'), new Date('2024-12-08'),  '17:30'),
            ...getProyecciones(new Date('2024-12-07'), new Date('2024-12-07'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 4,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'vaiana-2')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-12-13'), new Date('2024-12-13'),  '19:00'),
            ...getProyecciones(new Date('2024-12-14'), new Date('2024-12-15'),  '17:00'),
            ...getProyecciones(new Date('2024-12-14'), new Date('2024-12-14'),  '19:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    }
]

export const GRUPOSPROYECCIONES: GrupoProyeccion[] = [
    ...gruposProyeccionesVera,
    ...gruposProyeccionesGarrucha,
    ...gruposProyeccionesRegio
]