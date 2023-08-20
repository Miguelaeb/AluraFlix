import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "d80d4b4ff27f87bbb060239a722176f7";
const BASE_URL = "https://api.themoviedb.org/3";

export default function useTMDbApi() {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const moviesResponse = await axios.get(
                    `${BASE_URL}/movie/popular`,
                    {
                        params: {
                            api_key: API_KEY,
                        },
                    }
                );

                const tvResponse = await axios.get(`${BASE_URL}/tv/popular`, {
                    params: {
                        api_key: API_KEY,
                    },
                });

                const allContent = [
                    ...moviesResponse.data.results,
                    ...tvResponse.data.results,
                ];
                setContent(allContent);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };

        fetchContent();
    }, []);

    return { content, loading };
}
