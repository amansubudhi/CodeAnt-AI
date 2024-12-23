import Dropdown from "./Dropdown";
import { sideBarItems, sideBarSecondaryItems } from "../lib/sidebar.config";
import { useState } from "react";
import SidebarItem from "./SidebarItem";


function Sidebar() {
    const [itemClicked, setItemClicked] = useState("Repositories");
    return (
        <div className="h-full flex flex-col px-4 border-r border-[#E9EAEB]">
            <div className="flex flex-col gap-4 py-4">
                <div className="flex gap-2 px-4">
                    <img src="CodeAnt Ai_Logo.svg" width={28.5} height={32}></img>
                    <div className="text-2xl">CodeAnt AI </div>
                </div>
                <Dropdown />
            </div>
            <div className="top-button-container w-full gap-4 flex flex-col">
                {
                    sideBarItems.map((item, index) => (
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
            <div className="bottom-button-container pb-6 w-full gap-4 mt-auto flex flex-col">
                {
                    sideBarSecondaryItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            href={item.href}
                            iconName={item.iconName}
                            displayName={item.displayName}
                            clickedItemName={itemClicked}
                            setItemClicked={setItemClicked}
                        />))
                }
            </div>


        </div>

    )
}

export default Sidebar;