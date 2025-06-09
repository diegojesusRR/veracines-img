
export interface IPelicula {
    id: string
    imagen: string,
    nombre: string,
    descripcion: string,
    edadRedomendada: EEdadRecomendada,
    videoUrl: string,
}

export interface IPeliculaFormulario extends Omit<IPelicula, 'imagen'> {
    tamanoTitulo?: number,
    imagen?: string,
    imagenes?: string[],
}

export enum EEdadRecomendada {
    TODOS_LOS_PUBLICOS = "Todos los públicos",
    NO_RECOMENDADA_MENORES_7 = "No recomendada menores de 7 años",
    NO_RECOMENDADA_MENORES_12 = "No recomendada menores de 12 años",
    NO_RECOMENDADA_MENORES_16 = "No recomendada menores de 16 años",
    NO_RECOMENDADA_MENORES_18 = "No recomendada menores de 18 años",
    PENDIENTE_CALIFICACION = "Pendiente de calificación",
}

export const PELICULAS: IPelicula[] = [
    {
        id: "el-reino-del-planeta-de-los-simios",
        imagen: "el-reino-del-planeta-de-los-simios.jpeg",
        nombre: "El reino del planeta de los simios",
        descripcion: "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual. ",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/fWWrW_VLjws"
    },
    {
        id: "un-lugar-tranquilo-dia-1",
        imagen: "un-lugar-tranquilo-dia-1.jpeg",
        nombre: "Un Lugar Tranquilo: Dia 1",
        descripcion: "Una mujer llamada Sam trata de sobrevivir a una invasión en la ciudad de Nueva York por criaturas alienígenas sedientas de sangre con oídos ultrasónicos. Tercera entrega de la saga.",
        edadRedomendada: EEdadRecomendada.PENDIENTE_CALIFICACION,
        videoUrl: "https://www.youtube.com/embed/G0HL9dFjm5E"
    },
    {
        id: "gru-4-mi-villano-favorito",
        imagen: "gru-4-mi-villano-favorito.jpeg",
        nombre: "Gru 4. Mi villano favorito",
        descripcion: "Gru, Lucy y las niñas -Margo, Edith y Agnes- dan la bienvenida a un nuevo miembro en la familia: Gru Junior, que parece llegar con el propósito de ser un suplicio para su padre. Gru tendrá que enfrentarse en esta ocasión a su nueva némesis Maxime Le Mal y su sofisticada y malévola novia Valentina, lo que obligará a la familia a tener que darse a la fuga. Cuarta entrega de 'Gru, mi villano favorito'.",
        edadRedomendada: EEdadRecomendada.TODOS_LOS_PUBLICOS,
        videoUrl: "https://www.youtube.com/embed/zUFt9_WOoPc"
    },
    {
        id: "bad-boys-ride-or-die",
        imagen: "bad-boys-ride-or-die.jpeg",
        nombre: "Bad Boys: Ride or Die",
        descripcion: "Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga 'Dos policías rebeldes'.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_16,
        videoUrl: "https://www.youtube.com/embed/LOZqqEXURzg"
    },
    {
        id: "inside-out-2",
        imagen: "inside-out-2.webp",
        nombre: "Inside Out 2",
        descripcion: "Secuela de 'Del revés (Inside Out)'. Riley tiene ahora 17 años y ha dejado de ser la niña de la película original. La historia se centrará en las emociones de un nuevo personaje, una niña de 12 años llamada Riley Anderson, que vive en Minnesota y que está pasando por un momento difícil en su vida.",
        edadRedomendada: EEdadRecomendada.TODOS_LOS_PUBLICOS,
        videoUrl: "https://www.youtube.com/embed/ahogVfXzqs4"
    },
    {
        id: "fly-by-the-moon",
        imagen: "fly-by-the-moon.jpg",
        nombre: "Fly by the Moon",
        descripcion: "Ambientada en el histórico alunizaje del Apolo 11, en 1969. Llamados para mejorar la imagen pública de la NASA, las chispas vuelan en todas las direcciones cuando la prodigio del marketing Kelly Jones (Johansson) causa estragos en la ya difícil tarea del director del lanzamiento Cole Davis (Tatum). Cuando la Casa Blanca considera que la misión es demasiado importante para fracasar, Jones recibe la orden de simular un alunizaje falso como respaldo, comenzando la verdadera cuenta atrás...",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/2Myr0oKRPUU"
    },
    {
        id: "padre-no-hay-mas-que-uno-4",
        imagen: "padre-no-hay-mas-que-uno-4.webp",
        nombre: "Padre no hay más que uno 4",
        descripcion: "¿Qué efecto tendría en unos padres que el mismo día que su hija mayor cumple 18 años su novio le proponga matrimonio y ella acepte de inmediato?",
        edadRedomendada: EEdadRecomendada.TODOS_LOS_PUBLICOS,
        videoUrl: "https://www.youtube.com/embed/dPsUo_D-iO4"
    },
    {
        id: "twisters",
        imagen: "twisters.jpeg",
        nombre: "Twisters",
        descripcion: "Una actualización de la película de 1996 'Twister', centrada en un par de cazadores de tormentas que arriesgan sus vidas en un intento de probar un sistema experimental de alerta meteorológica.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/gUBCmS1H8O4"
    },
    {
        id: "garfield",
        imagen: "garfield.jpeg",
        nombre: "Garfield: La Pelicula",
        descripcion: "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre –el desaliñado gato callejero Vic– Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
        edadRedomendada: EEdadRecomendada.TODOS_LOS_PUBLICOS,
        videoUrl: "https://www.youtube.com/embed/w5OVkrlQdxg"
    },
    {
        id: "deadpool-y-lobezno",
        imagen: "deadpool-y-lobezno.jpeg",
        nombre: "Deadpool y Lobezno",
        descripcion: "Tercera entrega de la saga \"Deadpool\", ahora integrada en el Universo Cinematográfico de Marvel (MCU) pero manteniendo su enfoque para adultos, con calificación R. En septiembre de 2022 se confirmó la aparición de Hugh Jackman como Lobezno, por primera vez desde \"Logan\".",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_16,
        videoUrl: "https://www.youtube.com/embed/tTM5weeCFvQ"
    },
    {
        id: "cuerpo-escombro",
        imagen: "cuerpo-escombro.jpg",
        nombre: "Cuerpo Escombro",
        descripcion: "Ante los problemas para encontrar trabajo y liado por su hermano Fermín, Javi se hace pasar por discapacitado para conseguir un puesto que necesita desesperadamente. Pero fingir parálisis cerebral es más complicado de lo que parece, sobre todo cuando se enamora de su jefa.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_7,
        videoUrl: "https://www.youtube.com/embed/l-W4M9QrhS8"
    },
    {
        id: "la-trampa",
        imagen: "la-trampa.jpg",
        nombre: "La Trampa",
        descripcion: "Un padre y su hija adolescente asisten a un concierto de música pop, donde se dan cuenta de que están en el centro de un oscuro y siniestro suceso.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/v7BpWoDJDaI"
    },
    {
        id: "buffalo-kids",
        imagen: "buffalo-kids.jpg",
        nombre: "Buffalo Kids",
        descripcion:"Tom y Mary, dos hermanos huérfanos, desembarcan en Nueva York a finales del siglo XIX. Para reunirse con su tío, se aventuran como polizones en un tren por el Salvaje Oeste donde conocerán a Nick, un nuevo y extraordinario amigo que cambiará sus vidas para siempre. Juntos se embarcarán en un peligroso viaje, enfrentándose a malvados villanos, haciendo inesperados amigos y viviendo situaciones únicas.",
        edadRedomendada: EEdadRecomendada.TODOS_LOS_PUBLICOS,
        videoUrl: "https://www.youtube.com/embed/JyEU5-a4G44"
    },
    {
        id: "parpadea-dos-veces",
        imagen: "parpadea-dos-veces.jpg",
        nombre: "Parpadea dos veces",
        descripcion: "Cuando el magnate de la tecnología Slater King (Channing Tatum) conoce a la camarera Frida (Naomi Ackie) en su gala de recaudación de fondos, saltan chispas. Él la invita a acompañarle a él y a sus amigos a unas vacaciones de ensueño en su isla privada. Un auténtico paraíso. Las noches salvajes se mezclan con mañanas bañadas por el sol y todo el mundo se lo pasa en grande. Nadie quiere que el viaje termine, pero cuando empiezan a suceder cosas extrañas, Frida intuye que algo anda mal en ese lugar. Tendrá que descubrir la verdad si quiere salir viva de la fiesta.",
        edadRedomendada: EEdadRecomendada.PENDIENTE_CALIFICACION,
        videoUrl: "https://www.youtube.com/embed/5yZOzi5h54U"
    },
    {
        id: "odio-el-verano",
        imagen: "odio-el-verano.jpg",
        nombre: "Odio el verano",
        descripcion: "Alonso (barrendero; Roberto Álamo) y Marisa (tarotista; Malena Alterio), Torres y Fátima (propietarios de una charcutería; Jordi Sánchez y María Botto) y Calatrava (cirujano estético; Julián López) y Vicky (influencer; Kira Miró) han reservado una casa aislada en Canarias para pasar las mejores vacaciones de su vida con sus respectivas familias. Lo que no saben es que, por un error de la agencia, han alquilado la misma casa. Ninguno está dispuesto a renunciar a ella y tampoco hay muchas alternativas, por lo que se ven obligados a compartir habitáculo durante todas sus vacaciones. Las patentes diferencias entre cada uno de sus miembros convierten esos días en un caótico cúmulo de divertidas y desmadradas situaciones. A pesar de ello, tienen que aprender a convivir y comprender a toda esa gente tan distinta... Y a ellos mismos.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/eNkDXNfmzzs"
    },{
        id: "romper-el-circulo",
        imagen: "romper-el-circulo.jpg",
        nombre: "Romper el círculo",
        descripcion: "Lily Bloom (Blake Lively) es una mujer que se sobrepone a una infancia traumática para embarcarse en una nueva vida en Boston y perseguir su sueño de abrir su propio negocio. Un encuentro casual con el encantador neurocirujano Ryle Kincaid (Justin Baldoni) desata una intensa conexión entre ellos, pero al tiempo que ambos se enamoran profundamente, Lily comienza a ver en Ryle aspectos que le recuerdan la relación que tenían sus padres. Cuando el primer amor de Lily, Atlas Corrigan (Brandon Sklenar), repentinamente reaparece en su vida, su relación con Ryle da un vuelco, y Lily se da cuenta de que debe aprender a confiar en su propia fuerza para tomar una difícil elección para su futuro.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/aT_IzP2eJaU"
    },
    {
        id: "alien-romulus",
        imagen: "alien-romulus.jpg",
        nombre: "Alien: Romulus",
        descripcion: "Mientras rebuscan en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_16,
        videoUrl: "https://www.youtube.com/embed/HCjuv9STNps"
    },
    {
        id: "gladiator-2",
        imagen: "gladiator-2.jpg",
        nombre: "Gladiator II",
        descripcion: "Años después de presenciar la muerte del admirado héroe Máximo a manos de su tío, Lucio (Paul Mescal) se ve forzado a entrar en el Coliseo tras ser testigo de la conquista de su hogar por parte de los tiránicos emperadores que dirigen Roma con puño de hierro. Con un corazón desbordante de furia y el futuro del imperio en juego, Lucio debe rememorar su pasado en busca de la fuerza y el honor que devuelvan al pueblo la gloria perdida de Roma.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/HCjuv9STNps"
    },
    {
        id: "wicked",
        imagen: "wicked.jpg",
        nombre: "Wicked",
        descripcion: "La historia de cómo una mujer de piel verde esmeralda se convierte en la Malvada Bruja del Oeste; largometraje basado en el musical de Broadway.",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_7,
        videoUrl: "https://www.youtube.com/embed/UNHQgy3jawI"
    },
    {
        id: "la-infiltrada",
        imagen: "la-infiltrada.jpg",
        nombre: "La infiltrada",
        descripcion: "Basada en la historia real de Aranzazu Berradre Marín, pseudónimo con el que se infiltró una agente de la Policía nacional en la banda terrorista ETA, durante 8 años. Cuando contaba apenas 20 años, la joven consiguió adentrarse en la izquierda abertzale, siendo la única mujer que convivió en un piso con dirigentes de ETA. Durante su infiltración se vio obligada a cortar totalmente lazos familiares, todo para poder desarticular el comando Donosti en un momento crucial en el que la banda declaraba falsamente estar en tregua. Es la historia de una mujer valiente, que cambió su vida para intentar salvar la de otros.\n",
        edadRedomendada: EEdadRecomendada.NO_RECOMENDADA_MENORES_12,
        videoUrl: "https://www.youtube.com/embed/_eAYhtaEQGM"
    },
    {
        id: "vaiana-2",
        imagen: "vaiana-2.jpeg",
        nombre: "Vaiana 2",
        descripcion: "Tras recibir una inesperada llamada de sus antepasados, Vaiana debe viajar a los lejanos mares de Oceanía y adentrarse en peligrosas aguas perdidas para vivir una aventura sin precedentes. Secuela de \"Vaiana\".\n",
        edadRedomendada: EEdadRecomendada.TODOS_LOS_PUBLICOS,
        videoUrl: "https://www.youtube.com/embed/O5lPAcMEKvE"
    }
];