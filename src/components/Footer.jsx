import React from 'react'
import { Facebook, Mail, Twitter } from '../common/Icon'
import Ellipse6 from '../assets/Webp/Ellipse6.png'
import Ellipse7 from '../assets/Webp/Ellipse7.png'
const Footer = () => {
  return (
    <section className='bg-footer bg-[#040404] bg-no-repeat bg-center relative'>
            <img src={Ellipse6} alt="Ellipse6" className='absolute right-0 bottom-0 max-md:hidden z-0' />
            <img src={Ellipse7} alt="Ellipse7" className='absolute bottom-[20%] max-md:hidden z-0' />
        <div className="container mx-auto px-3 max-w-[1140px]">
            <div className="flex flex-wrap -mx-3 md:pt-[145px] z-10">
                <div className="w-full md:w-[58.33%] px-3 pt-[36px] z-10">
                    <h4 className='text-white text-[16px] font-Recharge font-bold leading-[25.6px] max-w-[356px] opacity-[70%] '>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</h4>
                    <div className="flex gap-[12px] pt-[20px]">
                        <Facebook/>
                        <Twitter/>
                        <Mail/>
                    </div>
                </div>
                <div className="w-full md:w-[41.66%] max-md:pt-[30px] px-3 flex justify-between pb-[30px] flex-wrap gap-[20px] sm:gap-[90px] md:gap-0 max-md:justify-center">
                    <div className=" flex flex-col">
                        <h4 className='font-Recharge font-[700] text-[18px] text-white leading-[21.6px] pb-5'>Quick links</h4>
                        <ul className='flex flex-col gap-[20px]'>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Home</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Features</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Marketplace</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Tokens</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">NexChat</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">About</a></li>
                        </ul>
                    </div>
                    <div className=" flex flex-col">
                        <h4 className='font-Recharge font-[700] text-[18px] text-white leading-[21.6px] pb-5'>Information's</h4>
                        <ul className='flex flex-col gap-[20px]'>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Contact</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Phone</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">terms</a></li>
                            <li><a className=' font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] ' href="#">Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-[2px] bg-[#FCFCFC] bg-opacity-[40%] "></div>
            <p className='font-Recharge font-[700] text-[16px] text-white leading-[19.2px] opacity-[70%] text-center py-5'>@Copyright.nexai</p>
        </div>
    </section>
  )
}

export default Footer