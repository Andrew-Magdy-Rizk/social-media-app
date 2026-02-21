import avatar1 from "../../assets/avatars/avatar-1.png"
import avatar2 from "../../assets/avatars/avatar-2.png"
import avatar3 from "../../assets/avatars/avatar-3.png"


export default function RightSide() {
    return (
        <>
            <aside className="sticky top-12 hidden h-screen w-80 flex-col gap-6 p-4 py-8 xl:flex">
                {/* Suggested Section */}
                <div className="rounded-xl bg-white p-4 shadow-sm border border-primary/5">
                    <h2 className="mb-4 text-sm font-bold text-[#111418]">Suggested for you</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={avatar1} alt="avatar1" className="h-9 w-9 rounded-full bg-cover bg-center" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-[#111418]">Elena Gilbert</span>
                                    <span className="text-[10px] text-[#617589]">New to SocialApp</span>
                                </div>
                            </div>
                            <button className="text-xs font-bold text-primary hover:underline transition-all">Follow</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={avatar2} alt="avatar1" className="h-9 w-9 rounded-full bg-cover bg-center" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-[#111418]">Thomas Wright</span>
                                    <span className="text-[10px] text-[#617589]">Followed by Alex</span>
                                </div>
                            </div>
                            <button className="text-xs font-bold text-primary hover:underline transition-all">Follow</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={avatar3} alt="avatar1" className="h-9 w-9 rounded-full bg-cover bg-center" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-[#111418]">Sophia Reed</span>
                                    <span className="text-[10px] text-[#617589]">Popular in Design</span>
                                </div>
                            </div>
                            <button className="text-xs font-bold text-primary hover:underline transition-all">Follow</button>
                        </div>
                    </div>
                </div>
                {/* Trending Section */}
                <div className="rounded-xl bg-white p-4 shadow-sm border border-primary/5">
                    <h2 className="mb-4 text-sm font-bold text-[#111418]">Trending Topics</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-wider text-[#617589]">Technology • Trending</span>
                            <span className="text-sm font-bold text-[#111418]">#WebDev2024</span>
                            <span className="text-[10px] text-[#617589]">12.5k posts</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-wider text-[#617589]">Design • Trending</span>
                            <span className="text-sm font-bold text-[#111418]">#MinimalistUI</span>
                            <span className="text-[10px] text-[#617589]">8.2k posts</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-wider text-[#617589]">Photography • Trending</span>
                            <span className="text-sm font-bold text-[#111418]">#NatureShots</span>
                            <span className="text-[10px] text-[#617589]">24.1k posts</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-wider text-[#617589]">Lifestyle • Trending</span>
                            <span className="text-sm font-bold text-[#111418]">#HomeOffice</span>
                            <span className="text-[10px] text-[#617589]">5.4k posts</span>
                        </div>
                    </div>
                    <button className="mt-4 text-xs font-bold text-primary hover:underline">Show more</button>
                </div>
                {/* Footer links */}
                {/* <div className="px-2 text-[10px] text-[#617589]">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                        <a className="hover:underline" href="#">About</a>
                        <a className="hover:underline" href="#">Help Center</a>
                        <a className="hover:underline" href="#">Terms of Service</a>
                        <a className="hover:underline" href="#">Privacy Policy</a>
                        <a className="hover:underline" href="#">Cookie Policy</a>
                    </div>
                    <p className="mt-3">© 2024 SocialApp Purple Edition</p>
                </div> */}
            </aside>
        </>
    )
}
