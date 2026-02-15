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
                {!showAllComments && <div className="p-4 md:p-6 border-b border-gray-50 dark:border-gray-800">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0">
                            <img alt="My avatar" className="w-full h-full rounded-full object-cover" src={avatar} />
                        </div>
                        <div className="flex-1 space-y-3">
                            <textarea className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-primary/20 resize-none text-sm p-3 outline-none" placeholder="Write a thoughtful comment..." rows={2} defaultValue={""} />
                            <div className="flex justify-end">
                                <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all">
                                    Post Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
                {
                    !showAllComments &&
                    comments?.[0] && <>

                        <Comment comment={comments[0]} />
                    </>
                }
                {!showAllComments && comments.length > 1 && <button className="text-left text-xs font-bold text-primary hover:underline">
                    <Link className="block" to={`/posts/${post._id}`}>
                        View all {comments.length} comments
                    </Link>
                </button>}
                {/* {
                    showAllComments && comments.map((comment) =>
                        <React.Fragment key={comment._id}>
                            <Comment comment={comment} />
                        </React.Fragment>
                    )
                } */}

            </article>
            {/* Comments Section */}
            {showAllComments &&
                < div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mt-10">
                    {/* Add Comment Input */}
                    <div className="p-4 md:p-6 border-b border-gray-50 dark:border-gray-800">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0">
                                <img alt="My avatar" className="w-full h-full rounded-full object-cover" src={avatar} />
                            </div>
                            <div className="flex-1 space-y-3">
                                <textarea className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-primary/20 resize-none text-sm p-3 outline-none" placeholder="Write a thoughtful comment..." rows={2} defaultValue={""} />
                                <div className="flex justify-end">
                                    <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all">
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Comment List */}
                    <div className="divide-y divide-gray-50 dark:divide-gray-800">
                        {/* Comment 1 */}
                        {
                            showAllComments && comments.map((comment) =>
                                <React.Fragment key={comment._id}>
                                    <Comment comment={comment} />
                                </React.Fragment>
                            )
                        }

                    </div>
                    {/* View More Comments */}
                    <div className="p-4 text-center">
                        <button className="text-sm font-bold text-primary hover:underline">Show more comments</button>
                    </div>
                </div >
            }

        </>
    )
}
