"use client"
// import { FilesActions, getImageDownloadUrl } from '@/app/actions/userActions'

import { FaCss3, FaDownload, FaHtml5, FaPython } from 'react-icons/fa'

const Notes = () => {


    let notes = [
        {
            id: 1,
            title: "Python Notes",
            icon: <FaPython />,
            link: "#"
        },
        {
            id: 2,
            title: "HTML Notes",
            icon: <FaHtml5 className='text-orange-500' />,
            link: "#"
        }, {
            id: 3,
            title: "CSS Notes",
            icon: <FaCss3 />,
            link: "#"
        }
    ]

    return (
        <div>
            <h1 className='text-2xl font-bold text-center py-3'>Notes Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-6 p-4'>
                {notes.map((note) => (
                    <div key={note.id} className='border p-4 rounded-lg shadow-lg flex flex-col items-center'>
                        <div className='text-5xl mb-4 text-blue-500'>{note.icon}</div>
                        <h2 className='text-xl font-semibold mb-2'>{note.title}</h2>
                        <a href="https://drive.google.com/drive/folders/1-2sVljJVPjgGcGoAzubneU0I8OCBDEDN?usp=drive_link" target='_blank'> <button className='mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center'
                        >
                            <FaDownload className='mr-2' /> Download
                        </button>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Notes