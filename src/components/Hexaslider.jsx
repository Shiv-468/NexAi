import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import PolySvg from '../assets/Webp/polygon-Svg.webp'
import Ellipse3 from '../assets/Webp/Ellipse3.webp'
import Ring2 from '../assets/Webp/Ring2.webp'
const Hexaslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        slidesToShow:3.4,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section className='bg-[#040404] relative'>
            <img src={Ring2} alt="Ring2" className=' absolute bottom-[20% max-sm:hidden z-0' />
            <img src={Ellipse3} alt="Ellipse3" className='absolute right-0 max-md:hidden z-0' />
            <div className="container ml-auto z-10 ">
                <Slider className=' z-20' {...settings}>
                  <div className='px-[10px] z-10'>
                  <div className=" max-w-[367px] cursor-pointer mx-[10 px] px-[78px]  h-[367px] flex flex-col  pt-[70px] bg-polygon">
                        <div className="relative flex items-center justify-center ">
                            <p className='py-1 px-[21px] text-white text-[32px] font-bold leading-[51.2px] z-10 '>1</p>
                            <div className="absolute z-0">
                                <img src={PolySvg} alt="polysvg" />
                            </div>
                        </div>
                        <h3 className='text-white pt-[30px] text-center font-Recharge'>Security and Privacy</h3>
                    </div>
                  </div>
                   <div className='px-[10px] z-10 pt-[111px]'>
                   <div className=" max-w-[367px] cursor-pointer m x-[10px] px-[78px] pt-[70px] h-[367px] bg-polygon">
                        <div className="relative flex items-center justify-center ">
                            <p className='py-1 px-[21px] text-white text-[32px] font-bold leading-[51.2px] z-10 '>2</p>
                            <div className="absolute z-0">
                                <img src={PolySvg} alt="polugon" />
                            </div>
                        </div>
                        <h3 className='text-white text-center pt-[30px] font-Recharge'>Transparent and Reliable Data Management</h3>
                    </div>
                   </div>
                   <div className='px-[10px] z-10'>
                   <div className=" max-w-[367px] cursor-pointer m x-[10px] px-[78px] pt-[70px] h-[367px] bg-polygon">
                        <div className="relative flex items-center justify-center ">
                            <p className='py-1 px-[21px] text-white text-[32px] font-bold leading-[51.2px] z-10 '>3</p>
                            <div className="absolute z-0">
                                <img src={PolySvg} alt="polygon" />
                            </div>
                        </div>
                        <h3 className='text-white text-center pt-[30px] font-Recharge'>Self-learning and Personalization</h3>
                    </div>
                   </div>
                   <div className='px-[10px] z-10 pt-[111px]'>
                   <div className=" max-w-[367px] cursor-pointer m x-[10px] px-[78px] pt-[70px] h-[367px] bg-polygon">
                        <div className="relative flex items-center justify-center ">
                            <p className='py-1 px-[21px] text-white text-[32px] font-bold leading-[51.2px] z-10 '>4</p>
                            <div className="absolute z-0">
                                <img src={PolySvg} alt="polygon" />
                            </div>
                        </div>
                        <h3 className='text-white text-center pt-[30px] font-Recharge'>Automated and Transparent Transactions</h3>
                    </div>
                   </div>
                </Slider>
            </div>
            <div className="container px-3 mx-auto flex flex-col items-center justify-center">
                <h2 className='font-[700] text-[40px] leading-[50.4px] text-[#02CDCF] text-center font-Recharge pt-[90px] md:pt-[200px]'>NexAi does all this. And more.</h2>
                <p className=' text-white font-[400] text-[16px] leading-[25.6px] text-center opacity-[70%] pt-4 font-Poppins max-w-[912px] pb-[45px] md:pb-[90px]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
            </div>
        </section>
    );
}

export default Hexaslider