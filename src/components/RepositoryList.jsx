import repositoriesList from "../lib/repository.config"
import RepositoryCard from "./RepositoryCard";

function Button({ children, icon, iconSize, className }) {
    return (
        <div className={`flex items-center gap-1 px-[14px] py-[10px] border rounded-md ${className}`}>
            {icon && <img src={icon} width={iconSize} height={iconSize} />}
            <div className="text-sm">{children}</div>
        </div>
    )
}

function RepositoryList() {
    return (
        <div className="cards-container bg-white border border-[#E9EAEB]  lg:rounded-xl flex flex-col">
            <div className="header-card px-5 lg:rounded-t-xl py-6 flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row w-full justify-between md:items-center">
                    <div className="left-side flex flex-col gap-1">
                        <div className="font-semibold text-2xl text-[#181D27]">Repositories</div>
                        <div className="text-[#414651] text-sm">33 total repositories</div>
                    </div>
                    <div className="right-side flex gap-3">
                        <Button icon="refresh.svg" iconSize={16} className="border-[#D5D7DA]">Refresh All</Button>
                        <Button icon="plus.svg" iconSize={14} className="bg-[#1570EF] text-white">Add Repository</Button>
                    </div>
                </div>
                <div className="relative min-w-96">
                    <img src="search.svg" height={18} width={18} className="absolute top-[14px] left-[14px]"></img>
                    <input className="border border-[#D5D7DA] rounded-lg pl-10 px-[14px] py-[10px] 
                            placeholder:text-base placeholder:font-normal placeholder:text-[#414651]
                            min-w-96 focus:outline-none" type="text" placeholder="Search Repositories" />
                </div>
            </div>
            <div className="flex flex-col">
                {repositoriesList.map((r, index) => (
                    <RepositoryCard
                        key={index}
                        index={index}
                        title={r.title}
                        visibility={r.visibility}
                        techStack={r.techStack}
                        size={r.size}
                        updatedAt={r.updatedAt}
                        isLast={index == repositoriesList.length - 1}
                    />
                ))}
            </div>
        </div>
    )

}

export default RepositoryList;