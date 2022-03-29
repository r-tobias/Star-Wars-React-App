import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = 'https://swapi.dev/api'
const ENDPOINT = '/starships/'

export const getAllStarships = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${ENDPOINT}`)
        const allStarships = response.data.results;
        return allStarships;
    } catch (error) {
        
    }
}
