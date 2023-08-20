import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "d80d4b4ff27f87bbb060239a722176f7";
const BASE_URL = "https://api.themoviedb.org/3";

export default function useTMDbApi() {
    const [trendingContent, setTrendingContent] = useState([]);
    const [topRatedContent, setTopRatedContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const trendingMoviesResponse = await axios.get(
                    `${BASE_URL}/trending/movie/week`,
                    {
                        params: {
                            api_key: API_KEY,
                        },
                    }
                );

                const trendingTVResponse = await axios.get(
                    `${BASE_URL}/trending/tv/week`,
                    {
                        params: {
                            api_key: API_KEY,
                        },
                    }
                );

                const topRatedMoviesResponse = await axios.get(
                    `${BASE_URL}/movie/top_rated`,
                    {
                        params: {
                            api_key: API_KEY,
                        },
                    }
                );

                const topRatedTVResponse = await axios.get(
                    `${BASE_URL}/tv/top_rated`,
                    {
                        params: {
                            api_key: API_KEY,
                        },
                    }
                );

                const trendingContent = [
                    ...trendingMoviesResponse.data.results,
                    ...trendingTVResponse.data.results,
                ];

                const topRatedContent = [
                    ...topRatedMoviesResponse.data.results,
                    ...topRatedTVResponse.data.results,
                ];

                setTrendingContent(trendingContent);
                setTopRatedContent(topRatedContent);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };

        fetchContent();
    }, []);

    return { trendingContent, topRatedContent, loading };
}
