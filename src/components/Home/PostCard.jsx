import {
  Bookmark,
  Edit,
  Ellipsis,
  MessageSquare,
  Share2,
} from "lucide-react";
import { getTimeAgo } from "../../utils/getTimeAgo";
import avatar from "../../assets/avatars/avatar-1.png";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import AllComponents from "./AllComponents";
import CreateComment from "./CreateComment";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  useDisclosure,
} from "@heroui/react";
import { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import ModalCreatePost from "./ModalCreatePost";
import LikeButton from "../actions/LikeButton";
import DeleteButton from "../actions/DeleteButton";
export default function PostCard({ post, showAllComments = false }) {
  const { photo, name, _id: userIdCreated } = post.user;

  const { userId } = useContext(authContaxt);
  const modal = useDisclosure();

  const {
    topComment,
    commentsCount,
    likesCount,
    sharesCount,
    body,
    image,
    likes,
    _id: postId,
  } = post;



  return (
    <>
      <ModalCreatePost {...modal} postId={post._id} isUpdate={true} postDetails={{ body, image }} />
      <article className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              alt={post.body}
              // fallbackSrc={avatar}
              height={40}
              src={photo}
              width={40}
              className="object-cover"
              onError={(e) => {
                e.target.src = avatar;
              }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#111418]">{name}</span>
              <span className="text-xs text-[#617589]">
                {getTimeAgo(post.createdAt)} • @{name}
              </span>
            </div>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                size="sm"
                className="text-[#617589] hover:text-primary transition-all"
              >
                <Ellipsis />
              </Button>
              {/* <Button variant="bordered">Open Menu</Button> */}
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              {/* <DropdownItem key="copy">Copy link</DropdownItem> */}
              <DropdownItem
                textValue="save"
                startContent={<Bookmark size={20} />}
                description="Add this to your saved items"
                key="save"
              >
                Save Post
              </DropdownItem>
              {userIdCreated === userId && (
                <>
                  <DropdownItem
                    textValue="edit"
                    startContent={<Edit size={16} />}
                    key="edit"
                    onPress={modal.onOpen}
                  >

                    Edit
                  </DropdownItem>

                  <DropdownItem
                    textValue="delete"
                    // onPress={deleteIspending ? undefined : deleteMutate}
                    // startContent={<Trash size={16} />}
                    key="delete"
                    // className="text-danger"
                    // color="danger"
                  >
                    <DeleteButton postId={postId}/>
                  </DropdownItem>
                </>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>

        <p className="text-sm leading-relaxed text-[#111418]">{post.body}</p>
        {/*class Name For Resize Image 'aspect-video' */}
        {post.image && (
          <div className="w-full max-h-screen overflow-hidden rounded-lg bg-[#f0f2f4]">
            <Image
              alt={post.body}
              // fallbackSrc={ImagePost}
              src={post.image}
              width="100%"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex items-center gap-6 border-y border-primary/5 py-2">
          <LikeButton likes={likes} likesCount={likesCount} postId={postId} />
          <button className="flex items-center gap-1.5 text-primary transition-all">
            <span className="material-symbols-outlined text-[22px]">
              <MessageSquare />
            </span>
            <span className="text-xs font-bold">{commentsCount || 0}</span>
          </button>
          <button className="flex items-center gap-1.5 text-[#617589] hover:text-primary transition-all">
            <span className="material-symbols-outlined text-[22px]">
              <Share2 />
            </span>
            <span className="text-xs font-bold">{sharesCount || 0}</span>
          </button>
        </div>
        {/* Featured Comment */}
        {!showAllComments && (
          <CreateComment
            postId={post._id}
            queryKey={
              showAllComments ? ["getPostDetials", post._id] : ["getPosts"]
            }
          />
        )}
        {!showAllComments && topComment && (
          <>
            <Comment
              queryKey={["getPosts"]}
              postId={postId}
              comment={topComment}
              userCreatePost={userIdCreated}
            />
          </>
        )}
        {!showAllComments && commentsCount > 1 && (
          <button className="text-left text-xs font-bold text-primary hover:underline">
            <Link className="block" to={`/posts/${post._id}`}>
              View all {commentsCount} comments
            </Link>
          </button>
        )}
      </article >
      {/* Comments Section */}
      {showAllComments && <AllComponents userCreatePost={userIdCreated} postId={post._id} />}
    </>
  );
}
