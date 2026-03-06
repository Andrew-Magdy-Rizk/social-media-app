import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react'
import { authContaxt } from '../../context/AuthContaxtProvider';
import axios from 'axios';
import { addToast, Button } from '@heroui/react';
import { Trash } from 'lucide-react';

export default function DeleteButton({ postId, commentId = null }) {

    const { token } = useContext(authContaxt);


    const queryClient = useQueryClient();



    const deleteApi = () => {
        return axios.delete(`https://route-posts.routemisr.com/posts/${postId}/${commentId ? `comments/${commentId}` : ""}`, {
            headers: {
                token,
            },
        });
    };
    const { mutate: deleteMutate, isPending: deleteIspending } = useMutation({
        mutationFn: deleteApi,

        onSuccess: () => {
            addToast({
                title: "Deleted success",
                color: "success",
            });
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

            <Button onPress={deleteMutate} className='w-full' color="danger" startContent={<Trash size={16} />} isLoading={deleteIspending}>
                Delete
            </Button>

        </>
    )
}
