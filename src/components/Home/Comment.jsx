import { Edit, Ellipsis, Heart, LoaderCircle, Trash } from "lucide-react";
import avatar from "../../assets/avatars/avatar-1.png"
import { getTimeAgo } from "../../utils/getTimeAgo";
import { addToast, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@heroui/react";
import { useContext, useState } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function Comment({ comment, postId, queryKey }) {

    const { commentCreator, content, createdAt, likes, image, _id: commentId } = comment;
    const { userId, token } = useContext(authContaxt);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const queryClient = useQueryClient();

    const deleteComment = () => {
        return axios.delete(`https://route-posts.routemisr.com/posts/${postId}/comments/${commentId}`, {
            headers: {
                token
            }
        })
    }
    const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
        mutationFn: deleteComment,

        onSuccess: () => {

            addToast({
                title: "comment Deleted",
                color: "success"
            })
            queryClient.invalidateQueries({ queryKey: queryKey })
        },

        onError: (err) => {
            addToast({
                title: err.response.data.message,
                color: "danger",
            })
        }
    });


    const updateComment = () => {
        return axios.put(`https://route-posts.routemisr.com/posts/${postId}/comments/${commentId}`);
    };

    const {mutate: mutateUpdate , isPending: isPendingUpdate} = useMutation({
        mutationFn: updateComment,


        onSuccess: () => {

            addToast({
                title: "comment Updated",
                color: "success"
            })
            queryClient.invalidateQueries({ queryKey: queryKey })
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
            <div className="p-4 md:p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0 overflow-hidden">
                    <img src={commentCreator?.photo || avatar} onError={(e) => {
                        e.target.src = avatar
                    }} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm">{commentCreator?.name}</span>
                        <span className="text-xs text-gray-400">{getTimeAgo(createdAt || 0)}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {content}
                    </p>
                    {image &&
                    <Image
                            // loading="lazy"
                            alt={content}
                            // fallbackSrc={avatar}
                            height={80}
                            src={image}
                        />
                    }
                    {/* <img className="h-20 object-cover rounded-xl mb-3" src={image} alt={content} /> */}
                    <div className="flex items-center gap-4">
                        <button className="text-xs font-bold text-gray-500 hover:text-primary">Reply</button>
                        <button className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-red-500">
                            <span className="material-symbols-outlined text-xs"><Heart size={14} /></span>
                            {likes.length}
                        </button>
                    </div>
                </div>


                {commentCreator._id === userId ?
                    isPendingDelete ? <LoaderCircle className="animate-spinner-ease-spin text-primary" /> :
                        <Dropdown>
                            <DropdownTrigger>
                                <Button variant="light" size="sm" className="text-[#617589] hover:text-primary transition-all">
                                    <Ellipsis />
                                </Button >
                                {/* <Button variant="bordered">Open Menu</Button> */}
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                {/* <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem> */}
                                <DropdownItem onPress={() => setIsEditOpen(!isEditOpen)} textValue="update" key="edit">
                                    <div className="flex gap-2 items-center">
                                        <Edit size={16} /> <span>Edit</span>
                                    </div>
                                </DropdownItem>
                                <DropdownItem textValue="delete" onPress={isPendingDelete ? undefined : mutateDelete} key="delete" className="text-danger" color="danger">
                                    <button type="button" className="w-full flex gap-2 font-bold items-center">
                                        <Trash size={16} /> <span>Delete</span>
                                    </button>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    : null}
            </div>

        </>
    )
}
