import { Button } from '@heroui/react';
import React, { useContext } from 'react'
import { authContaxt } from '../../context/AuthContaxtProvider';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Heart } from 'lucide-react';

export default function LikeButton({postId, commentId = null, likes, likesCount}) {


    const { userId, token } = useContext(authContaxt);

    const queryClient = useQueryClient();

    const likeApi = () => {
        return axios.put(`https://route-posts.routemisr.com/posts/${postId}/${commentId ? `comments/${commentId}/` : ""}like`, null, {
            headers: {
                token
            }
        });
    };
    const { mutate: likeMutate, isPending: likeIspending } = useMutation({
        mutationFn: likeApi,

        onSuccess: () => {
            // addToast({
            //   title: "Like Added",
            //   color: "success",
            // });
            queryClient.invalidateQueries({ queryKey: ["getPosts"] });
            queryClient.invalidateQueries({ queryKey: ["getPostDetials", postId] });
            queryClient.invalidateQueries({ queryKey: ["feedPosts"] });
            commentId ? queryClient.invalidateQueries({ queryKey: ["getAllCommets", postId] }) : null;

        },

        onError: (err) => {
            addToast({
                title: err.response.data.message,
                color: "danger",
            });
        },
    });
    return (
        <>

        <Button color="none" isLoading={likeIspending} onPress={likeMutate} className={`items-center ${likes?.includes(userId) ? "text-red-500" : "text-[#617589]"} hover:text-red-500   transition-all`}>
            {!likeIspending && <>
              <span className="text-[22px]">
                <Heart size={commentId ? 16 : 24} />
              </span>
              <span className="text-xs font-bold">{likesCount || 0}</span>
            </>
            }
          </Button>
        </>
    )
}
