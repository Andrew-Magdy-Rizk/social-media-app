import { CircleX, Edit, Ellipsis, Heart, ImageIcon, LoaderCircle, Trash } from "lucide-react";
import avatar from "../../assets/avatars/avatar-1.png"
import { getTimeAgo } from "../../utils/getTimeAgo";
import { addToast, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Textarea } from "@heroui/react";
import { useContext, useRef, useState } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function Comment({ comment, postId, queryKey }) {

    const { commentCreator, content, createdAt, likes, image, _id: commentId } = comment;
    const { userId, token } = useContext(authContaxt);
    const [isUpdate, setIsUpdate] = useState(false);
    const [oldContent, setOldContent] = useState(content);
    const queryClient = useQueryClient();
    const ImageInput = useRef();
    const [preview, setPreview] = useState(null);

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
            queryClient.invalidateQueries({ queryKey: queryKey });
            queryClient.invalidateQueries({ queryKey: ["feedPosts"] });
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

    const { mutate: mutateUpdate, isPending: isPendingUpdate } = useMutation({
        mutationFn: updateComment,


        onSuccess: () => {

            addToast({
                title: "comment Updated",
                color: "success"
            })
            queryClient.invalidateQueries({ queryKey: queryKey });
            queryClient.invalidateQueries({ queryKey: ["feedPosts"] });
            setIsUpdate(false);
        },

        onError: (err) => {
            addToast({
                title: err.response.data.message,
                color: "danger",
            });
            setIsUpdate(false);
        }

    });

    const handelChangePreview = (e) => {
        const file = e?.target?.files[0];

        if (!file) {
            ImageInput.current.value = "";
            return setPreview(null);
        };

        setPreview(file);

    }

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
                    {isUpdate ?
                        <div className="flex-1 space-y-3">
                            {/* <textarea ref={contentInput} className="w-full border-2 border-gray-200 hover:border-primary-200 duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl focus:ring-2 focus:ring-primary/20 resize-none text-sm p-3 outline-none" placeholder="Write a thoughtful comment..." rows={3} defaultValue={""} /> */}
                            <Textarea
                                id="textarea"
                                value={oldContent}
                                onChange={(e) => setOldContent(e.target.value)}
                                // className="w-full"
                                placeholder="Write a thoughtful comment..."
                                variant="faded"
                                color="primary"
                                endContent={
                                    <>
                                        <label>
                                            <input accept="image/*" ref={ImageInput} onChange={handelChangePreview} type="file" hidden />
                                            <ImageIcon className="text-primary" />
                                        </label>
                                    </>

                                }
                            />
                            {preview && <>

                                <div className="w-full relative">
                                    <img src={URL.createObjectURL(preview)} alt={preview} className="h-15 ml-auto object-cover rounded-xl" />
                                    <Button size="sm" onPress={() => handelChangePreview(null)} className="absolute cursor-pointer right-2 top-2">
                                        <CircleX size={14} />
                                    </Button>
                                </div>
                            </>
                            }
                            <div className="flex justify-end">
                                <Button isLoading={isPendingUpdate} onPress={mutateUpdate} className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all">
                                    Update Comment
                                </Button>
                            </div>
                        </div>

                        :

                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                            {content}
                        </p>
                    }
                    {image &&
                        <Image
                            // loading="lazy"
                            alt={content}
                            // fallbackSrc={avatar}
                            height={80}
                            src={image}
                            className="mb-3 object-cover"
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


                {commentCreator._id === userId && !isUpdate ?
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
                                <DropdownItem onPress={() => setIsUpdate(true)} textValue="update" key="edit">
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
