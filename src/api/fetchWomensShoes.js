export const fetchWomensShoes = async () => {
    return fetch('./db/womensShoes.json').then((response) => response.json());
};