import useTMDbApi from "../../api/api";

export default function Trending() {
    const { content } = useTMDbApi();

    return (
        <section className="ml-4 md:ml-[1.58rem] mb-[2.44rem]">
            <h2 className="sectionTitle">Trending</h2>

            <div className="scroll overflow-x-auto overflow-y-hidden mt-4 hide-scrollbar">
                <div className="grid grid-flow-col gap-10">
                    {content.map((item) => (
                        <div className="w-[15rem] h-full" key={item.id}>
                            <img
                                className=" w-full rounded-xl"
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.title || item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
