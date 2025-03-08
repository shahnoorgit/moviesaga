export const IMDB_config = {
    base: "https://imdb236.p.rapidapi.com/imdb",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY ?? "", 
    headers: {
        "accept": "application/json",
        "x-rapidapi-key": process.env.EXPO_PUBLIC_MOVIE_API_KEY ?? "",
    },
};

export const fetchMovies = async (query: string) => {
    const endpoint = "/top250-movies";

    try {
        const res = await fetch(`${IMDB_config.base}${endpoint}`, {
            method: "GET",
            headers: IMDB_config.headers,
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};
