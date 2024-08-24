import React from 'react'
import Sidebar from "./Sidebar"
import Video from "./Video"
import { useAuth } from '../context/AuthProvider'

function Home() {
    const { data, loading } = useAuth();
    console.log(data);
  return (
    <div className='flex justify-between mt-10'>
        <Sidebar />
        <div className='w-[100%] h-[calc(100vh-3.625rem)] overflow-y-scroll overflow-x-hidden '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 p-2 gap-y-5'>
                {!loading && data.map((item) => {
                    if (item.type !== "video") return false;
                    return <Video key={item.id} video={item?.video} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Home