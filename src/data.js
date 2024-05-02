const todosLosProductos = [
    // Cafés Calientes
    {
        id: 1,
        nombre: "Espresso",
        descripcion: "Un shot de espresso puro y fuerte.",
        precio: 2.0,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/espresso.webp"
    },
    {
        id: 2,
        nombre: "Americano",
        descripcion: "Café espresso con agua caliente.",
        precio: 2.5,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/americano.webp"
    },
    {
        id: 3,
        nombre: "Café Latte",
        descripcion: "Café espresso con leche vaporizada.",
        precio: 3.0,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/latte.webp"
    },
    {
        id: 4,
        nombre: "Cappuccino",
        descripcion: "Café espresso con leche y espuma de leche.",
        precio: 3.5,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/cappuccino.webp"
    },
    {
        id: 5,
        nombre: "Mocha",
        descripcion: "Café espresso con chocolate y leche vaporizada.",
        precio: 4.0,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/mocha.webp"
    },
    {
        id: 6,
        nombre: "Café Vienés",
        descripcion: "Café espresso con crema batida y chocolate rallado.",
        precio: 4.5,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/vienes.webp"
    },
    {
        id: 7,
        nombre: "Macchiato",
        descripcion: "Café espresso con una pequeña cantidad de leche espumada.",
        precio: 3.0,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/macchiato.webp"
    },
    {
        id: 8,
        nombre: "Flat White",
        descripcion: "Café espresso con leche al vapor, similar al latte pero más concentrado.",
        precio: 3.5,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/flat-white.webp"
    },
    {
        id: 9,
        nombre: "Affogato",
        descripcion: "Una bola de helado servida con un shot de espresso caliente.",
        precio: 4.0,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/affogato.webp"
    },
    {
        id: 10,
        nombre: "Café Vienés Especial",
        descripcion: "Café espresso con crema batida, chocolate y licor.",
        precio: 5.0,
        categoria: "Cafe Caliente",
        imageUrl: "/src/assets/productos/cafe-caliente/vienes-especial.webp"
    },

    // Cafés Fríos
    {
        id: 11,
        nombre: "Café Frappé",
        descripcion: "Café mezclado con hielo y crema, servido frío.",
        precio: 4.0,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/frappe.webp"
    },
    {
        id: 12,
        nombre: "Iced Latte",
        descripcion: "Café espresso con leche fría sobre hielo.",
        precio: 3.5,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/iced-latte.webp"
    },
    {
        id: 13,
        nombre: "Iced Americano",
        descripcion: "Café espresso con agua fría sobre hielo.",
        precio: 3.0,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/iced-americano.webp"
    },
    {
        id: 14,
        nombre: "Café Helado",
        descripcion: "Café filtrado y enfriado, servido con hielo.",
        precio: 3.0,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/cafe-helado.webp"
    },
    {
        id: 15,
        nombre: "Frappe Mocha",
        descripcion: "Café frío con chocolate y crema batida.",
        precio: 4.5,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/frappe-mocha.webp"
    },
    {
        id: 16,
        nombre: "Iced Cappuccino",
        descripcion: "Café espresso con leche fría y espuma sobre hielo.",
        precio: 4.0,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/iced-capucchino.webp"
    },
    {
        id: 17,
        nombre: "Café con Leche Frío",
        descripcion: "Café con leche fría, ideal para días calurosos.",
        precio: 3.5,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/cafe-con-leche-frio.webp"
    },
    {
        id: 18,
        nombre: "Cold Brew",
        descripcion: "Café infusionado en frío durante horas, servido con hielo.",
        precio: 3.5,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/cold-brew.webp"
    },
    {
        id: 19,
        nombre: "Iced Mocha",
        descripcion: "Café espresso con chocolate y leche fría sobre hielo.",
        precio: 4.0,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/iced-mocha.webp"
    },
    {
        id: 20,
        nombre: "Iced Vanilla Latte",
        descripcion: "Café espresso con leche fría y jarabe de vainilla sobre hielo.",
        precio: 4.0,
        categoria: "Cafe Frio",
        imageUrl: "/src/assets/productos/cafe-frio/iced-vanilla-latte.webp"
    },

    // Tés
    {
        id: 21,
        nombre: "Té Verde Caliente",
        descripcion: "Té verde caliente, antioxidante y refrescante.",
        precio: 2.0,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-verde.webp"
    },
    {
        id: 22,
        nombre: "Té Negro Caliente",
        descripcion: "Té negro caliente, robusto y reconfortante.",
        precio: 2.0,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-negro (1).webp"
    },
    {
        id: 23,
        nombre: "Té de Manzanilla Caliente",
        descripcion: "Té de manzanilla caliente, relajante y suave.",
        precio: 2.5,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-manzanilla.webp"
    },
    {
        id: 24,
        nombre: "Té de Jengibre Caliente",
        descripcion: "Té de jengibre caliente, estimulante y picante.",
        precio: 2.5,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-jengibre.webp"
    },
    {
        id: 25,
        nombre: "Té Helado de Durazno",
        descripcion: "Té negro helado con sabor a durazno, refrescante y dulce.",
        precio: 3.0,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-helado-durazno.webp"
    },
    {
        id: 26,
        nombre: "Té Helado de Limón",
        descripcion: "Té verde helado con jugo de limón, refrescante y cítrico.",
        precio: 3.0,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-helado-limon.webp"
    },
    {
        id: 27,
        nombre: "Té de Hibisco Frío",
        descripcion: "Té de hibisco fro, floral y refrescante.",
        precio: 2.5,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-hibisco.webp"
    },
    {
        id: 28,
        nombre: "Té Verde Frío con Menta",
        descripcion: "Té verde frío con hojas de menta fresca, revitalizante y refrescante.",
        precio: 3.0,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-verde-helado-menta.webp"
    },
    {
        id: 29,
        nombre: "Té de Frutas del Bosque Frío",
        descripcion: "Té negro frío con mezcla de frutas del bosque, dulce y afrutado.",
        precio: 3.0,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-frutos-bosque.webp"
    },
    {
        id: 30,
        nombre: "Té Helado de Mango",
        descripcion: "Té verde helado con sabor a mango, exótico y refrescante.",
        precio: 3.5,
        categoria: "Té",
        imageUrl: "/src/assets/productos/te/te-helado-mango.webp"
    },
    // Productos de Panificación
    {
        id: 31,
        nombre: "Croissant",
        descripcion: "Clásico croissant francés, hojaldrado y delicioso.",
        precio: 1.8,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/croissant.webp"
    },
    {
        id: 32,
        nombre: "Bagel de Queso y Jalapeño",
        descripcion: "Bagel con queso crema y jalapeños, picante y sabroso.",
        precio: 2.5,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/bagel-queso-jalapenio.webp"
    },
    {
        id: 33,
        nombre: "Donut de Chocolate",
        descripcion: "Donut glaseado de chocolate, perfecto para los amantes del dulce.",
        precio: 2.0,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/donut-chocolate.webp"
    },
    {
        id: 34,
        nombre: "Pretzel Salado",
        descripcion: "Pretzel horneado y salado, ideal para acompañar con mostaza.",
        precio: 1.5,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/pretzel-salado.webp"
    },
    {
        id: 35,
        nombre: "Muffin de Arándanos",
        descripcion: "Muffin esponjoso con arándanos frescos, perfecto para el desayuno.",
        precio: 2.2,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/muffin-arandanos.webp"
    },
    {
        id: 36,
        nombre: "Croissant de Almendra",
        descripcion: "Croissant relleno de crema de almendra y espolvoreado con almendras.",
        precio: 2.5,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/croissant-almendra.webp"
    },
    {
        id: 37,
        nombre: "Empanada de Pollo",
        descripcion: "Empanada rellena de pollo, cebolla y especias.",
        precio: 3.0,
        categoria: "Panificación",

    },
    {
        id: 38,
        nombre: "Pastelito de Queso",
        descripcion: "Pastelito relleno de crema de queso, dulce y delicioso.",
        precio: 2.2,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/pastel-queso.webp"
    },
    {
        id: 39,
        nombre: "Baguette de Olivas Negras",
        descripcion: "Baguette artesanal con aceitunas negras, sabroso y crujiente.",
        precio: 2.8,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/baguette.webp"
    },
    {
        id: 40,
        nombre: "Rollito de Canela",
        descripcion: "Rollito de masa dulce con canela y glaseado de azúcar.",
        precio: 2.0,
        categoria: "Panificación",
        imageUrl: "/src/assets/productos/panificacion/rollo-canela.webp"
    }
];

export { todosLosProductos };