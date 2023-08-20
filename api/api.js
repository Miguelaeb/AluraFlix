import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "d80d4b4ff27f87bbb060239a722176f7"; // Reemplaza con tu propia API Key de TMDb
const BASE_URL = "https://api.themoviedb.org/3";

export default function useTMDbApi() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/popular`, {
                    params: {
                        api_key: API_KEY,
                    },
                });
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return { movies, loading };
}
