
import { ChevronDown, CircleX, Earth, Ellipsis, Gift, Image, LoaderCircle, LocationEdit, SmileIcon } from "lucide-react";
import avatar from "../../assets/avatars/avatar-1.png"
import { addToast, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@heroui/react";
import { useContext, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { authContaxt } from "../../context/AuthContaxtProvider";


export default function ModalCreatePost({ children }) {


    const [contentPost, setContentPost] = useState("");
    const [preview, setPreview] = useState(null);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { token } = useContext(authContaxt);
    const queryClient = useQueryClient();
    const ImageInput = useRef();

    const handelChangePreview = (e) => {
        const file = e?.target?.files[0];

        if (!file) {
            ImageInput.current.value = "";
            return setPreview(null);
        };

        setPreview(file);

    }

    const pushPost = () => {
        const formdata = new FormData();

        if (preview) {
            formdata.append("image", preview);
        }
        formdata.append("body", contentPost);


        return axios.post("https://route-posts.routemisr.com/posts", formdata, {
            headers: {
                token: token
            }
        })
    }
    const { mutate, isPending } = useMutation({
        mutationFn: pushPost,


        onSuccess: () => {

            addToast({
                title: "created post",
                color: "success"
            })
            setContentPost("");
            setPreview(null);
            ImageInput.current.value = "";
            onClose();
            queryClient.invalidateQueries({ queryKey: ["getPosts"] })
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

<div onClick={onOpen}>
        {children}
</div>

            <Modal size="xl" placement="center" scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" classNames={
                {
                    closeButton: "m-2 bg-gray-100 hover:bg-gray-200 duration-300",
                    header: "border-b-1 border-gray-200",
                    backdrop: "backdrop-blur"
                }
            }>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center ">Create Post</ModalHeader>
                            <ModalBody>
                                <div className="flex items-center gap-3">
                                    <img loading="eager" src={avatar} onError={(e) => {
                                        e.target.src = avatar
                                    }} alt="avatar" className="h-10 w-10 rounded-full bg-cover bg-center border border-primary/5" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-[#111418]">Name</span>
                                        <button className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200">
                                            <Earth size={12} />
                                            Public
                                            <ChevronDown size={12} />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <Textarea
                                        id="contentPost"
                                        onChange={(e) => setContentPost(e.target.value)}
                                        className="w-full bg-white!"
                                        placeholder="What`s on your mind?"
                                        variant="flat"
                                        size="lg"
                                        minRows={8}
                                    />
                                </div>
                                {/* <!-- Toolbar Container --> */}
                                <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-700">Add to your post</p>
                                    <div className="flex items-center gap-1">
                                        <label>
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full text-green-500 hover:bg-slate-100 transition-colors" title="Photo/Video">
                                                <Image />
                                            </div>
                                            <input accept="image/*" ref={ImageInput} onChange={handelChangePreview} type="file" hidden />
                                        </label>
                                        <button className="flex h-9 w-9 items-center justify-center rounded-full text-blue-500 hover:bg-slate-100 transition-colors" title="GIF">
                                            <Gift />
                                        </button>
                                        <button className="flex h-9 w-9 items-center justify-center rounded-full text-yellow-500 hover:bg-slate-100 transition-colors" title="Emoji">
                                            <SmileIcon />
                                        </button>
                                        <button className="flex h-9 w-9 items-center justify-center rounded-full text-red-500 hover:bg-slate-100 transition-colors" title="Location">
                                            <LocationEdit />
                                        </button>
                                        <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition-colors" title="More">
                                            <Ellipsis />
                                        </button>
                                    </div>

                                </div>

                                {preview &&
                                    <>
                                        <div className="w-full relative">
                                            <img src={URL.createObjectURL(preview)} alt={preview} className="w-full mx-auto object-cover rounded-xl" />
                                            <button onClick={() => handelChangePreview(null)} className="absolute cursor-pointer right-2 top-2 text-gray-400">
                                                <CircleX />
                                            </button>
                                        </div>
                                    </>
                                }

                            </ModalBody>
                            <ModalFooter>
                                <Button disabled={isPending} color="primary" className="w-full font-bold text-md" onPress={mutate}>
                                    {isPending ? <LoaderCircle className="animate-spinner-ease-spin" /> : "Post"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}
