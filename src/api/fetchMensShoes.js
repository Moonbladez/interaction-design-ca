export const fetchMensShoes = async () => {
    return fetch("./db/mensShoes.json").then((response) => response.json());
};