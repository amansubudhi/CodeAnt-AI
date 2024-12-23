
function SidebarItem({ href, iconName, displayName, clickedItemName, setItemClicked }) {
    return (
        <a href={href} className={`flex ${iconName == 'book.svg' ? 'gap-[15px]' : 'gap-3'} items-center rounded-lg px-[14px] py-[10px] text-[#414651]
            ${clickedItemName === displayName ? 'bg-[#1570EF] text-white' : 'text-[#414651]'}`} onClick={() => setItemClicked(displayName)}>
            <img src={iconName}
                width={iconName == 'book.svg' ? 21 : 24}
                height={iconName == 'book.svg' ? 21 : 24}
                style={{ 'filter': clickedItemName === displayName ? 'invert(1) brightness(2)' : '' }}
            />
            <div className="font-semibold text-base">{displayName}</div>
        </a>
    )
}

export default SidebarItem;