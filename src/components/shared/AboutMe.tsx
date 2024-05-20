import { Circle } from "lucide-react";
import {bgab} from '@/contants/images/index'
import Image from "next/image";
export default function AboutMe() {
    return (
        <div className="container">
             <div className=' flex items-start justify-between '>
                <div className='w-[50%]'>
                    <span className='  '>
                        <h1 className='text-3xl font-semibold   text-primary-primary mb-4' > <i className='  font-sans'>About Me</i>  </h1>
                    </span>
                    <div  className='text-xl flex flex-col gap-4 mb-8  tracking-wide	'>
                        <p >DUKA STUDIO  là 1 studio luôn có những ưu đãi tốt, có nhiều thợ ảnh video chuyên nghiệp, luôn mang đến những bản thiết kế kịch bản thu hút người dùng, và các nhân viên của  DUKA studio luôn được đào tạo bài bản</p>
                        <p >DUKA STUDIO không chỉ nổi bật với đội ngũ thợ ảnh và video chuyên nghiệp, mà còn với sự sáng tạo không giới hạn trong từng khung hình. Mỗi dự án tại DUKA STUDIO đều được chăm chút tỉ mỉ, từ khâu lên ý tưởng đến sản xuất, để mang lại những trải nghiệm độc đáo và đáng nhớ cho khách hàng. Với môi trường làm việc năng động và hiện đại, các nhân viên tại DUKA STUDIO luôn có cơ hội phát triển kỹ năng và nâng cao chuyên môn, đảm bảo luôn đáp ứng và vượt xa kỳ vọng của khách hàng.</p>
                        <p >DUKA STUDIO luôn có những bộ trang phục tuyệt đệp chất lượng tuyệt vời, có vest, áo dài , váy cưới , cử nhân và nhiều trang phục diễn văn nghệ, ngoài ra còn nhiều phụ kiện khuyễn mại đi kèm vừa đẹp vừa bắt trends</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <Image  className=' ' src={bgab} width={800} height={800} alt='contacus' />
                </div>
            </div>
        </div>
    );
}