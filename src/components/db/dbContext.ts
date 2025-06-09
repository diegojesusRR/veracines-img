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

// Tipo del contexto
type SupabaseContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
};

// Crear el contexto
const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Cargar usuario al iniciar
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user ? { id: user.id, email: user.email! } : null);
            setLoading(false);
        };
        fetchUser();

        // Listener de cambios de autenticación
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ? { id: session.user.id, email: session.user.email! } : null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    // Función de login
    const login = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
    };

    // Función de logout
    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <SupabaseContext.Provider value={{ user, login, logout, loading }}>
    {children}
    </SupabaseContext.Provider>
);
};

// Hook personalizado para usar el contexto
export const useSupabaseAuth = () => {
    const context = useContext(SupabaseContext);
    if (!context) throw new Error('useSupabaseAuth debe estar dentro de un SupabaseProvider');
    return context;
};
