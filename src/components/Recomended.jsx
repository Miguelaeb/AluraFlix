import useTMDbApi from "../../api/api";

export default function Recomended() {
    const { content, loading } = useTMDbApi();

    if (loading) {
        return (
            <div className="text-white mx-4 md:mx-[1.58rem]">Loading...</div>
        );
    }

    return (
        <section className="mx-4 md:mx-[1.58rem]">
            <h2 className="sectionTitle">Recommended for you</h2>

            <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {content.map((item) => (
                    <div key={item.id}>
                        <img
                            className="rounded-xl mb-2"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title || item.name}
                        />
                        <p className="text-white text-sm font-medium mb-4">
                            {item.title || item.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}