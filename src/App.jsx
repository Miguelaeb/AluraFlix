import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmark from "./pages/Bookmark";

export default function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvseries" element={<TVSeries />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                </Routes>
            </Router>
        </>
    );
}
