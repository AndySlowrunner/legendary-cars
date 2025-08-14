import type { Car } from "../types/CarProps";

const BASE_URL = "https://6557686cbd4bcef8b61294a7.mockapi.io";

export const fetchCars = async ():Promise<Car[]> => {
    const response = await fetch(`${BASE_URL}/cars`);
    if (!response.ok) {
        throw new Error('Something went wrong!')
    }
    return response.json();
};

export const getDetails = async (id: string) => {
    const response = await fetch(`${BASE_URL}/cars/:${id}`);
    if (!response.ok) {
        throw new Error('Something went wrong!')
    }
    return response.json();
}

