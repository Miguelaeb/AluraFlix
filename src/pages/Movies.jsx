import useTMDbApi from "../../api/api";
import SearchBar from "../components/SearchBar ";

export default function Movies() {
    const { movies, loading } = useTMDbApi();

    if (loading) {
        return (
            <div className="text-white mx-4 md:mx-[1.58rem]">Loading...</div>
        );
    }

    return (
        <section className="sectionContainers">
            <SearchBar placeholder="Search for movies" />
            <h2 className="sectionTitle">Movies</h2>

            <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie">
                        <img
                            className="rounded-xl mb-4"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p className="text-white text-sm font-medium">
                            {movie.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
