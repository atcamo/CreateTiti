let product = [
    {
        id: 1,
        name: "Harina de Maiz",
        img: "images/hmaiz.jpeg",
        price: 100,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
        stock: 30,
        category: "Harina"
    },
    {
        id: 2,
        name: "Harina Almendra",
        img: "/images/halmendra.jpeg",
        price: 150,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
        stock: 20,
        category: "Harina"
    },
    {
        id: 3,
        name: "Brazo de reina",
        img: "/images/brazodereina.jpg",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
        stock: 15,
        category: "Mezcla"
    },
    {
        id: 4,
        name: "Empanada",
        img: "/images/empanada.jpeg",
        price: 220,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
        stock: 12,
        category: "Mezcla"
    }
    ];

    export const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            },)
        })
    }
    
    export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(product.find(prod => prod.id === productId))
            },)
        })
    }
    
    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(product.filter(prod => prod.categoria === categoryId))
            },)
        })
    }