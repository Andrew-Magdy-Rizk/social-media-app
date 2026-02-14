import { Bell, Home, Plus, Search, User } from "lucide-react";

export default function MobileNavbar() {
    return (
        <>
            <nav className="fixed bottom-0 left-0 flex w-full border-t border-primary/10 bg-white p-3 lg:hidden">
                <a className="flex flex-1 flex-col items-center gap-1 text-primary" href="#">
                    <span className="material-symbols-outlined"><Home /></span>
                </a>
                <a className="flex flex-1 flex-col items-center gap-1 text-[#617589]" href="#">
                    <span className="material-symbols-outlined"><Search /></span>
                </a>
                <a className="flex flex-1 flex-col items-center gap-1 text-[#617589] hover:-translate-y-0.5 duration-300" href="#">
                    <div className="flex h-10 w-10 -translate-y-6 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined "><Plus /></span>
                    </div>
                </a>
                <a className="flex flex-1 flex-col items-center gap-1 text-[#617589]" href="#">
                    <span className="material-symbols-outlined"><Bell /></span>
                </a>
                <a className="flex flex-1 flex-col items-center gap-1 text-[#617589]" href="#">
                    <span className="material-symbols-outlined"><User /></span>
                </a>
            </nav>
        </>
    )
}
