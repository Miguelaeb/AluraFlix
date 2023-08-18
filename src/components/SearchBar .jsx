import PropTypes from "prop-types";

export default function SearchBar({ placeholder }) {
    return (
        <section className=" my-[1.63rem] mx-4 h-[30px]">
            <div className=" flex gap-4">
                <img
                    src="/images/Searchicon.svg"
                    alt="Search"
                    className="z-10"
                />
                <input
                    className="w-full bg-transparent focus:border-b-[1px] outline-none text-white focus:text-white focus:border-[#5A698F] caret-[#FC4747] placeholder:opacity-[0.4979]"
                    type="text"
                    placeholder={placeholder}
                />
            </div>
        </section>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};
