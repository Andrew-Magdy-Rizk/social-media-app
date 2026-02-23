import { ImageIcon, ImagePlay, MapPin, Smile } from "lucide-react";
import avatar from "../../assets/avatars/avatar-1.png"

import ModalCreatePost from "./ModalCreatePost";
import { userInfoContaxt } from "../../context/UserInfoContaxtProvider";
import { useContext } from "react";
import { Image } from "@heroui/react";
export default function CreatePost() {

        const { userInfo } = useContext(userInfoContaxt);

    return (
        <>
            <ModalCreatePost>
                <div className="rounded-xl border border-primary/10 bg-white p-4 shadow-sm">
                    <div className="flex gap-2">
                        <div className="h-20 w-20">
                        <Image
                            // loading="lazy"
                            alt="Avatar"
                            // fallbackSrc={avatar}
                            height={40}
                            width={40}
                            src={userInfo?.photo}
                            className="object-cover"
                        />
                        </div>
                        {/* <img src={avatar} alt="avatar" className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center border-2 border-primary/10" /> */}
                        <div className="flex flex-1 flex-col gap-2">
                            <textarea id="fakeCreate" className="w-full resize-none border-none bg-transparent p-0 text-base placeholder:text-[#bac4ce] focus:ring-0 focus:outline-0 " placeholder="What's happening?" rows={2} defaultValue={""} />
                            <div className="flex items-center justify-between border-t border-primary/5 pt-3">
                                <div className="flex gap-2">
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-[#617589] hover:bg-primary/10 hover:text-primary transition-all">
                                        <ImageIcon />
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-[#617589] hover:bg-primary/10 hover:text-primary transition-all">
                                        <ImagePlay />
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-[#617589] hover:bg-primary/10 hover:text-primary transition-all">
                                        <Smile />
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-[#617589] hover:bg-primary/10 hover:text-primary transition-all">
                                        <MapPin />
                                    </button>
                                </div>
                                <button className="cursor-pointer rounded-full bg-primary sm:px-6 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-primary/90 transition-all">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalCreatePost>

            {/* <Button onPress={onOpen}>Open Modal</Button> */}

        </>
    )
}
