export const fetchMensShoes = async () => {
    return fetch("http://localhost:3000/db/mensShoes.json").then((response) => response.json());
};