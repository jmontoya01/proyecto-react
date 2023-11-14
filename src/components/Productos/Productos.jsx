

const productos =
    [
        {
            id: 1,
            title: "Espada de Link",
            price: 350000,
            description: "Espada de Link del video juego Zelda",
            category: "espadas",
            image: "../images/espada1.jpg",
            stock: 9
        },
        {
            id: 2,
            title: "Espada luminosa",
            price: 300000,
            description: "Espada del video juego Zelda",
            category: "espadas",
            image: "../images/espada2.jpg",
            stock: 4
        },
        {
            id: 3,
            title: "Espada con funda",
            price: 200000,
            description: "Espada con aspecto metalico y funda",
            category: "espadas",
            image: "../images/espada3.jpg"
        },
        {
            id: 4,
            title: "Espada Tensa Zangetsu",
            price: 350000,
            description: "Espada del anime Bleach",
            category: "espadas",
            image: "../images/espada4.jpg",
            stock: 14
        },
        {
            id: 5,
            title: "Catana",
            price: 200000,
            description: "Catana popular con buen detallado",
            category: "espadas",
            image: "../images/espada5.jpg",
            stock: 25
        },
        {
            id: 6,
            title: "Capitan general Yamamoto",
            price: 200000,
            description: "Figura del legendario capitan de los 13 escuadrones del anime Bleach",
            category: "figuras",
            image: "../images/figura1.jpg",
            stock: 6
        },
        {
            id: 7,
            title: "Robot articulable",
            price: 250000,
            description: "Figura de robot articulable",
            category: "figuras",
            image: "../images/figura2.jpg",
            stock: 2
        },
        {
            id: 8,
            title: "Coraje el perro cobarde",
            price: 80000,
            description: "Figura de Coraje el perro cobarde",
            category: "figuras",
            image: "../images/figura3.jpg",
            stock: 8
        },
        {
            id: 9,
            title: "Caballero del dragon",
            price: 380000,
            description: "Figura de caballero montando un dragon al estilo de Juego de tronos",
            category: "figuras",
            image: "../images/figura4.jpg",
            stock: 3
        },
        {
            id: 10,
            title: "Maestro Yoda",
            price: 80000,
            description: "Figura del legendario mestro Yoda de Star Wars",
            category: "figuras",
            image: "../images/figura5.jpg",
            stock: 25
        },
        {
            id: 11,
            title: "LLavero manos",
            price: 20000,
            description: "Llavero de manos en diferentes colores y estilos",
            category: "llaveros",
            image: "../images/llavero1.jpg",
            stock: 25
        },
        {
            id: 12,
            title: "LLavero de peliculas de Supernintendo",
            price: 20000,
            description: "Llavero de los populares juegos de Supernintendo",
            category: "llaveros",
            image: "../images/llavero2.jpg",
            stock: 19
        },
        {
            id: 13,
            title: "LLavero memes",
            price: 20000,
            description: "Llavero de memes",
            category: "llaveros",
            image: "../images/llavero3.jpg",
            stock: 13
        },
        {
            id: 14,
            title: "LLavero del legendario guante de Thanos",
            price: 20000,
            description: "Llavero del legendario guante de Thanos",
            category: "llaveros",
            image: "../images/llavero4.jpg",
            stock: 12
        },
        {
            id: 15,
            title: "LLavero cabra One Piece",
            price: 20000,
            description: "Llavero de la cabra del barco de One Piece",
            category: "llaveros",
            image: "../images/llavero5.jpg",
            stock: 13
        },
        {
            id: 16,
            title: "Soporte para audifonos",
            price: 80000,
            description: "Soporte con bonito acabado para tus audifonos",
            category: "soportes",
            image: "../images/soporte1.jpg",
            stock: 8
        },
        {
            id: 17,
            title: "Soporte para audifonos retro iluminado",
            price: 150000,
            description: "Soporte retro iluminado con varios colores de luz",
            category: "soportes",
            image: "../images/soporte2.jpg",
            stock: 6
        },
        {
            id: 18,
            title: "Soporte cara Batman",
            price: 80000,
            description: "Soporte al mejor estilo de Batman",
            category: "soportes",
            image: "../images/soporte3.jpg",
            stock: 5
        },
        {
            id: 19,
            title: "Soporte para audifonos nueva era",
            price: 80000,
            description: "Soporte para audifonos con un estilo muy sutil",
            category: "soportes",
            image: "../images/soporte4.jpg",
            stock: 4
        },
        {
            id: 20,
            title: "Soporte para audifonos nuevo diseño",
            price: 80000,
            description: "Soporte para audifonos con un estilo muy sutil en diferentes colores",
            category: "soportes",
            image: "../images/soporte5.jpg",
            stock: 6
        }
    ]

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1500);
    });
}

export default fetchProducts;
