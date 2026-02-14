import { MessageCircleHeart } from "lucide-react";
import HeroImage from "../../../assets/images/hero-login.png"
import avatar1 from "../../../assets/avatars/avatar-1.png"
import avatar2 from "../../../assets/avatars/avatar-2.png"
import avatar3 from "../../../assets/avatars/avatar-3.png"

export default function HeroLogin() {
    return (
        <>
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
                <div className="absolute inset-0 z-10 bg-linear-to-tr from-primary/90 to-primary/40" />
                <div className="absolute inset-0 bg-cover bg-center" data-alt="People laughing and connecting in a social setting" style={{ backgroundImage: `url(${HeroImage})` }}>
                </div>
                <div className="relative z-20 flex flex-col justify-between p-16 w-full">
                    <div className="flex items-center gap-3 text-white">
                        {/* <div className="size-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center"> */}
                            <MessageCircleHeart size={32} className="white" />
                        {/* </div> */}
                        <span className="text-2xl font-bold tracking-tight">SocialApp</span>
                    </div>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">Connect with the world around you.</h1>
                        <p className="text-xl text-white/80 font-medium">Join millions of people sharing their stories and building communities every day.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 bg-gray-200 overflow-hidden border-purple-400" data-alt="User avatar thumbnail" style={{ backgroundImage: `url(${avatar1})`, backgroundSize: 'cover' }} />
                            <div className="w-10 h-10 rounded-full border-2 bg-gray-200 overflow-hidden border-purple-400" data-alt="User avatar thumbnail" style={{ backgroundImage: `url(${avatar2})`, backgroundSize: 'cover' }} />
                            <div className="w-10 h-10 rounded-full border-2 bg-gray-200 overflow-hidden border-purple-400" data-alt="User avatar thumbnail" style={{ backgroundImage: `url(${avatar3})`, backgroundSize: 'cover' }} />
                        </div>
                        <p className="text-white/70 text-sm flex items-center">5k+ people joined today</p>
                    </div>
                </div>
            </div>
        </>
    )
}
