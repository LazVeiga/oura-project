'use client';

import {redirect, useRouter} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faHome} from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const router = useRouter();
    const handleClick = () => {
        router.push("/home");
    }
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#6BA2B6]">
            <div className="w-16"></div>
            <div className="flex items-center gap-4">
                <button onClick={handleClick}
                        className="flex items-center justify-center p-2 w-10 h-10 bg-ou-grey-dark hover:scale-105 transition-all cursor-pointer text-white rounded-full">
                    <FontAwesomeIcon icon={faHome} className="text-md"/>
                </button>
                <h1 className="text-xl font-bold text-[#D21B5B] text-center">My Wallet</h1>
            </div>

            <div className="flex items-center gap-4 w-16 justify-end">
                <FontAwesomeIcon icon={faBell} className="text-white text-md"/>
                <div className="w-10 h-10 rounded-full bg-[#6BA2B6]"/>
            </div>
        </header>
    );

}
