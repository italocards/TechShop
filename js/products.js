
const products = [
    {
        id: 1,
        name: "Smartphone",
        category: "Smartphones",
        price: 2499.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "O mais recente smartphone da Samsung com tela AMOLED de 6.5 polegadas, câmera de 108MP e bateria de longa duração.",
        stock: 15
    },
    {
        id: 2,
        name: "Notebook",
        category: "Notebooks",
        price: 4899.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2t8ZW58MHx8MHx8fDA%3D",
        description: "Notebook de alta performance com processador Intel Core i7, 16GB de RAM, SSD de 512GB e placa de vídeo dedicada.",
        stock: 8
    },
    {
        id: 3,
        name: "Smart TV 4K 55\"",
        category: "TVs",
        price: 3199.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHZ8ZW58MHx8MHx8fDA%3D",
        description: "Smart TV com resolução 4K, HDR, sistema operacional avançado e som imersivo para sua sala de estar.",
        stock: 12
    },
    {
        id: 4,
        name: "Fones de Ouvido Wireless",
        category: "Áudio",
        price: 599.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Fones de ouvido sem fio com cancelamento de ruído, qualidade de áudio premium e bateria de longa duração.",
        stock: 20
    },
    {
        id: 5,
        name: "Tablet",
        category: "Tablets",
        price: 3299.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fHww",
        description: "Tablet com tela Retina de 11 polegadas, chip M1, 8GB de RAM e armazenamento de 256GB para produtividade máxima.",
        stock: 10
    },
    {
        id: 6,
        name: "Smartwatch",
        category: "Wearables",
        price: 1899.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Smartwatch com monitoramento de saúde avançado, GPS, resistência à água e bateria que dura o dia todo.",
        stock: 15
    },
    {
        id: 7,
        name: "Xbox Series S",
        category: "Games",
        price: 4499.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMGNvbnNvbGV8ZW58MHx8MHx8fDA%3D",
        description: "Console de última geração com gráficos em 4K, SSD ultra-rápido e controle sem fio com feedback tátil.",
        stock: 7
    },
    {
        id: 8,
        name: "Câmera Profissional",
        category: "Câmeras",
        price: 6799.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
        description: "Câmera profissional com sensor full-frame, 45MP, gravação de vídeo em 4K e sistema de foco automático avançado.",
        stock: 5
    }
];

// Função para formatar preço em moeda brasileira
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para buscar produto pelo ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Função para renderizar as estrelas de avaliação
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    let starsHTML = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<span class="star">★</span>';
        } else {
            starsHTML += '<span class="star" style="color: #d1d5db;">★</span>';
        }
    }
    
    return starsHTML;
}