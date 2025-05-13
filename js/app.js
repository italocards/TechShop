document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('search-input');
    
    renderProducts(products);
    
    //evento de busca
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );
        
        renderProducts(filteredProducts);
    });
    
    //renderiza produtos
    function renderProducts(productsToRender) {
        if (productsToRender.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-products">
                    <p>Nenhum produto encontrado.</p>
                </div>
            `;
            return;
        }
        
        productsContainer.innerHTML = productsToRender.map(product => `
            <a href="product.html?id=${product.id}" class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <div class="product-footer">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <div class="product-rating">
                            <span class="star">★</span>
                            <span class="rating-value">${product.rating}</span>
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    }
});