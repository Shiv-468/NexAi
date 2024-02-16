import React from 'react'
import Aicrdimg from '../assets/Webp/AIRound.webp'
import AicardEllipse1 from '../assets/Webp/AicardEllipse1.webp'
import AicardEllipse2 from '../assets/Webp/AicardEllipse2.webp'
const Aicard = () => {
  return (
<section className='bg-[#040404]'>
    <div className="container mx-auto px-3 max-w-[1340px]">
        <div className=" border border-white rounded-[24px] bg-[#02CDCF] relative px-[20px] py-[30px] sm:px-[50px] sm:py-[50px] bg-aicard lg:pl-[100px] lg:pr-[119px] lg:py-[163px] ">
            <img src={AicardEllipse1} alt="AicardEllipse1" className='absolute left-0 bottom-0 z-0' />
            <img src={AicardEllipse2} alt="AicardEllipse2" className='absolute right-0 z-0' />
            <div className="flex flex-wrap -mx-3 items-center">
                <div className="w-full md:w-[58.33%] px-3 z-10">
                    <h2 className='text-[40px] leading-[50.4px] font-Recharge font-[700] text-[#02CDCF] pb-4 '>What is NexAi?</h2>
                    <p className='text-white text-[16px] font-Poppins font-[400] leading-[25.6px] opacity-[70%] max-w-[564px] '>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                    <p className='text-white text-[16px] font-Poppins font-[400] leading-[25.6px] opacity-[70%] pt-2 pb-[40px] max-w-[564px] '>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
          <button className='px-[32px] py-[18px] bg-[#02CDCF] rounded-[12px] text-[#0B0A0A] hover:bg-white duration-300 ease-linear hover:shadow-[0_4px_10px_2px_#02CDCF] text-[18px] leading-[21.6px] font-[700] font-Recharge '>Learn More</button>

                </div>
                <div className="w-full md:w-[41.66%] px-3 max-md:pt-10 z-10">
                    <img src={Aicrdimg} alt="Aicardimg" className=' bg-transparent' />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aicard