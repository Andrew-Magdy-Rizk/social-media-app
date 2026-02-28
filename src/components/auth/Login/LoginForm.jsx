import { useContext, useState } from "react";
import { Eye, EyeClosed, MoveRight } from "lucide-react";
import { Form, Input, Button, Checkbox, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContaxt } from "../../../context/AuthContaxtProvider";
// {
//     "name": "Ahmed Bahnasy",
//     "email":"bahnasy2040101@gmail.com",
//     "password":"Bahnasy@123",
//     "rePassword":"Bahnasy@123",
//     "dateOfBirth":"7-10-1994",
//     "gender":"male"
// }

const registerSchema = z.object({
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    email: z.email("Invalid Email"),
})

export default function LoginForm() {
    const [showPassowrd, setshowPassowrd] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { handelLogin } = useContext(authContaxt);

    const navigate = useNavigate()
    const myHandelSubmit = async (formData) => {
        try {
            setIsLoading(true);
            const res = await axios.post("https://route-posts.routemisr.com/users/signin", formData);

            addToast({
                title: res.data.message,
                color: "success",
            });
            handelLogin(res.data.data?.token)
            navigate("/")
        } catch (err) {
            addToast({
                title: err.response.statusText,
                description: err.response.data?.message,
                color: "danger",
            });
        } finally {
            setIsLoading(false)
        }
    };

    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },

        mode: "onSubmit",

        resolver: zodResolver(registerSchema)
    });


    return (
        <>
            <div className="mb-10">
                <h2 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-3">Welcome Back</h2>
                <p className="text-[#617589] dark:text-[#9eaebc] text-base font-normal">Please enter your details to stay connected.</p>
            </div>
            <Form className="w-full" onSubmit={handleSubmit(myHandelSubmit)}>

                {/* Email */}
                <div className="my-2 w-full">
                    <Input
                        {...register("email")}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                        label="Email"
                        labelPlacement="outside"
                        placeholder="Enter your email"
                        type="text"
                        variant="bordered"
                        size="lg"
                        color="primary"
                    />
                </div>

                {/* Password */}
                <div className="my-2 w-full">
                    <Input
                        {...register("password")}
                        isInvalid={!!errors.password}
                        errorMessage={errors.password?.message}
                        label="password"
                        labelPlacement="outside"
                        placeholder="Enter your Password"
                        type={showPassowrd ? "text" : "password"}
                        variant="bordered"
                        size="lg"
                        color="primary"
                        endContent={
                            <button onClick={() => setshowPassowrd(!showPassowrd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-primary transition-colors" type="button">
                                <span className="material-symbols-outlined">{showPassowrd ? <Eye /> : <EyeClosed />}</span>
                            </button>
                        }
                    />
                </div>
                <Checkbox
                    classNames={{
                        label: "text-small",
                    }}
                    className="my-2"
                    name="terms"
                    validationBehavior="aria"
                    value="true"
                >
                    Remember me for 30 days
                </Checkbox>

                <Button isLoading={isLoading} size="lg" type="submit" className="w-full bg-primary text-white font-bold group" variant="flat">
                    <div className="flex gap-2">Log In<span className="group-hover:translate-x-0.5 duration-300"><MoveRight color="white" /></span></div>
                </Button>
            </Form>




        </>
    )
}
