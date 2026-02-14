import { MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderMobile({pageName = "login"}) {
    return (
        <header className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-[#f0f2f4] dark:border-white/10">
            <div className="flex items-center gap-2">
                <MessageCircleHeart size={32} className="text-primary" />
                <span className="font-bold text-lg text-primary dark:text-white">SocialApp</span>
            </div>
            <Link to={`/${pageName === "register" ? "login" : "register"}`} className="text-sm font-bold text-primary">{pageName === "login" ? "Sign Up" : "Sign In" }</Link>
        </header>
    )
}
