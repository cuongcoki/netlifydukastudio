import { navbar, navbarSupport } from '@/contants/index.js'

export default function Header() {
    
    return (
        <div className="container shadow-lg">
            <div className='flex items-center justify-between py-4 '>
                <div className="left-side  flex items-center space-x-6 font-medium text-xl ">
                    {
                        navbar.map((item, index) => (
                            <span key={index}>
                                <i className='text-primary-primary'>{item.nav}</i>
                            </span>
                        ))
                    }
                </div>
                <div>
                    <p className='font-bold text-3xl'><a href="https://www.facebook.com/chuotcon.xauxi.3">DUKA STUDIO</a></p>
                </div>
                <div className="right-side flex items-center space-x-6 font-medium text-xl">
                    {
                        navbarSupport.map((item, index) => (
                            <span key={index}>
                                <i className='text-primary-primary'>{item.nav}</i>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}