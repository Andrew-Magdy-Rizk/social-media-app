import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { authContaxt } from '../../context/AuthContaxtProvider';
import PostCard from '../Home/PostCard';

export default function PostDetials() {

    const { id } = useParams();

    const { token } = useContext(authContaxt);

    const getPostDetials = () => {
        return axios.get(`https://linked-posts.routemisr.com/posts/${id}`, {
            headers: {
                token
            }
        })
    };
    const {data, isLoading} = useQuery({
        queryKey: ["getPostDetials", id],
        queryFn: getPostDetials
    })

    if(isLoading){
        return false;
    }

    console.log("postDetials", data);
    

    return (
        <>
        <PostCard showAllComments={true} post={data.data.post}/>
        </>
    )
}
