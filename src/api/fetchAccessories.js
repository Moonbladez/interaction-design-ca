export const fetchAccessories = async () => {
    return fetch("http://localhost:3000/db/accessories.json").then((response) => response.json());
};