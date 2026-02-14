import { useQuery } from "@tanstack/react-query";
import CreatePost from "./CreatePost";
import LeftSide from "./LeftSide";
import MobileNavbar from "./MobileNavbar";
import PostCard from "./PostCard";
import RightSide from "./RightSide";
import axios from "axios";
import React, { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";


export default function Home() {

  const { token } = useContext(authContaxt);

  const getPosts = () => {
    return axios.get("https://linked-posts.routemisr.com/posts?limit=20&sort=-createdAt", {
      headers: {
        token
      }
    })
  }
  const { data, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts
  })


  if (isLoading) {
    return false
  }

  const posts = data.data?.posts || [];

  return (
    <>

      <div>
        <div className="flex min-h-screen justify-center lg:px-8 xl:px-24 bg-gray-100">
          {/* Left Sidebar Navigation */}
          <LeftSide />
          {/* Central Feed */}
          <main className="flex w-full max-w-160 flex-col gap-6 p-4 lg:p-8">
            {/* Create Post Widget */}
            <CreatePost />
            {/* Feed Section */}
            <div className="flex flex-col gap-6">
              {/* Post 1 */}
              {posts.map((post) =>
                <React.Fragment key={post._id}>
                  <PostCard post={post} />
                </React.Fragment>
              )}
            </div>
          </main>
          {/* Right Sidebar (Discovery) */}
          <RightSide />
        </div>
        {/* Mobile Navigation Bar (Visible only on small screens) */}
        <MobileNavbar />
      </div>

    </>
  )
}
