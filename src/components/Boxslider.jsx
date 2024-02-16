import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
const Boxslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true,
        arrows: false,
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
              breakpoint: 830,
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
        <section className='bg-[#040404]'>
            <Slider rtl  className=' z-10' {...settings}>
                <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                    <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                        <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on light</h4>
                    </div>
                </div>
                <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                    <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                        <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, set
                            alarm of 5:00 am</h4>
                    </div>
                </div>
                <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                    <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                        <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, measure this table</h4>
                    </div>
                </div>
                <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                    <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                        <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on music</h4>
                    </div>
                </div>
            </Slider>
            <div className="py-[40px] mr-[50px]">
                <Slider className=' z-10' {...settings}>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on light</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, is the front door locked?</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, measure this table</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on music</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, is the front door locked?</h4>
                        </div>
                    </div>

                </Slider>
            </div>
            <div className="pb-[80px] md:pb-[160px] ml-[50px]">
                <Slider rtl className=' z-10' {...settings}>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on TV</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on music</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn of AC.</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Lock
                                the front door</h4>
                        </div>
                    </div>
                    <div className="px-3 cursor-pointer flex w-[340px] h-[220px]">
                        <div className=" h-[220px] bg-[#090909] bgs rounded-[16px] px-[43px] !flex items-center justify-center">
                            <h4 className=' text-white font-Recharge font-[700] leading-[38.4px] text-[24px] text-center max-w-[250px]'>NexAi, Turn on music</h4>
                        </div>
                    </div>

                </Slider>
            </div>
        </section>
    )
}

export default Boxslider