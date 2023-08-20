import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className=" relative">
                <nav className=" py-[1.12rem] px-4 flex items-center justify-between bg-[#161D2F] xl:hidden md:mx-[1.58rem] md:my-[1.44rem] md:rounded-xl fixed top-0 left-0 right-0 z-50">
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
                            <Link to="/movies">
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
                                <img
                                    src="/images/Bookmark.svg"
                                    alt="Bookmark"
                                />
                            </Link>
                        </li>
                    </ul>

                    <div>
                        <img src="images/Avatar.png" alt="Avatar" />
                    </div>
                </nav>
            </div>

            <aside className=" hidden py-[1.12rem] px-4 xl:flex flex-col justify-between items-center w-24 h-[50rem] ml-8 mx-8 mt-6 bg-[#161D2F] rounded-xl fixed">
                <div>
                    <div className=" mb-[75px]">
                        <img src="/images/Logo.svg" alt="logo" />
                    </div>

                    <ul className=" flex flex-col items-center gap-6">
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
                                <img
                                    src="/images/Bookmark.svg"
                                    alt="Bookmark"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <img src="images/Avatar.png" alt="Avatar" />
                </div>
            </aside>
        </>
    );
}
