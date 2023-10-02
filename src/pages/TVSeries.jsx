import PropTypes from "prop-types"; // Import PropTypes
import useTMDbApi from "../../api/api";
import SearchBar from "../components/SearchBar ";
import BookmarkButton from "../components/BookmarkButton";
import BookmarkedButton from "../components/BookmarkedButton";

export default function TVSeries({ toggleBookmark, isActive }) {
    const { topRatedContent, loading } = useTMDbApi();

    if (loading) {
        return (
            <div className="text-white mx-4 md:mx-[1.58rem]">Loading...</div>
        );
    }

    // Filter only top-rated TV series from the topRatedContent array
    const topRatedTVSeries = topRatedContent.filter(
        (item) => item.original_name || item.name
    );

    return (
        <>
            <SearchBar placeholder="Search for TV series" />
            <section className="sectionContainers">
                <h2 className="sectionTitle">TV Series</h2>

                <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-8 gap-4">
                    {topRatedTVSeries.map((item) => (
                        <div className=" relative" key={item.id}>
                            <img
                                className="rounded-xl mb-2"
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.original_name || item.name}
                            />
                            <button onClick={() => toggleBookmark(item.id)}>
                                {isActive[item.id] ? (
                                    <BookmarkedButton />
                                ) : (
                                    <BookmarkButton />
                                )}
                            </button>
                            <div>
                                <p className="text-white opacity-75">
                                    {item.first_air_date.slice(0, 4)}
                                </p>
                            </div>
                            <p className="text-white text-sm font-medium mb-4">
                                {item.original_name || item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

// Add prop validations using PropTypes
TVSeries.propTypes = {
    toggleBookmark: PropTypes.func.isRequired, // Expecting a function prop
    isActive: PropTypes.object.isRequired, // Expecting an object prop
};
