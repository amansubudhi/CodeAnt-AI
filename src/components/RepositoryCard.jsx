
function RepositoryCard({ title, visibility, techStack, size, updatedAt, isLast }) {
    return (
        <div className={`repo-cards px-5 py-6 flex flex-col gap-4 ${isLast ? "rounded-b-xl" : "border-b border-[#D5D7DA]"}  hover:bg-zinc-400/20`}>
            <div className="first-part flex flex-row gap-2">
                <div className="font-medium text-xl">{title}</div>
                <div className="rounded-full py-1 px-[14px] bg-[#EFF8FF] border border-[#B2DDFF] text-[14px] text-[#175CD3]">{visibility}</div>
            </div>
            <div className="flex gap-6 lg:gap-10">
                <div className="flex flex-row items-center gap-2">
                    <div className="text-[#181D27] text-base">{techStack}</div>
                    <div className="rounded-full h-2 w-2 bg-[#1570EF]"></div>
                </div>
                <div className="flex flex-row gap-2">
                    <img src="database.svg" width={10.5} height={12} />
                    <div className="text-[#181D27]">{size}</div>
                </div>
                <div className="text-[#181D27]">Updated {updatedAt} ago</div>
            </div>
        </div>
    )
}

export default RepositoryCard;