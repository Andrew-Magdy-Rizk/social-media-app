

import Hero from "./Hero";
import HeaderMobile from "../HeaderMobile";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Footer from "../../Footer/Footer";

export default function Register() {


    return (
        <section>
            <div className="flex grow h-screen overflow-hidden">
                {/* Left Side: Visual/Hero Section */}
                <Hero />
                {/* Right Side: Form Section */}
                <div className="w-full lg:w-1/2 bg-white dark:bg-background-dark flex flex-col overflow-y-auto">
                    {/* Mobile Header Only */}
                    <HeaderMobile pageName={"register"} />
                    <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-24 py-12">
                        <div className="max-w-110 w-full mx-auto">
                            {/* Form Header */}
                            <RegisterForm />
                            {/* Divider */}
                            <div className="flex items-center my-8">
                                <div className="flex-1 border-t border-[#dbe0e6] dark:border-white/10" />
                                <span className="px-4 text-[#617589] text-sm">or</span>
                                <div className="flex-1 border-t border-[#dbe0e6] dark:border-white/10" />
                            </div>
                            {/* Alreadsy have an account */}
                            <div className="text-center">
                                <p className="text-[#111418] dark:text-white text-base font-normal">
                                    Already have an account?
                                    <Link to={"/login"} className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Footer Small */}
                    <Footer />
                </div>
            </div>

        </section>
    )
}
