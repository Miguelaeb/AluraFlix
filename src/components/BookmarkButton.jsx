export default function BookmarkButton() {
    return (
        <div className="bookmarkButton">
            <svg
                className="absolute top-4 right-4 cursor-pointer"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                    <circle
                        opacity="0.500647"
                        cx="12"
                        cy="12"
                        r="10"
                        fill="#10141E"
                    />
                    <path d="m15 16-3-3-3 3v-8h6z" stroke="white" />
                </g>
            </svg>
        </div>
    );
}
