"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'


const EditUser = () => {
    const router = useRouter()
    const session = useSession()
    // const user = session?.data?.user

    const imageRef = useRef()
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [serverImage, setServerImage] = useState()


    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/getuser")
            const data = await res.json()
            setImage(data?.user?.image)
            setName(data?.user?.name)
        }

        fetchUser()
    }, [])

    const handleSave = async () => {
        const formData = new FormData()
        formData.append("name", name)

        if (serverImage) {
            formData.append("file", serverImage)
        }

        const resp = await fetch("/api/edituser", {
            method: "POST",
            body: formData
        })

        const data = await resp.json()
        router.push("/")
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        setServerImage(file)
        setImage(URL.createObjectURL(file))
    }


    if (session.status === "loading") return <h1 className='text-white text-2xl'>Loading...</h1>
    return (
        <div className='relative border-2 border-white rounded-xl p-5 w-80 flex flex-col justify-center items-center py-7 '>


            <div className='relative w-15 h-15 border border-white rounded-full flex justify-center items-center cursor-pointer' onClick={() => imageRef.current.click()}>
                <input type="file" hidden accept='image/*' ref={imageRef} onChange={handleImage} />
                {image ?
                    <Image src={image} alt='user image' fill={true} sizes='fill' placeholder="blur" blurDataURL={image} className='rounded-full' />
                    :
                    <CgProfile className="w-full  text-[62px] text-white" />
                }

            </div>
            <input className='text-white border-2 border-white mt-4 w-full p-2 rounded outline-0'
                value={name} onChange={(e) => setName(e.target.value)}
            />

            <button className='bg-white text-black w-full rounded-xs py-2 mt-8 cursor-pointer' onClick={handleSave}>Save</button>
        </div>
    )
}

export default EditUser