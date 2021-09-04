const productos = [
    {
        id: 1,
        nombre: "Proteína - 100% Whey Pro 5lb - Gold Nutrition",
        precio: 2990,
        link: "https://http2.mlstatic.com/D_NQ_NP_865919-MLU31476262387_072019-O.webp",

    },

    {
        id: 2,
        nombre: "Platinum Whey Protein 5 Lbs Glutamina Y Bcaa's",
        precio: 3100,
        link: "https://http2.mlstatic.com/D_NQ_NP_647489-MLU43658151619_102020-O.webp",

    },

    {
        id: 3,
        nombre: "Whey Protein Sylab 800 Gramos",
        precio: 1130,
        link: "https://http2.mlstatic.com/D_NQ_NP_690957-MLU29354200181_022019-O.webp",

    },

    {
        id: 4,
        nombre: "Whey Protein On Gold Standard 5lb",
        precio: 6500,
        link: "https://http2.mlstatic.com/D_NQ_NP_887704-MLU28259587600_092018-O.webp",

    },

    {
        id: 5,
        nombre: "Proteina Premium Whey Protein Star Nutrition 1kg",
        precio: 1800,
        link: "https://http2.mlstatic.com/D_NQ_NP_998082-MLU41217337819_032020-O.webp",

    },

    {
        id: 6,
        nombre: "Proteína - 100% Whey Pro 5lb - Gold Nutrition",
        precio: 2990,
        link: "https://http2.mlstatic.com/D_NQ_NP_865919-MLU31476262387_072019-O.webp",

    },

    {
        id: 7,
        nombre: "Quemador De Grasa L Carnitina Liquida Star Nutrition",
        precio: 1250,
        link: "https://http2.mlstatic.com/D_NQ_NP_931250-MLU41974386168_052020-O.webp",

    },

    {
        id: 8,
        nombre: "Vaso Mezclador, Shaker Para Whey Protein",
        precio: 155,
        link: "https://http2.mlstatic.com/D_NQ_NP_930793-MLU41565085153_042020-O.webp",

    },
];


const main = document.getElementsByTagName("main")[0];

const crearYAgregarProducto = (producto) => {
    const contenedorDelProducto = document.createElement("div");
    const nombreProducto = document.createElement("h2");
    const imagenProducto = document.createElement("img");
    const precioProducto = document.createElement("p");
    const botonAgregar = document.createElement("button");

    contenedorDelProducto.appendChild(nombreProducto);
    contenedorDelProducto.appendChild(imagenProducto);
    contenedorDelProducto.appendChild(precioProducto);
    contenedorDelProducto.appendChild(botonAgregar);

    contenedorDelProducto.classList.add("producto");

    nombreProducto.textContent = producto.nombre;

    imagenProducto.setAttribute("src", producto.link);
    imagenProducto.setAttribute("alt", producto.nombre);

    precioProducto.textContent = `Costo: $${producto.precio}`;

    botonAgregar.textContent = "Agregar al carrito"

    main.appendChild(contenedorDelProducto);
};

productos.forEach(crearYAgregarProducto);



