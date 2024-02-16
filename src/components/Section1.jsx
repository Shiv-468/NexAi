import React from 'react'
import Artboard from '../assets/Webp/Artboard.webp'
import Ellipse1 from '../assets/Webp/Ellipse1.webp'
const Section1 = () => {
  return (
    <section className='bg-[#040404] relative'>
        <img src={Ellipse1} alt="Ellipse1" className='absolute right-0 top-[-21%] z-[2] max-md:hidden' />
        <div className="container mx-auto px-3 max-w-[1180px] pt-[40px] sm:pt-[130px]">
            <div className="flex flex-wrap -mx-3 pt-[6px] pb-[72px] items-center max-md:items-end z-10">
                <div className=" w-full md:w-[50%] px-3 relative">
                    <div className="w-[130px] h-[130px] bg-[#02cdcf] blur-[130px] absolute bottom-[26%] left-[23%]"></div>
                    <img src={Artboard} alt="artboard" />
                </div>
                <div className=" w-full md:w-[50%] px-3 max-md:pt-10 z-10">
                    <h2 className='font-[700] text-[40px] leading-[50.4px] text-[#02CDCF] font-Recharge '>Ai-Powered Home Assistant</h2>
                    <p className=' text-white font-[400] text-[16px] leading-[25.6px] opacity-[70%] pt-[16px] font-Poppins '>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                    <p className=' text-white font-[400] text-[16px] leading-[25.6px] opacity-[70%] pt-[6px] font-Poppins '>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                    <p className=' text-white font-[400] text-[16px] leading-[25.6px] opacity-[70%] pt-[6px] font-Poppins pb-[40px] '>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                    
                    <button className='font-Recharge px-[32px] py-[18px] bg-[#02CDCF] font-[700] text-[#0B0A0A] rounded-[12px] text-[18px] leading-[21.6px] hover:bg-white  duration-300 ease-linear hover:shadow-[0_4px_10px_2px_#02CDCF] '>Learn More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1