'use client'
import Image from "next/image";
import { LEFE, listPhoto, youtobe } from '@/contants/images/index'
import { Button } from "../ui/button";
export default function Video() {
    return (
        <div className="container">
            <div className="relative w-full flex flex-col items-center">
                <Image src={LEFE} alt="hihi" />
                <div className="absolute inset-0 flex flex-col items-center justify-center left-0 right-0 bottom-80">
                    <h1 className="text-3xl text-primary-primary">VIDEO</h1>
                    <caption className="text-gray-400 text-2xl"><i>DUKA STUDIO</i></caption>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                <div
                    id='Category'
                    className='[&>img]:hover:scale-105  cursor-pointer
                        relative h-[250px] rounded-lg overflow-hidden shadow-md
                        [&>div]:hover:opacity-0
                        [&>span]:hover:opacity-100
                        '
                >
                    {/* <Video ={'https://www.youtube.com/watch?v=icm4ScfHJsc'} className=' transition duration-500 cursor-pointer w-full h-full object-cover' alt="Ảnh của danh mục" /> */}
                    <video className=' transition duration-500 cursor-pointer w-full h-full object-cover' controls preload="none">
                        <source src={youtobe} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className=' transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                        {/* <Image className=' relative m-auto w-[280px] color  opacity-80 hover:none  transition duration-700 cursor-pointer  object-cover' src={bgHoverCategory} alt='hihi'/> */}
                        {/* <span id='TitleCategory' className=' shadow-sm w-[150px] m-auto text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white opacity-0'>{item.title}</span> */}
                    </div>
                    {/* <span className="opacity-0 transition-opacity duration-500 text-center absolute bottom-4 right-4 transform translate-y-0  text-white">
                        <Button className="bg-primary-primary hover:bg-green-700  rounded">Details</Button>
                    </span> */}
                </div>
            </div>
        </div>
    );
}