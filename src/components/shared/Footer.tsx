
import Image from 'next/image'
import React from 'react'
import { Separator } from "@/components/ui/separator"

import { Button } from '../ui/button'
export default function Footer() {
    return (
        <div className='bg-primary-primary  '>
            <div className='flex items-center justify-center p-4 gap-3'>
                <Separator className='h-3'/>

                <div className='bg-white w-[300px] h-[200px] flex justify-center items-center text-center mx-0 my-auto'>
                    <p>Trang Chủ</p>
                </div>
                <div className='bg-white w-[300px] h-[300px] flex justify-center items-center text-center mx-0 my-auto'>
                    <p className='text-3xl text-primary-primary'>
                       <a href="https://www.facebook.com/chuotcon.xauxi.3"> DUKA STUDIO</a>
                    </p>
                </div>
                <div className='bg-white w-[300px] h-[200px] flex justify-center items-center text-center mx-0 my-auto'>
                    Liên Hệ
                </div>
                <Separator className='h-3'/>

            </div>
            <div className='items-center flex justify-center'>
                <i className=' font-light font-sans text-slate-100'>Copyright 2024 © DUKA Studio | Design by : C_COKI</i>
            </div>
        </div>
    );
}