import SearchBar from "../components/SearchBar ";
import Trending from "../components/Trending";

export default function Home() {
    return (
        <>
            <SearchBar placeholder="Search for movies or TV series" />
            <Trending />
        </>
    );
}
