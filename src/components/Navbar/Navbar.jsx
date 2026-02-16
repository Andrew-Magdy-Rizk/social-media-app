import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { MessageCircleHeart, Search } from "lucide-react";
import { useContext } from "react";
import { authContaxt } from "../../context/AuthContaxtProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import avatar from "../../assets/avatars/avatar-1.png"
import { Link } from "react-router-dom";


const STATIC_IMAGE = avatar;

export default function MyNavbar() {

  const { token, handelLogOut } = useContext(authContaxt);

  const getUser = () => {
    return axios.get("https://route-posts.routemisr.com/users/profile-data", {
      headers: {
        token
      }
    })
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  })

  const user = data?.data?.data?.user;

  



  return (
    <Navbar position="sticky" isBordered>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4">
          <MessageCircleHeart size={32} className="text-primary me-2" />
          <p className="hidden sm:block font-bold text-primary">SocialApp</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <Input
          className="hidden md:flex"
          classNames={{
            base: "sm:max-w-full max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full w-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<Search size={18} />}
          type="search"
          radius="full"
        />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={STATIC_IMAGE}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem textValue="Signed in as" key="sign in" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem textValue="Home" key="home">
              <Link to="/" className="block">
                Home
              </Link>
            </DropdownItem>
            <DropdownItem textValue="Profile" key="profile">
              <Link to="/profile" className="block">
                Profile
              </Link>
            </DropdownItem>
            <DropdownItem textValue="Help & Feedback" key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem textValue="logout" key="logout" color="danger">
              <button className="w-full h-full text-start cursor-pointer" onClick={handelLogOut}>
                Log Out
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
