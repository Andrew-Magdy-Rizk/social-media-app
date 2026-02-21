import { useQuery } from "@tanstack/react-query";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import axios from "axios";
import React, { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { addToast } from "@heroui/react";
import SkeletonPost from "../Skeletons/SkeletonPost";


export default function Home() {

  const { token, userId } = useContext(authContaxt);

  const getPosts = () => {
    return axios.get("https://route-posts.routemisr.com/posts?limit=20&sort=-createdAt", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,

    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60  * 1

  })


  // if (isLoading) {
  //   return <section className="w-full h-full bg-gray-100 flex justify-center items-center"><span className="animate-spinner-linear-spin inline-block"><Loader2 size={32} className="text-primary" /></span></section>
  // }

  if (isError) {
    return addToast({
      title: error.response.statusText,
      description: error.response.data?.message,
      color: "danger",
    });
  }




  return (
    <>

      {/* Create Post Widget */}
      <CreatePost />
      {/* Feed Section */}
      <div className="flex flex-col gap-6">

        {/* Posts */}
        {isLoading ? <>
          <SkeletonPost />
          <SkeletonPost />
        </>
          :
          data?.data?.data?.posts.map((post) =>
            <React.Fragment key={post._id}>
              <PostCard post={post} />
            </React.Fragment>
          )
        }
      </div>


    </>
  )
}
