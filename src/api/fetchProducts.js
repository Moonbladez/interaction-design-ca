export const fetchProducts = async (route, productid) => {
    return fetch(`http://localhost:3000${route}`)
        .then((response) => response.json())
        .then((products) => {
            if (productid) {
                const productArray = products.filter((product) => product.productid === Number(productid));
                return productArray[0];
            }
            return products;
        });
};