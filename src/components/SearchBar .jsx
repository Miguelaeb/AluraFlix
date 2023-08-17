import PropTypes from "prop-types";

export default function SearchBar({ placeholder }) {
    return (
        <section className="flex gap-4 my-[1.63rem] mx-4 relative">
            <img src="/images/Searchicon.svg" alt="Search" className="z-10" />
            <input
                className="w-full bg-[#10141E] focus:border-b-[1px] outline-none text-white focus:text-white focus:border-[#5A698F] focus:pb-[0.94rem] caret-[#FC4747] placeholder:opacity-[0.4979]"
                type="text"
                placeholder={placeholder}
            />
        </section>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};
