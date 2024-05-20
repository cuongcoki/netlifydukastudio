import Image from "next/image";
import { LEFE, listPhoto, ServicesItem, ServicesItemPrices } from '@/contants/images/index'
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
export default function Services() {
    return (
        <div className="container">
            <div className="relative w-full flex flex-col items-center">
                <Image src={LEFE} alt="hihi" />
                <div className="absolute inset-0 flex flex-col items-center justify-center left-0 right-0 bottom-80">
                    <h1 className="text-3xl text-primary-primary">OUR SERVICES</h1>
                    <caption className="text-gray-400 text-2xl"><i>DUKA STUDIO</i></caption>
                </div>
            </div>
            <section className=' h-[500px] relative '>
                <div className='  transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                    <div className='flex flex-col '>
                        <div className='flex items-center justify-between'>
                            {
                                ServicesItem.map((item, index) => (
                                    <div key={index} id='whyICON' className={`cursor-pointer flex justify-center items-center w-[250px] h-[350px] border-2 border-primary-primary `}>
                                        <div className='flex flex-col justify-between items-center'>
                                            <Image src={item.img} alt='hi' className="mb-2" />
                                            <span className='text-black font-semibold'> {item.title}</span>
                                            <i className='text-black text-lg font-sans'> {item.bo}</i>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-primary-primary h-[500px] relative '>
                <div className=' container transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            {
                                ServicesItemPrices.map((item, index) => (
                                    <div key={index} id='whyICON' className='text-primary-primary flex cursor-pointer justify-center items-center w-[250px] h-[350px] bg-white  '>
                                        <div className='flex flex-col items-center space-x-2 tracking-normal'>
                                            {/* <Image src={item.img} alt='hi' /> */}
                                            <span className='font-semibold'> {item.title}</span>
                                            <i className=' text-lg font-sans'> {item.bo}</i>
                                            <span className="mt-3 px-3 py-2 border-2 border-primary-primary">{item.price}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}