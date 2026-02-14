import avatar from "../../assets/avatars/avatar-1.png"
import { getTimeAgo } from "../../utils/getTimeAgo";

export default function Comment({ comment }) {

    const { commentCreator, content, createdAt } = comment;

    return (
        <>
            <div className="flex gap-3 rounded-lg bg-background-light p-3">
                <img src={commentCreator?.photo || avatar} onError={(e) => {
                    e.target.src = avatar
                }} alt="avatar" className="h-8 w-8 shrink-0 rounded-full bg-cover bg-center" />
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#111418]">{commentCreator?.name}</span>
                        <span className="text-[10px] text-[#617589]">{getTimeAgo(createdAt || 0)}</span>
                    </div>
                    <p className="text-xs leading-normal text-[#111418]">{content}</p>
                </div>
            </div>

        </>
    )
}
