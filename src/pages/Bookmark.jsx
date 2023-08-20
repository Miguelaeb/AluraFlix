import SearchBar from "../components/SearchBar ";

export default function Bookmark() {
    return (
        <>
            <SearchBar placeholder="Search for bookmarked shows" />
            <section className=" sectionContainers">
                <h2 className="sectionTitle">Bookmarked Movies</h2>

                <div></div>

                <h2 className="sectionTitle">Bookmarked TV Series</h2>

                <div></div>
            </section>
        </>
    );
}
