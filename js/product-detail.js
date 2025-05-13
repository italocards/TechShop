document.addEventListener('DOMContentLoaded', function() {
    // Obter o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Obter o contêiner onde os detalhes do produto serão renderizados
    const productDetailContainer = document.getElementById('product-detail');
    
    // Buscar o produto pelo ID
    const product = getProductById(productId);
    
    // Se o produto não existir, mostrar mensagem de erro
    if (!product) {
        productDetailContainer.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Produto não encontrado</h2>
                <p style="color: #6b7280; margin-bottom: 2rem;">O produto que você está procurando não existe.</p>
                <a href="index.html" style="color: #9b87f5; display: inline-flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                        <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>
                    Voltar para a página inicial
                </a>
            </div>
        `;
        return;
    }
    
    // Renderizar os detalhes do produto
    productDetailContainer.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            
            <div class="product-detail-info">
                <span class="product-category-tag">${product.category}</span>
                
                <h1 class="product-detail-name">${product.name}</h1>
                
                <div class="product-detail-rating">
                    <div class="star-rating">
                        ${renderStars(product.rating)}
                        <span class="rating-value">${product.rating.toFixed(1)}</span>
                    </div>
                </div>
                
                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                </div>
                
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-availability">
                    <div class="product-availability-label">
                        Disponibilidade:
                    </div>
                    <div class="availability-indicator">
                        <div class="availability-dot ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}"></div>
                        <span class="availability-text">
                            ${product.stock > 0 ? `${product.stock} em estoque` : 'Fora de estoque'}
                        </span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        Adicionar ao Carrinho
                    </button>
                    
                    <button class="buy-now-btn">
                        Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    `;
    
    //evento botao add ao carrinho
    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        alert(`Produto "${product.name}" adicionado ao carrinho!`);
    });
    
    //evento botao comprar
    document.querySelector('.buy-now-btn').addEventListener('click', function() {
        alert(`Processando compra para: ${product.name}`);
    });
});