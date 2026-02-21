import { useState } from "react";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { Form, Input, Button, Checkbox, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// {
//     "name": "Ahmed Bahnasy",
//     "email":"bahnasy2040101@gmail.com",
//     "password":"Bahnasy@123",
//     "rePassword":"Bahnasy@123",
//     "dateOfBirth":"7-10-1994",
//     "gender":"male"
// }

const registerSchema = z.object({
    name: z.string().nonempty("Enter The Full Name").min(3, "At least 3 letters must be entered").max(30, "Maximum 30 characters"),
    email: z.email("Invalid Email"),
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    dateOfBirth: z.coerce.date("Invalid date").refine((test) => {

        return new Date().getFullYear() - test.getFullYear() >= 18;
    }, "must above 18")
    // .transform((date) => {
    //     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    // })
    ,
    gender: z.enum(["male", "female"])
}).refine((obj) => {

    return obj.password === obj.rePassword;

}, { path: ["rePassword"], error: "Password Is not match" });

export default function RegisterForm() {
    const [showPassowrd, setshowPassowrd] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate()
    const myHandelSubmit = async (formData) => {
        try {
            setIsLoading(true);
            const res = await axios.post("https://route-posts.routemisr.com/users/signup", formData);
            addToast({
                title: res.data.message,
                color: "success",
            });
            navigate("/login")
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
            name: "",
            email: "",
            password: "",
            rePassword: "",
            dateOfBirth: "",
            gender: "male"
        },
        mode: "onSubmit",

        resolver: zodResolver(registerSchema)
    })
    

    return (
        <>
            <div className="mb-10">
                <h2 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-3">Create Account</h2>
                <p className="text-[#617589] dark:text-[#9eaebc] text-base font-normal">Join our community and start sharing today.</p>
            </div>
            <Form className="w-full" onSubmit={handleSubmit(myHandelSubmit)}>

                {/* Full Name */}
                <div className="my-2 w-full">
                    <Input
                        {...register("name")}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message}
                        label="Full Name"
                        labelPlacement="outside"
                        placeholder="Enter your name"
                        type="text"
                        variant="bordered"
                        size="lg"
                        color="primary"
                    />
                </div>

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
                {/* Confirm Password */}
                <div className="my-2 w-full">
                    <Input
                        {...register("rePassword")}
                        className="focus-visible:ring-2! !focus-visible:ring-red/20 focus-visible:border-amber-600"
                        isInvalid={!!errors.rePassword}
                        errorMessage={errors.rePassword?.message}
                        label="Confirm Password"
                        labelPlacement="outside"
                        placeholder="Enter your rePassword"
                        type={showPassowrd ? "text" : "password"}
                        variant="bordered"
                        size="lg"
                        color="primary"
                    />
                </div>

                {/* Birth Day */}
                <div className="my-2 w-full">
                    <label
                        htmlFor="dateOfBirth"
                        className={`block mb-2 text-md font-medium text-primary dark:text-white ${errors.dateOfBirth?.message ? "text-[#F31260]!":""}`}
                    >
                        Birth date
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        {...register("dateOfBirth")}
                        className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 transition ${errors.dateOfBirth
                            ? "border-[#F31260] border-2 focus:ring-red-300"
                            : "border-gray-300 focus:ring-primary"
                            }`}
                    />

                    {errors.dateOfBirth && (
                        <p className="mt-1 text-xs text-[#F31260]">
                            {errors.dateOfBirth?.message}
                        </p>
                    )}

                </div>
                {/* Gender */}
                <div className="my-2 w-full">
                    <p className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Gender
                    </p>
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                value="male"
                                {...register("gender")}
                                className="h-4 w-4 border-gray-300 accent-primary"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                Male
                            </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                value="female"
                                {...register("gender")}
                                className="h-4 w-4 border-gray-300 accent-primary"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                Female
                            </span>
                        </label>
                    </div>

                    {errors.gender && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.gender.message}
                        </p>
                    )}
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
                    By signing up, I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                </Checkbox>

                <Button disabled={isLoading} size="lg" type="submit" className="w-full bg-primary text-white font-bold" variant="flat">
                    {isLoading ? <LoaderCircle className="animate-spinner-ease-spin" /> : "Submit"}
                </Button>
            </Form>



        </>
    )
}
