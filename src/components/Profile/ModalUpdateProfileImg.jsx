
import { Camera, ChevronDown, CircleCheck, CircleX, CloudUpload, Earth, Ellipsis, Gift, ImageIcon, LoaderCircle, LocationEdit, Pen, SmileIcon, Trash2, Undo2, Upload } from "lucide-react";
import avatar from "../../assets/avatars/avatar-1.png";
import { addToast, Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@heroui/react";
import { useContext, useRef, useState } from "react";
import { userInfoContaxt } from "../../context/UserInfoContaxtProvider";
import axios from "axios";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";



export default function ModalUpdateProfileImg({ children }) {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [preview, setPreview] = useState(null);
    const { userInfo, handelSetUserInfo } = useContext(userInfoContaxt);
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
    };

    const updateImageProfile = () => {


        const formdata = new FormData();

        if (preview) {
            formdata.append("photo", preview);
        }

        return axios.put("https://route-posts.routemisr.com/users/upload-photo", formdata, {
            headers: {
                token
            }
        })
    };

    const { mutate, isPending, isError } = useMutation({
        mutationFn: updateImageProfile,


        onSuccess: () => {

            addToast({
                title: "profile Updated",
                color: "success"
            });
            setPreview(null);

            ImageInput.current.value = "";
            onClose();
            // handelSetUserInfo({...userInfo, photo: userInfo.photo})
            queryClient.invalidateQueries({ queryKey: ["getUser"] })
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

            <div onClick={onOpen}>
                {children}
            </div>

            <Modal size="2xl" placement="center" scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" classNames={
                {
                    closeButton: "m-2 bg-gray-100 hover:bg-gray-200 duration-300",
                    header: "border-b-1 border-gray-200",
                    backdrop: "backdrop-blur"
                }
            }>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Profile Media</ModalHeader>
                            <ModalBody>
                                {/* Modal Body */}
                                <div className="p-6 overflow-y-auto max-h-[75vh]">
                                    {/* Cover Photo Section */}
                                    <div className="mb-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Cover Photo</label>
                                            <span className="text-xs text-slate-500">Recommended: 1500 x 500px</span>
                                        </div>
                                        <div className="relative group">
                                            <div className="w-full aspect-3/1 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700">
                                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Abstract purple gradient current cover photo preview" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwkoPahQnF75TZsNZdRnVmd9Jp7j8OLiPLt6-c0w6MFMFVoHrH-6sn61FQBMYLr7M6NLSEVTObUCwvWxf7wti0pRa-eXWJnWbJVTFbwvpnZKbfYhySJCx3fC8icl3vg2MhKdpzoa774erZ66wHetv6qnxo115NdzTiek4xNZq-CPS62GkIzFowoF8zy3XqtqkDaNY1lzWQ36RVDGK30grnEdHLDsWrVknLjT3VGUkFpdRXr7c0bF7mCGNiO26bUf0J-9WCWxTZvmg")' }}>
                                                </div>
                                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-white text-4xl"><Camera size={40} /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-3">
                                            <button className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2.5 rounded-lg text-sm font-bold transition-all">
                                                <span className="material-symbols-outlined text-lg"><Upload /></span>
                                                Upload New Cover
                                            </button>
                                            <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2.5 rounded-lg text-sm font-bold transition-all">
                                                <span className="material-symbols-outlined text-lg"><Trash2 /></span>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    {/* Profile Photo Section */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Profile Photo</label>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center gap-8">
                                            <label>
                                                <div className="relative group">
                                                    <div className="size-32 rounded-full border-4 border-white dark:border-slate-800 shadow-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                                        <Image
                                                            // loading="lazy"
                                                            alt="Avatar"
                                                            // fallbackSrc={avatar}
                                                            width="100%"
                                                            height="100%"
                                                            src={preview && URL.createObjectURL(preview) || userInfo?.photo || avatar}
                                                            className="z-0 absolute inset-0"
                                                        />
                                                        <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of a smiling professional man avatar" style={{ backgroundImage: `url(${preview && URL.createObjectURL(preview) || userInfo?.photo || avatar})` }}>
                                                        </div>
                                                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                                            <Pen size={25} color="white" />
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-1 right-1 p-1 size-10 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-sm">
                                                        <Camera />
                                                    </div>
                                                </div>

                                                <input accept="image/*" onChange={handelChangePreview} ref={ImageInput} type="file" hidden />
                                            </label>
                                            <div className="flex-1 space-y-3">
                                                <div className="flex flex-wrap gap-3">
                                                    <button className="w-full md:w-fit flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2.5 rounded-lg text-sm font-bold transition-all">
                                                        <CloudUpload />
                                                        Upload New Profile
                                                    </button>
                                                    <button className="w-full md:w-fit flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2.5 rounded-lg text-sm font-bold transition-all">
                                                        <Undo2 />
                                                        Restore Default
                                                    </button>
                                                </div>
                                                <p className="text-xs text-slate-500 leading-relaxed">
                                                    Please use a high-quality JPG or PNG. Your profile photo will be visible to everyone on the platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* preview */}

                            </ModalBody>
                            <ModalFooter>
                                <Button variant="ghost" size="lg" className="font-bold text-md">
                                    Cancel
                                </Button>
                                <Button isLoading={isPending} onPress={mutate} color="primary" size="lg" className="font-bold text-md">

                                    <span className="flex gap-2 items-center"><CircleCheck /> Save Changes </span>

                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}
