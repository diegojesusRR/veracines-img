import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../../../lib/supabase';

export interface ICine {

}
export interface IPelicula {
    id: string,
    nombre: string,
    descripcion: string,
    video_id: string,
    imagen_id: string,
};

export interface IGrupoProyecciones {
    id: number,
    cine_id: string,
    pelicula_id: string,
}
