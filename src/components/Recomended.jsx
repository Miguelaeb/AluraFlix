import useTMDbApi from "../../api/api";

export default function Recomended() {
    const { movies, loading } = useTMDbApi();

    if (loading) {
        return <div className=" text-white">Loading...</div>;
    }

    return (
        <section className=" mx-4 md:mx-[1.58rem]">
            <h2 className=" sectionTitle">Recomended for you</h2>

            <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie">
                        <img
                            className="rounded-xl mb-4"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p className=" text-white text-sm font-medium">
                            {movie.title}
                        </p>
                        {/* <p>{movie.overview}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
}
