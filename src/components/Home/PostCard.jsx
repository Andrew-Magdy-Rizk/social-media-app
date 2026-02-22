import { Bookmark, Edit, Ellipsis, Heart, LoaderCircle, MessageSquare, Share2, Trash } from "lucide-react"
import ImagePost from "../../assets/images/postImage.png"
import { getTimeAgo } from "../../utils/getTimeAgo";
import avatar from "../../assets/avatars/avatar-1.png"
import Comment from "./Comment";
import { Link } from "react-router-dom";
import AllComponents from "./AllComponents";
import CreateComment from "./CreateComment";
import { addToast, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@heroui/react";
import { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export default function PostCard({ post, showAllComments = false }) {

    const { photo, name, _id: userIdCreated } = post.user;

    const { userId, token } = useContext(authContaxt);

    const { topComment, commentsCount, LikesCount, sharesCount, _id: postId } = post;


    const queryClient = useQueryClient();

    const deleteComment = () => {
        return axios.delete(`https://route-posts.routemisr.com/posts/${postId}`, {
            headers: {
                token
            }
        })
    }
    const { mutate, isPending } = useMutation({
        mutationFn: deleteComment,

        onSuccess: () => {

            addToast({
                title: "Post Deleted",
                color: "success"
            });
            queryClient.invalidateQueries({ queryKey: ["getPosts"] });
            queryClient.invalidateQueries({ queryKey: ["getPostDetials", postId] });
            queryClient.invalidateQueries({ queryKey: ["feedPosts"] });
        },

        onError: (err) => {

            addToast({
                title: err.response.data.message,
                color: "danger",
            })
        }
    })


    return (
        <>
            <article className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            loading="eager"
                            alt={post.body}
                            fallbackSrc={avatar}
                            height={40}
                            src={photo}
                            width={40}
                            onError={(e) => {
                                e.target.src = avatar
                            }}
                        />
                        {/* <img loading="eager" src={photo} onError={(e) => {
                            e.target.src = avatar
                        }} alt="avatar" className="h-10 w-10 rounded-full bg-cover bg-center border border-primary/5" /> */}
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#111418]">{name}</span>
                            <span className="text-xs text-[#617589]">{getTimeAgo(post.createdAt)} • @{name}</span>
                        </div>
                    </div>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="light" size="sm" className="text-[#617589] hover:text-primary transition-all">
                                <Ellipsis />
                            </Button >
                            {/* <Button variant="bordered">Open Menu</Button> */}
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            {/* <DropdownItem key="copy">Copy link</DropdownItem> */}
                            <DropdownItem startContent={<Bookmark size={20} />} description="Add this to your saved items" key="save">
                                Save Post
                            </DropdownItem>
                            {
                                userIdCreated === userId &&
                                <>
                                    <DropdownItem startContent={<Edit size={16} />} key="edit">
                                        Edit
                                    </DropdownItem>

                                    <DropdownItem onPress={isPending ? undefined : mutate} startContent={<Trash size={16} />} key="delete" className="text-danger" color="danger">
                                        {isPending ? <LoaderCircle className="animate-spinner-ease-spin" /> : "Delete"}
                                    </DropdownItem>
                                </>
                            }
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <p className="text-sm leading-relaxed text-[#111418]">
                    {post.body}
                </p>
                {/*class Name For Resize Image 'aspect-video' */}
                {post.image &&
                    <div className="w-full max-h-screen overflow-hidden rounded-lg bg-[#f0f2f4]">

                        <Image
                            alt={post.body}
                            // fallbackSrc={ImagePost}
                            src={post.image}
                            width="100%"
                            // loading="lazy"
                        />
                    </div>
                }
                <div className="flex items-center gap-6 border-y border-primary/5 py-2">
                    <button className="flex items-center gap-1.5 text-[#617589] hover:text-red-500 transition-all">
                        <span className="material-symbols-outlined text-[22px]"><Heart /></span>
                        <span className="text-xs font-bold">{LikesCount || 0}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-primary transition-all">
                        <span className="material-symbols-outlined text-[22px]"><MessageSquare /></span>
                        <span className="text-xs font-bold">{commentsCount || 0}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-[#617589] hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[22px]"><Share2 /></span>
                        <span className="text-xs font-bold">{sharesCount || 0}</span>
                    </button>
                </div>
                {/* Featured Comment */}
                {!showAllComments && <CreateComment postId={post._id} queryKey={showAllComments ? ["getPostDetials", id] : ["getPosts"]} />}
                {
                    !showAllComments &&
                    topComment && <>
                        <Comment queryKey={["getPosts"]} postId={postId} comment={topComment} />
                    </>
                }
                {!showAllComments && commentsCount > 1 && <button className="text-left text-xs font-bold text-primary hover:underline">
                    <Link className="block" to={`/posts/${post._id}`}>
                        View all {commentsCount} comments
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
                <AllComponents postId={post._id} />
            }

        </>
    )
}
