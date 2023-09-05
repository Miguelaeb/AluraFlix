import { useState } from "react";
import SearchBar from "../components/SearchBar ";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";

export default function Home() {
    const [isActive, setIsActive] = useState({}); // Use an object to track state for each item

    function toggleBookmark(itemId) {
        setIsActive((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId], // Toggle the state for the specific item
        }));
    }

    return (
        <>
            <SearchBar placeholder="Search for movies or TV series" />
            <Trending toggleBookmark={toggleBookmark} isActive={isActive} />
            <Recommended toggleBookmark={toggleBookmark} isActive={isActive} />
        </>
    );
}
