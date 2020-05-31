export const fetchProducts = async (route, productid) => {
  return fetch(`http://${window.location.host}/interaction-design${route}`)
    .then((response) => response.json())
    .then((products) => {
      if (productid) {
        const productArray = products.filter(
          (product) => product.productid === Number(productid)
        );
        return productArray[0];
      }
      return products;
    });
};

export const fetchCategory = async (route, category) => {
  return fetch(`http://${window.location.host}/interaction-design${route}`)
    .then((response) => response.json())
    .then((products) => {
      const productsArray = products.filter(
        (product) => product.category === category
      );
      return productsArray;
    });
};

//http://localhost:3000/interaction-design
