import { Camera, LockKeyhole, Pencil, Share2 } from "lucide-react";
import { useContext, useState } from "react";

import postImage from "../../assets/images/postImage.png";
import ChangePassword from "./ChangePassword";
import { Tabs, Tab, Card, CardBody, Image } from "@heroui/react";
import Bookmark from "./Bookmark";
import FeedPosts from "./FeedPosts";
import { userInfoContaxt } from "../../context/UserInfoContaxtProvider";
import ModalUpdateProfileImg from "./ModalUpdateProfileImg";
import avatar from "../../assets/avatars/avatar-1.png";




export default function Profile() {

  const { userInfo } = useContext(userInfoContaxt);




  return (
    <>
      {/* Profile Header Section */}
      <div className="relative">
        <div className="h-48 md:h-64 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <Image
            // loading="lazy"
            alt="Avatar"
            // fallbackSrc={avatar}
            width="100%"
            // height="100%"
            src={userInfo?.cover || postImage}
            className="z-0"
          />
          {/* <img className="w-full h-full object-cover" data-alt="Abstract purple and blue gradient cover image" src={userInfo?.cover || avatar} /> */}
          <ModalUpdateProfileImg>
          <button className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg backdrop-blur-md transition-all">
            <Pencil size={18} />
          </button>
          </ModalUpdateProfileImg>
        </div>
        <div className="px-6 pb-6">
          <div className="relative flex justify-between items-end -mt-16 mb-4">
            <div className="relative group">
              <Image
                // loading="lazy"
                alt="Avatar"
                // fallbackSrc={avatar}
                width={140}
                radius="full"
                height={140}
                src={userInfo?.photo || avatar}
                className="z-0 object-cover border-4 border-white dark:border-background-dark shadow-xl bg-primary"
              />
              {/* <img className="size-32 md:size-40 rounded-full border-4 border-white dark:border-background-dark shadow-xl object-cover bg-white" data-alt="Alex Rivers circular profile picture" src={userInfo?.photo} /> */}
              <ModalUpdateProfileImg>
                <button className="p-2 absolute bottom-2 right-2 size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-background-dark hover:scale-105 transition-transform">
                  <Camera />
                </button>
              </ModalUpdateProfileImg>
            </div>
            <div className="flex gap-2 mb-2">
              <ModalUpdateProfileImg>
              <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Edit Profile
              </button>
              </ModalUpdateProfileImg>
              <button className="size-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Share2 />
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">{userInfo.name}</h1>
            <p className="text-slate-500 dark:text-slate-400">@{userInfo.name}</p>
          </div>
          <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
            Digital product designer &amp; tech enthusiast. Exploring the intersection of UI design, minimalist aesthetics, and social connectivity. Building the future of the web. 🚀
          </p>
          <div className="flex gap-6 mt-6">
            <div className="flex gap-1 items-center">
              <span className="font-bold text-lg">{userInfo.followersCount}</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Followers</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-bold text-lg">{userInfo.followingCount}</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Following</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-bold text-lg">89</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Posts</span>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Section  */}
      <div className="flex w-full flex-col">
        <Tabs aria-label="Disabled Options" disabledKeys={[userInfo.bookmarksCount === 0 && "bookmark", userInfo.followersCount === 0 && "followers", userInfo.followingCount === 0 && "following"]}>
          <Tab key="posts" title="Posts">

            <FeedPosts />

          </Tab>
          <Tab key="bookmark" title="Bookmark">
            <Bookmark />
          </Tab>
          <Tab key="following" title="Following">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="followers" title="Followers">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>


      {/* <div className="sticky top-0 z-2 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 mt-2 px-6">
        <nav className="flex gap-8">
          <button className="py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-semibold transition-all">Posts</button>
          <button className="py-4 border-b-2 border-primary text-primary font-bold transition-all">Bookmarks</button>
          <button className="py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-semibold transition-all">Settings</button>
          <button className="py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-semibold transition-all">Security</button>
        </nav>
      </div> */}
      <div className="p-6 space-y-10 max-w-5xl">
        {/* Bookmarks Grid Section  */}
        {/* <Bookmark /> */}
        {/* Security Section (Change Password) */}
        <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <LockKeyhole />
            </div>
            <div>
              <h2 className="text-xl font-bold">Security &amp; Password</h2>
              <p className="text-sm text-slate-500">Update your account security settings</p>
            </div>
          </div>
          <ChangePassword />
        </section>
      </div>
    </>


  )
}
