import { useInfiniteQuery } from "@tanstack/react-query";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import axios from "axios";
import { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { addToast, Button } from "@heroui/react";
import SkeletonPost from "../Skeletons/SkeletonPost";
import { Helmet } from "react-helmet-async";


export default function Home() {

  const { token } = useContext(authContaxt);


  const getPosts = ({ pageParam }) => {
    return axios.get(`https://route-posts.routemisr.com/posts?page=${pageParam}&limit=20&sort=-createdAt`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };


  const { data, isLoading, isError, error, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,

    getNextPageParam: (lastPage, pages) => {
      // console.log("lastPage", lastPage);
      // console.log("page", pages);

      const posts = lastPage.data.data.posts;

      if (posts.length === 20) {
        return pages.length + 1;
      }

      return undefined;

    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 1

  });



  if (isError) {
    return addToast({
      title: error.response.statusText,
      description: error.response.data?.message,
      color: "danger",
    });
  }




  return (
    <>

      <Helmet>
        <title>Home Page</title>
      </Helmet>
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
          data?.pages?.map((page) =>

            page.data?.data?.posts.map((post) =>
              // <React.Fragment key={}>
              <PostCard key={post._id} post={post} />
              // </React.Fragment>
              // console.log(post)

            )


          )
        }

        <div className="mx-auto">
          <Button
            color="primary"
            isLoading={isFetchingNextPage}
            onPress={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
          >
            {
              hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
          </Button>
        </div>
      </div>


    </>
  )
}
