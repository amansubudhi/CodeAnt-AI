import { useState, useRef } from "react";


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    // const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative inline-block text-left">
            {/* Button to toggle dropdown */}
            <div onClick={toggleDropdown} className="inline-flex items-center w-full rounded-md border border-gray-300 gap-2  px-4 py-2 text-sm font-medium">
                <div className="text-base">UtkarshDhariyaPa...</div>
                <img src="chevron-down.svg" height={18} width={18} className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute mt-2 z-50 w-full origin-top-right rounded-md bg-white shadow-lg">
                    <div className="py-1">
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                        >
                            Account settings
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown;


