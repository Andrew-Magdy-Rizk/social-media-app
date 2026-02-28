import React from "react";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import CreateComment from "./CreateComment";
import SkeletonComment from "../Skeletons/SkeletonComment";
import { addToast } from "@heroui/react";


export default function AllComponents({ postId }) {


    const { token } = useContext(authContaxt);

    const getAllCommentsForPost = () => {

        return axios.get(`https://route-posts.routemisr.com/posts/${postId}/comments?page=1&limit=10`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["getAllCommets", postId],
        queryFn: getAllCommentsForPost,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 1,

    });

    // if (isLoading) {
    //     return null
    // }
    if (isError) {

        addToast({
            title: error.response.data.message,
            color: "danger"
        });
        return null
    }



    return (
        <>
            < div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mt-10">
                {/* Add Comment Input */}
                <CreateComment postId={postId} />
                {/* Comment List */}
                <div className="divide-y divide-gray-50 dark:divide-gray-800">
                    {/* Comment 1 */}
                    {
                        isLoading ?
                            <>
                                <SkeletonComment />
                                <SkeletonComment />
                            </>
                            :
                            data.data.data?.comments?.map((comment) =>
                                <React.Fragment key={comment._id}>
                                    <Comment postId={postId} queryKey={["getAllCommets", postId]} comment={comment} />
                                </React.Fragment>
                            )
                    }

                </div>
                {/* View More Comments */}
                {/* <div className="p-4 text-center">
                    <button className="text-sm font-bold text-primary hover:underline">Show more comments</button>
                </div> */}
            </div >
        </>
    )
}
