import { MessageCircleHeart } from "lucide-react"
import avatar1 from "../../../assets/avatars/avatar-1.png"
import avatar2 from "../../../assets/avatars/avatar-2.png"
import avatar3 from "../../../assets/avatars/avatar-3.png"

export default function Hero() {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative z-10 text-white max-w-md">
                <div className="mb-8">
                    <MessageCircleHeart size={60} color="white" />
                </div>
                <h1 className="text-5xl font-extrabold mb-6 leading-tight">Connect with the world today.</h1>
                <p className="text-xl text-white/80 font-medium">Join over 2 million people sharing their stories, passions, and moments with a global community.</p>
                <div className="mt-12 flex -space-x-4">
                    <img className="w-12 h-12 rounded-full border-4 border-primary bg-gray-200 object-cover" data-alt="User profile avatar 1" src={avatar1} />
                    <img className="w-12 h-12 rounded-full border-4 border-primary bg-gray-200 object-cover" data-alt="User profile avatar 2" src={avatar2} />
                    <img className="w-12 h-12 rounded-full border-4 border-primary bg-gray-200 object-cover" data-alt="User profile avatar 3" src={avatar3} />
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-primary bg-white text-primary text-xs font-bold">+2k</div>
                </div>
            </div>
        </div>
    )
}
