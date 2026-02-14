import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import ProtectRoute from "./middlewares/ProtectRoute";
import ProtectAuthRoute from "./middlewares/ProtectAuthRoute";
import Profile from "./components/Profile/Profile";
import PostDetials from "./components/PostDetials/PostDetials";


export const browserRouter = createBrowserRouter([
    {
        path: "/", element: <ProtectRoute> <Layout /> </ProtectRoute>, children: [
            {
                path: "/", element: <Home />
            },
            {
                path: "/posts/:id", element: <PostDetials/>
            },
            {
                path: "/profile", element: <Profile/>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    {
        path: "/login", element: <ProtectAuthRoute > <Login /> </ProtectAuthRoute>
    },
    {
        path: "/register", element: <ProtectAuthRoute > <Register /> </ProtectAuthRoute>
    },

])