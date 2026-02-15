import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { authContaxt } from '../../context/AuthContaxtProvider';
import PostCard from '../Home/PostCard';
import { ArrowLeft, Loader2 } from 'lucide-react';

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
    const { data, isLoading ,isError, error } = useQuery({
        queryKey: ["getPostDetials", id],
        queryFn: getPostDetials,
    })


  if (isLoading) {
    return <section className="w-screen h-screen bg-gray-100 flex justify-center items-center"><span className="animate-spinner-linear-spin inline-block"><Loader2 size={32} className="text-primary" /></span></section>
  }

  if (isError) {
    return addToast({
      title: error.response.statusText,
      description: error.response.data?.error,
      color: "danger",
    });
  }


    return (
        <section className='bg-gray-100 px-6'>
            <div className="flex items-center gap-2 py-6 group">
                <Link to="/" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-0.5 duration-300"><ArrowLeft /></span>
                    Back to feed
                </Link>
            </div>

            <PostCard showAllComments={true} post={data.data.post} />
        </section>
    )
}
