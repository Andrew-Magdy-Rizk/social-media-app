import React, { useContext, useEffect } from "react"
import { authContaxt } from "../../context/AuthContaxtProvider"
import axios from "axios";
import { useQuery } from "@tanstack/react-query"; import SkeletonPost from "../Skeletons/SkeletonPost";
import PostCard from "../Home/PostCard";

export default function FeedPosts({ setHasPosts }) {

    const { token } = useContext(authContaxt);


    const getFeedPosts = () => {
        return axios.get("https://route-posts.routemisr.com/posts/feed?only=following&limit=10", {
            headers: {
                token
            }
        })
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["feedPosts"],
        queryFn: getFeedPosts,


        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 10,


    });

    useEffect(() => {
        if (!isError && !isError && data?.data?.data?.posts.length > 0) {
            console.log("wdawd");
            setHasPosts(true);
        }else{
            
            setHasPosts(false);
        }
    }, [isLoading])
    return (
        <>

            <div className="grid grid-cols-1 gap-6">

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
