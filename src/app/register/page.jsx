"use client";
import { registerUser } from "@/actions/userActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter()

    const [state, formAction, loading] = useActionState(registerUser)

    useEffect(() => {
        if (state?.success) {
            setName("")
            setEmail("")
            setPassword("")
            router.push("/login")
        }

    }, [state])

    const handleRegister = async (formData) => {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        formAction({ name, email, password });

    };

    return (
        <div className="min-h-screen w-full bg-black flex justify-center items-center text-white">
            <div className="p-5 border border-white rounded-2xl w-96">
                <h1 className="text-3xl text-center py-5">Register</h1>
                <form
                    action={handleRegister}
                    className="flex flex-col items-center w-full"
                >
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-black border border-white p-2 m-2 rounded w-full"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black border border-white p-2 m-2 rounded w-full"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-black border border-white p-2 m-2 rounded w-full"
                    />
                    <p>
                        Already have an account?{" "}
                        <Link href={"/login"} className="text-blue-500 cursor-pointer">
                            Login
                        </Link>
                    </p>
                    <button
                        type="submit"
                        className={`${loading ? "opacity-50" : ""} bg-white text-black p-2 m-2 rounded w-full cursor-pointer`} onClick={() => signIn("google")}
                    >
                        Register
                    </button>
                </form>
                <hr className="my-5" />
                <p className="text-center">OR</p>
                <button className="bg-blue-600 text-white p-2 m-2 rounded w-full cursor-pointer flex justify-center items-center">
                    <FcGoogle size={27} className="mr-3" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default page;
