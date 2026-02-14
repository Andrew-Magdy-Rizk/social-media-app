import { Outlet } from "react-router-dom";
import MyNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (
    <>
      <MyNavbar />

      <main>
        <Outlet />
      </main>

      <div className="hidden lg:block">
        <Footer />
      </div>

    </>
  )
}
