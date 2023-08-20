import useTMDbApi from "../../api/api";
// import SearchBar from "../components/SearchBar ";

export default function Movies() {
    const { movies, loading } = useTMDbApi();

    if (loading) {
        return (
            <div className="text-white mx-4 md:mx-[1.58rem]">Loading...</div>
        );
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie">
                    <h2>{movie.title}</h2>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
}
