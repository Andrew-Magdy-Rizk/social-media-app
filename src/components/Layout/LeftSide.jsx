import { Bell, Compass, Home, Mail, PlusCircle, Settings, Share2, User } from 'lucide-react'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import ModalCreatePost from '../Home/ModalCreatePost';
import { Button, useDisclosure } from '@heroui/react';

export default function LeftSide() {


    const { pathname } = useLocation();

    const [activeLink, setActiveLink] = useState(pathname);
    const modal = useDisclosure();

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return (
        <>
            <aside className="sticky top-12 hidden max-h-screen w-64 flex-col gap-4 border-r border-primary/10 bg-white p-4 py-8 lg:flex">
                <div className="mb-8 flex items-center gap-3 px-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                        <span className="material-symbols-outlined"><Share2 color='white' /></span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-primary">SocialApp</h1>
                        <p className="text-xs font-medium text-primary/60">Purple Edition</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2">
                    <Link to={"/"} onClick={() => setActiveLink("/")} className={`${activeLink === "/" ? "active-nav text-primary bg-primary/10" : "text-[#617589]"} flex items-center gap-3 rounded-full hover:bg-primary/5 hover:text-primary px-4 py-3 transition-all`}>
                        <span className="material-symbols-outlined"><Home /></span>
                        <span className="text-sm font-semibold">Home</span>
                    </Link>
                    <a className="flex items-center gap-3 rounded-full px-4 py-3 text-[#617589] hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined"><Compass /></span>
                        <span className="text-sm font-semibold">Explore</span>
                    </a>
                    <a className="flex items-center gap-3 rounded-full px-4 py-3 text-[#617589] hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined"><Bell /></span>
                        <span className="text-sm font-semibold">Notifications</span>
                    </a>
                    <a className="flex items-center gap-3 rounded-full px-4 py-3 text-[#617589] hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined"><Mail /></span>
                        <span className="text-sm font-semibold">Messages</span>
                    </a>
                    <Link to={"/profile"} onClick={() => setActiveLink("/profile")} className={`${activeLink === "/profile" ? "active-nav text-primary bg-primary/10" : "text-[#617589]"} flex items-center gap-3 rounded-full hover:bg-primary/5 hover:text-primary px-4 py-3 transition-all`}>
                        <span className="material-symbols-outlined"><User /></span>
                        <span className="text-sm font-semibold">Profile</span>
                    </Link>
                    <a className="flex items-center gap-3 rounded-full px-4 py-3 text-[#617589] hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined"><Settings /></span>
                        <span className="text-sm font-semibold">Settings</span>
                    </a>
                </nav>
                <ModalCreatePost {...modal} />
                    <Button onPress={modal.onOpen} className="cursor-pointer mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                        <span className="material-symbols-outlined text-[20px]"><PlusCircle /></span>
                        <span>Create Post</span>
                    </Button>
            </aside>
        </>
    )
}
