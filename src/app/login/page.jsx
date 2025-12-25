"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";


const page = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signIn("credentials", {
                email,
                password
            })
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen w-full bg-black flex justify-center items-center text-white">
            <div className="p-5 border border-white rounded-2xl w-96">
                <h1 className="text-3xl text-center py-5">Login</h1>
                <form
                    className="flex flex-col items-center w-full" onSubmit={handleLogin}
                >

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
                    <p className="text-sm mb-2">
                        Don't have an account?{" "}
                        <Link href={"/register"} className="text-blue-500 cursor-pointer">
                            Register
                        </Link>
                    </p>
                    <button
                        type="submit"
                        className={` bg-white text-black p-2 m-2 rounded w-full cursor-pointer`}
                    >
                        Login
                    </button>
                </form>
                <hr className="my-4" />
                <p className="text-center">OR</p>
                <button className="bg-blue-600 text-white p-2 m-2 rounded w-full cursor-pointer flex justify-center items-center" onClick={() => signIn("google", {
                    callbackUrl: "/"
                })}>
                    <FcGoogle size={27} className="mr-3" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default page;
