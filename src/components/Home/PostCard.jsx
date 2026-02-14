import { Ellipsis, Heart, MessageSquare, Share2 } from "lucide-react"
import ImagePost from "../../assets/images/postImage.png"
import { getTimeAgo } from "../../utils/getTimeAgo";
import avatar from "../../assets/avatars/avatar-1.png"
import Comment from "./Comment";
import { Link } from "react-router-dom";
import React from "react";
export default function PostCard({ post, showAllComments = false }) {

    const user = post.user;

    const comments = post?.comments;


    return (
        <>
            <article className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img loading="eager" src={user.photo} onError={(e) => {
                            e.target.src = avatar
                        }} alt="avatar" className="h-10 w-10 rounded-full bg-cover bg-center border border-primary/5" />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#111418]">{user.name}</span>
                            <span className="text-xs text-[#617589]">{getTimeAgo(post.createdAt)} • @{user.name}</span>
                        </div>
                    </div>
                    <button className="text-[#617589] hover:text-primary transition-all">
                        <span className="material-symbols-outlined"><Ellipsis /></span>
                    </button>
                </div>
                <p className="text-sm leading-relaxed text-[#111418]">
                    {post.body}
                </p>
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#f0f2f4]">
                    <img src={post.image || ImagePost} onError={(e) => {
                        e.target.src = ImagePost

                    }} loading="lazy" alt="ImagePost" className="h-full w-full bg-cover bg-center" />
                </div>
                <div className="flex items-center gap-6 border-y border-primary/5 py-2">
                    <button className="flex items-center gap-1.5 text-[#617589] hover:text-red-500 transition-all">
                        <span className="material-symbols-outlined text-[22px]"><Heart /></span>
                        <span className="text-xs font-bold">{post.likes?.length || 0}k</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-primary transition-all">
                        <span className="material-symbols-outlined text-[22px]"><MessageSquare /></span>
                        <span className="text-xs font-bold">{comments.length || 0}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-[#617589] hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[22px]"><Share2 /></span>
                        <span className="text-xs font-bold">15</span>
                    </button>
                </div>
                {/* Featured Comment */}
                {
                    !showAllComments &&
                    comments?.[0] && <>
                        <Comment comment={comments[0]} />
                    </>
                }
                {!showAllComments && comments?.[0] && <button className="text-left text-xs font-bold text-primary hover:underline">
                    <Link className="block" to={`/posts/${post._id}`}>
                        View all {comments.length} comments
                    </Link>
                </button>}
                {
                    showAllComments && comments.map((comment) =>
                        <React.Fragment key={comment._id}>
                            <Comment comment={comment} />
                        </React.Fragment>
                    )
                }

            </article>
        </>
    )
}
