import { useMutation, useQueryClient } from "@tanstack/react-query"
import avatar from "../../assets/avatars/avatar-1.png"
import axios from "axios"
import { useRef, useState } from "react"
import { addToast, Image, Textarea } from "@heroui/react";
import { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { CircleX, ImageIcon, LoaderCircle } from "lucide-react";
import { userInfoContaxt } from "../../context/UserInfoContaxtProvider";
export default function CreateComment({ postId, queryKey }) {

    const [contentInput, setContentInput] = useState("");
    const [preview, setPreview] = useState(null);

    // const contentInput = useRef();
    const ImageInput = useRef();
    const { token } = useContext(authContaxt);
    const { userInfo } = useContext(userInfoContaxt);
    const queryClient = useQueryClient();

    const handelChangePreview = (e) => {
        const file = e?.target?.files[0];

        if (!file) {
            ImageInput.current.value = "";
            return setPreview(null);
        };

        setPreview(file);

    }

    const postComment = () => {
        const formdata = new FormData();
        formdata.append("content", contentInput);
        if (preview) {
            formdata.append("image", preview);
        }
        return axios.post(`https://route-posts.routemisr.com/posts/${postId}/comments`, formdata, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    const { mutate, isPending } = useMutation({
        mutationFn: postComment,

        onSuccess: () => {

            addToast({
                title: "created comment",
                color: "success"
            })
            // contentInput.current.value = "";
            setContentInput("");
            setPreview(null);
            ImageInput.current.value = "";
            queryClient.invalidateQueries({ queryKey: queryKey })
            queryClient.invalidateQueries({ queryKey: ["feedPosts"] })
        },

        onError: (err) => {
            addToast({
                title: err.response.data.message,
                color: "danger",
            })
        }
    });

    return (
        <>
            <div className="p-4 md:p-6 border-b border-gray-50 dark:border-gray-800">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0">
                        <Image
                            // loading="lazy"
                            alt="Avatar"
                            // fallbackSrc={avatar}
                            height={40}
                            width={40}
                            src={userInfo.photo || avatar}
                        />
                        {/* <img alt="My avatar" className="w-full h-full rounded-full object-cover" src={avatar} /> */}
                    </div>
                    <div className="flex-1 space-y-3">
                        {/* <textarea ref={contentInput} className="w-full border-2 border-gray-200 hover:border-primary-200 duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl focus:ring-2 focus:ring-primary/20 resize-none text-sm p-3 outline-none" placeholder="Write a thoughtful comment..." rows={3} defaultValue={""} /> */}
                        <Textarea
                            id="textarea"
                            value={contentInput}
                            onChange={(e) => setContentInput(e.target.value)}
                            className="w-full"
                            placeholder="Write a thoughtful comment..."
                            variant="faded"
                            color="primary"
                            // ref={contentInput}
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
                                <button onClick={() => handelChangePreview(null)} className="absolute cursor-pointer right-2 top-2">
                                    <CircleX size={14} />
                                </button>
                            </div>
                        </>
                        }
                        <div className="flex justify-end">
                            <button onClick={mutate} disabled={isPending} className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all">
                                {isPending ? <LoaderCircle className="animate-spinner-ease-spin" /> : "Post Comment"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
