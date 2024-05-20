import AboutMe from "@/components/shared/AboutMe";
import Blog from "@/components/shared/Blog";
import CarouselSlider from "@/components/shared/CarouselSlider";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Photo from "@/components/shared/Photo";
import Services from "@/components/shared/Services";
import Video from "@/components/shared/Video";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <CarouselSlider />
      <div className="h-[100px]"></div>
      <Photo />
      <div className="h-[100px]"></div>
      {/* <Video /> */}
      <AboutMe />
      <div className="h-[100px]"></div>
      <Services />
      <div className="h-[100px]"></div>
      <Blog />
      <div className="h-[100px]"></div>
      <Footer />
    </main>
  );
}
