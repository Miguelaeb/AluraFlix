import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmark from "./pages/Bookmark";
import { useState } from "react";

export default function App() {
    const [isActive, setIsActive] = useState({}); // Use an object to track state for each item

    function toggleBookmark(itemId) {
        setIsActive((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId], // Toggle the state for the specific item
        }));
    }

    return (
        <>
            <Router>
                <Navbar />

                <div className=" xl:ml-[120px]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/movies"
                            element={
                                <Movies
                                    toggleBookmark={toggleBookmark}
                                    isActive={isActive}
                                />
                            }
                        />
                        <Route
                            path="/tvseries"
                            element={
                                <TVSeries
                                    toggleBookmark={toggleBookmark}
                                    isActive={isActive}
                                />
                            }
                        />
                        <Route path="/bookmark" element={<Bookmark />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}
