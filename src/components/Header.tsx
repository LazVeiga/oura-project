import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#6BA2B6]">
            <div className="w-16"/>

            <h1 className="text-xl font-bold text-[#D21B5B] text-center flex-1">My Wallet</h1>

            <div className="flex items-center gap-4 w-16 justify-end">
                <FontAwesomeIcon icon={faBell} className="text-white text-xs"/>
                <div className="w-10 h-10 rounded-full bg-[#6BA2B6]"/>
            </div>
        </header>
    );
}
