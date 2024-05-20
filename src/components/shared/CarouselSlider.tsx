"use client"
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { BG_Stuido, BG_Leases } from '@/contants/images/index'
import Image from "next/image";
export default function CarouselSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, loop: true })
    )
    return (
        <div className="flex items-center justify-center w-[full] relative">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                >
                <CarouselContent >
                    {BG_Stuido?.map((item, index) => (
                        <CarouselItem
                            key={index}
                        >
                            <Image src={item.banner}  alt="" className="w-full object-cover bg-cover bg-center  bg-no-repeat relative pointer-events-none"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="text-center absolute left-0 right-0 top-2/3 transform -translate-y-1/2">
                <div className="relative flex flex-col items-center">
                    <div className="relative w-full flex justify-center">
                        <Image src={BG_Leases} alt="hihi" className="w-[1200px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white left-0 right-0 bottom-80">
                            <h1 className="text-6xl text-primary-primary ">Welcome to</h1>
                            <h1 className="text-9xl text-primary-primary ">
                                DUKA STUDIO
                            </h1>
                            <button className="mt-4 px-10 py-3 bg-primary-primary text-white rounded-full font-normal text-2xl">
                                <i>Wedding tour, YEARBOOK Thái Nguyên</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}