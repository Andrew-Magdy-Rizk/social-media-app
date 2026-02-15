import { Heart } from "lucide-react";
import avatar from "../../assets/avatars/avatar-1.png"
import { getTimeAgo } from "../../utils/getTimeAgo";

export default function Comment({ comment }) {

    const { commentCreator, content, createdAt } = comment;

    return (
        <>
            <div className="p-4 md:p-6 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0 overflow-hidden">
                    <img src={commentCreator?.photo || avatar} onError={(e) => {
                        e.target.src = avatar
                    }} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm">{commentCreator?.name}</span>
                        <span className="text-xs text-gray-400">{getTimeAgo(createdAt || 0)}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {content}
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="text-xs font-bold text-gray-500 hover:text-primary">Reply</button>
                        <button className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-red-500">
                            <span className="material-symbols-outlined text-xs"><Heart size={14} /></span>
                            24
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
