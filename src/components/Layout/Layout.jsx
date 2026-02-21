import { Outlet } from "react-router-dom";
import MyNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MobileNavbar from "../Home/MobileNavbar";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";


export default function Layout() {
  return (
    <>




      <MyNavbar />

        <div className="flex min-h-screen  justify-center lg:justify-between bg-gray-100">
          {/* Left Sidebar Navigation */}
          <LeftSide />
          {/* Central Feed */}
          <main className="flex w-full max-w-160 lg:max-w-200 flex-col gap-6 p-4 lg:p-8">
            {/* Feed Section */}
            <Outlet />
          </main>
          {/* Right Sidebar (Discovery) */}
          <RightSide />
        </div>
        {/* Mobile Navigation Bar (Visible only on small screens) */}
        <MobileNavbar />

      <div className="hidden lg:block">
        <Footer />
      </div>
        

    </>
  )
}
