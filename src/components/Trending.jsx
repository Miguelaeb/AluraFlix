import PropTypes from "prop-types"; // Import PropTypes
import useTMDbApi from "../../api/api";
import BookmarkButton from "./BookmarkButton";
import BookmarkedButton from "./BookmarkedButton";

export default function Trending({ toggleBookmark, isActive }) {
    const { trendingContent, loading } = useTMDbApi();

    if (loading) {
        return (
            <div className="text-white mx-4 md:mx-[1.58rem]">Loading...</div>
        );
    }

    return (
        <section className="ml-4 md:ml-[1.58rem] mb-[2.44rem]">
            <h2 className="sectionTitle">Trending</h2>

            <div className="overflow-x-auto overflow-y-hidden mt-4 hide-scrollbar">
                <div className="grid grid-flow-col gap-10 animate-infinite-scroll">
                    {trendingContent.map((item) => (
                        <div
                            className=" relative w-[15rem] h-full"
                            key={item.id}>
                            <img
                                className=" w-full rounded-xl"
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.title || item.name}
                            />

                            <button onClick={() => toggleBookmark(item.id)}>
                                {isActive[item.id] ? (
                                    <BookmarkedButton />
                                ) : (
                                    <BookmarkButton />
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Add prop validations using PropTypes
Trending.propTypes = {
    toggleBookmark: PropTypes.func.isRequired, // Expecting a function prop
    isActive: PropTypes.object.isRequired, // Expecting an object prop
};
