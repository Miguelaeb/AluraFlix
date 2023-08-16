import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className=" py-[1.12rem] px-4 flex items-center justify-between bg-[#161D2F]">
            <div>
                <img src="/images/Logo.svg" alt="logo" />
            </div>

            <ul className=" flex items-center gap-6">
                <li>
                    <Link to="/">
                        <img src="/images/Homeicon.svg" alt="Home" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src="/images/Movieicon.svg" alt="Movie" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src="/images/TVicon.svg" alt="TV" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src="/images/Bookmark.svg" alt="Bookmark" />
                    </Link>
                </li>
            </ul>

            <div>
                <img src="images/Avatar.png" alt="Avatar" />
            </div>
        </nav>
    );
}
