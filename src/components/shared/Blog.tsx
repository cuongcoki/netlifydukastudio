import { LEFE, blogh, bloghh, bloghhh, bgblogg } from '@/contants/images/index'
import Image from "next/image";
import { Button } from '../ui/button';
export default function Blog() {
    return (
        <div className="container">
            <div>
                <div className="relative w-full flex flex-col items-center">
                    <Image src={LEFE} alt="hihi" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center left-0 right-0 bottom-80">
                        <h1 className="text-3xl text-primary-primary">OUR BLOG</h1>
                        <caption className="text-gray-400 text-2xl"><i>DUKA STUDIO</i></caption>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={bgblogg} className='w-full h-[800px]' alt='' />
                    <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 grid grid-cols-2 gap-3'>

                        <div className='left'>
                            <div className="bg-white shadow-md border border-gray-200  w-full mb-5">
                                <a href="#">
                                    <Image className=" w-full h-[600px] object-cover" src={blogh} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a className="text-white bg-primary-primary hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='right flex flex-col items-center'>
                            <div className="flex bg-white shadow-md border border-gray-200  w-full mb-5">
                                <a href="#">
                                    <Image className=" w-full h-[300px] object-cover" src={bloghh} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a className="text-white bg-primary-primary hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                        Read more
                                    </a>
                                </div>
                            </div>

                            <div className="flex bg-white shadow-md border border-gray-200  w-full mb-5">
                                <a href="#">
                                    <Image className=" w-full h-[300px] object-cover" src={bloghhh} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a className="text-white bg-primary-primary hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                        Read more
                                    </a>
                                </div>
                            </div>

                            <Button className='bg-primary-primary text-center mx-0 my-auto'>Read more</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}