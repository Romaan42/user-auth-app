"use client"
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { LuPencil } from "react-icons/lu";
import Link from 'next/link';
import { useEffect, useState } from 'react';


const UserDetail = () => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            const res = await fetch("/api/getuser")
            const data = await res.json()

            setUser(data.user)
            setImage(data.user.image)
            setLoading(false)
        }

        fetchUser()
    }, [])



    if (loading) return <h1 className='text-white text-2xl'>Loading...</h1>
    return (
        <div className='relative border-2 border-white rounded-xl p-5 w-80 flex flex-col justify-center items-center py-7'>
            <Link href={"/edit"}>
                <LuPencil className='text-white text-2xl absolute top-2 right-2 cursor-pointer' />
            </Link>

            <div className='relative w-15 h-15 border border-white rounded-full'>
                {image ? <Image src={image} alt='user image' fill className='rounded-full' /> :
                    <img src={"profile.jpg"} alt='profile image' className='rounded-full' />
                }

            </div>
            <h1 className='text-white text-xl mt-4'>Welcome, {user?.name}</h1>

            <button className='bg-white text-black w-full rounded-xs py-2 mt-5 cursor-pointer' onClick={() => signOut({
                callbackUrl: "/login"
            })}>Sign out</button>
        </div>
    )
}

export default UserDetail