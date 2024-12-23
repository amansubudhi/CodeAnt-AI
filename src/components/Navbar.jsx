import { useState } from "react";
import Dropdown from "./Dropdown";
import SidebarItem from "./SidebarItem";
import { navBarItems } from "../lib/sidebar.config";

function Navbar() {
    const [isopen, setIsOpen] = useState(false);
    const [itemClicked, setItemClicked] = useState("Repositories");

    const handleClick = () => {
        setIsOpen(!isopen);
    }
    return (
        <div className="nav-box absolute flex flex-col w-full">
            <div className="header w-full flex justify-between bg-white items-center p-4 z-50" onClick={handleClick}>
                <div className="flex gap-2">
                    <img src="CodeAnt Ai_Logo.svg" width={28.5} height={32}></img>
                    <div className="text-2xl">CodeAnt AI </div>
                </div>
                <div>
                    <img src={isopen ? "cross.svg" : "bars.svg"} />
                </div>
            </div>
            {isopen && (
                <>
                    <div className="bg-overlay bg-gray-overlay inset-0 w-screen min-h-[188dvh] absolute z-30" onClick={handleClick}></div>
                    <div className="flex flex-col z-50 p-4 gap-3 w-full bg-white">
                        <Dropdown />
                        <div className="flex flex-col gap-3">
                            {
                                navBarItems.map((item, index) => (
                                    <SidebarItem
                                        key={index}
                                        href={item.href}
                                        iconName={item.iconName}
                                        displayName={item.displayName}
                                        clickedItemName={itemClicked}
                                        setItemClicked={setItemClicked}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Navbar;