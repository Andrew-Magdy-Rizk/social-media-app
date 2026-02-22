import { Bell, Home, Plus, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModalCreatePost from "./ModalCreatePost";

export default function MobileNavbar() {

    const { pathname } = useLocation();

    const [activeLink, setActiveLink] = useState(pathname);

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return (
        <>
            <nav className="sticky bottom-0 z-50 left-0 flex w-full border-t border-primary/10 bg-white p-3 lg:hidden">
                <Link to={"/"} onClick={() => setActiveLink("/")} className={`flex flex-1 flex-col items-center gap-1 ${activeLink === "/" ? "text-primary" : "text-[#617589]"}`}>
                    <span className="material-symbols-outlined"><Home /></span>
                </Link>
                <a className="flex flex-1 flex-col items-center gap-1 text-[#617589]" href="#">
                    <span className="material-symbols-outlined"><Search /></span>
                </a>
                <ModalCreatePost>
                    <div className="cursor-pointer flex flex-1 flex-col items-center gap-1 text-[#617589] hover:-translate-y-0.5 duration-300" href="#">
                        <div className="flex h-10 w-10 -translate-y-6 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                            <span className="material-symbols-outlined "><Plus /></span>
                        </div>
                    </div>
                </ModalCreatePost>
                <a className="flex flex-1 flex-col items-center gap-1 text-[#617589]" href="#">
                    <span className="material-symbols-outlined"><Bell /></span>
                </a>
                <Link to={"/profile"} onClick={() => setActiveLink("/profile")} className={`flex flex-1 flex-col items-center gap-1 ${activeLink === "/profile" ? "text-primary" : "text-[#617589]"}`}>
                    <span className="material-symbols-outlined"><User /></span>
                </Link>
            </nav>
        </>
    )
}
