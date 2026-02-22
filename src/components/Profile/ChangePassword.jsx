import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addToast, Button, Input } from "@heroui/react";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { authContaxt } from "../../context/AuthContaxtProvider";



const changePasswordSchema = z.object({
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    newPassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
}).refine((obj) => {

    return obj.newPassword === obj.rePassword;

}, { path: ["rePassword"], error: "Password Is not match" });

export default function ChangePassword() {
    const [showPassowrd, setShowPassowrd] = useState(false);
    const [showNewPassowrd, setShowNewPassowrd] = useState(false);
    const { token, handelLogin } = useContext(authContaxt);



    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            password: "",
            newPassword: "",
            rePassword: "",

        },
        mode: "onChange",

        resolver: zodResolver(changePasswordSchema)
    });

    const changePassword = ({ password, newPassword }) => {

        return axios.patch("https://route-posts.routemisr.com/users/change-password", { password, newPassword }, {
            headers: {
                token
            }
        })
    }

    const { mutate, isPending } = useMutation({
        mutationFn: changePassword,


        onSuccess: (data) => {

            console.log("res data", data);

            handelLogin(data.data?.data?.token);


            addToast({
                title: "Password changed",
                color: "success"
            })
        },

        onError: (err) => {
            addToast({
                title: err.response?.data?.message,
                color: "danger",
            })
        }
    });

    return (
        <>
            <form onSubmit={handleSubmit(mutate)} className="space-y-4">

                <div className="flex md:flex-wrap flex-col md:flex-row gap-4">
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
                            // size="lg"
                            color="primary"
                            endContent={
                                <button onClick={() => setShowPassowrd(!showPassowrd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-primary transition-colors" type="button">
                                    <span className="material-symbols-outlined">{showPassowrd ? <Eye /> : <EyeClosed />}</span>
                                </button>
                            }
                        />
                    </div>
                    {/* newPassword */}
                    <div className="my-2 flex-1">
                        <Input
                            {...register("newPassword")}
                            isInvalid={!!errors.newPassword}
                            errorMessage={errors.newPassword?.message}
                            label="New Password"
                            labelPlacement="outside"
                            placeholder="Enter New Password"
                            type={showNewPassowrd ? "text" : "password"}
                            variant="bordered"
                            // size="lg"
                            color="primary"
                            endContent={
                                <button onClick={() => setShowNewPassowrd(!showNewPassowrd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-primary transition-colors" type="button">
                                    <span className="material-symbols-outlined">{showNewPassowrd ? <Eye /> : <EyeClosed />}</span>
                                </button>
                            }
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className="my-2 flex-1">
                        <Input
                            {...register("rePassword")}
                            className="focus-visible:ring-2! !focus-visible:ring-red/20 focus-visible:border-amber-600"
                            isInvalid={!!errors.rePassword}
                            errorMessage={errors.rePassword?.message}
                            label="Confirm Password"
                            labelPlacement="outside"
                            placeholder="rePassword"
                            type={showNewPassowrd ? "text" : "password"}
                            variant="bordered"
                            // size="lg"
                            color="primary"
                        />
                    </div>
                </div>

                <Button disabled={isPending} size="lg" type="submit" className="w-full bg-primary text-white font-bold" variant="flat">
                    {isPending ?
                        <LoaderCircle className="animate-spinner-ease-spin" />
                        :
                        "Update Password"
                    }
                </Button>
            </form>
        </>
    )
}
