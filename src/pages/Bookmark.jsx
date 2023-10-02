import SearchBar from "../components/SearchBar ";

export default function Bookmark() {
    return (
        <>
            <SearchBar placeholder="Search for bookmarked shows" />
            <section className=" sectionContainers">
                <h2 className="sectionTitle">Bookmarked Movies</h2>

                {/* <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {topRatedContent.map((item) => (
                        <div className=" relative" key={item.id}>
                            <img
                                className="rounded-xl mb-2"
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
                            <div>
                                <p className=" text-white opacity-75">
                                    {item.release_date
                                        ? item.release_date.slice(0, 4) // Extract the year
                                        : item.first_air_date.slice(0, 4)}
                                </p>
                            </div>
                            <p className="text-white text-sm font-medium mb-4">
                                {item.title || item.name}
                            </p>
                        </div>
                    ))}
                </div> */}

                <h2 className="sectionTitle">Bookmarked TV Series</h2>

                {/* <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {topRatedContent.map((item) => (
                        <div className=" relative" key={item.id}>
                            <img
                                className="rounded-xl mb-2"
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
                            <div>
                                <p className=" text-white opacity-75">
                                    {item.release_date
                                        ? item.release_date.slice(0, 4) // Extract the year
                                        : item.first_air_date.slice(0, 4)}
                                </p>
                            </div>
                            <p className="text-white text-sm font-medium mb-4">
                                {item.title || item.name}
                            </p>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    );
}
