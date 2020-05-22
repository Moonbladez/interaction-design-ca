export const fetchAccessories = async () => {
    return fetch("./db/accessories.json").then((response) => response.json());
};