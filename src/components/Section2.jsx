import React from 'react'
import Ellipse2 from '../assets/Webp/Ellipse2.png'
import Ring1 from '../assets/Webp/Ring1.png'
import RingE from '../assets/Webp/RingE.png'
import { Intell, Message, TimePlus, TimeTool, } from '../common/Icon'
const Section2 = () => {
  return (
<section className='bg-[#040404] relative'>
  <img src={Ring1} alt="Ring1" className='absolute right-0 bottom-[16%] max-sm:hidden' />
  <img src={Ellipse2} alt="Ellipse2" className=' absolute left-0 bottom-[-37%] z-[2] max-md:hidden' />
  <img src={RingE} alt="RingE" className=' absolute right-0 bottom-[-37%] z-[2] max-md:hidden ' />
    <div className="container max-w-[1340px] mx-auto px-3 md:pt-[120px]">
        <div className="border border-[#FCFCFC] rounded-[32px] h-[810px] z-10  overflow-y-scroll bg-globe px-[40px] md:px-[100px] bg-[#FFFFFF0A] bg-opacity-[4%]">
          <div className=" flex flex-col items-center">
            <h2 className='text-[#FCFCFC] text-center font-Recharge font-bold text-[40px] leading-[50.4px] pt-[80px] '>Unique features</h2>
            <p className=' text-white text-[16px] leading-[25.6px] font-Poppins opacity-[70%] max-w-[397px] text-center pt-4 pb-[80px] '>ability to engage in natural, fluent conversations in over 15 languages,</p>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className=" w-full md:w-[50%] md:justify-start h-full justify-center flex px-3">
              <div className=" max-w-[354px] bg-white pt-[30px] px-6 pb-[44px] rounded-[16px] border border-white hover:shadow-[0_4px_18px_2px_#02CDCF] duration-300 ease-linear ">
                <TimeTool/>
                <h3 className=' text-[#0B0A0A] font-Recharge font-[700] text-[20px] leading-[32px] pt-[30px] pb-[10px] '>Remote Access and File Management</h3>
                <p className=' text-[#0B0A0A] text-[16px] font-Poppins font-[400] leading-[25.6px] opacity-[70%] '> While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. </p>
              </div>
            </div>
            <div className=" w-full md:w-[50%] justify-center  px-3 flex md:justify-end md:mt-[300px] h-full mt-6">
              <div className=" max-w-[354px] bg-white pt-[30px] px-6 pb-[44px] rounded-[16px] border border-white hover:shadow-[0_4px_18px_2px_#02CDCF] duration-300 ease-linear ">
              <TimePlus/>
                <h3 className=' text-[#0B0A0A] font-Recharge font-[700] text-[20px] leading-[32px] pt-[30px] pb-[10px] '>Real-time Home Monitoring</h3>
                <p className=' text-[#0B0A0A] text-[16px] font-Poppins font-[400] leading-[25.6px] opacity-[70%] '> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
              </div>
            </div>
            <div className=" w-full md:w-[50%] flex justify-center  md:justify-start h-full px-3 md:translate-y-[-20%] mt-6">
              <div className=" max-w-[354px] bg-white pt-[30px] px-6 pb-[44px] rounded-[16px] border border-white hover:shadow-[0_4px_18px_2px_#02CDCF] duration-300 ease-linear ">
             <Message/>
                <h3 className=' text-[#0B0A0A] font-Recharge font-[700] text-[20px] leading-[32px] pt-[30px] pb-[10px] '>Autonomous and Natural Language Communication</h3>
                <p className=' text-[#0B0A0A] text-[16px] font-Poppins font-[400] leading-[25.6px] opacity-[70%] '> Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend,</p>
              </div>
            </div>
            <div className=" w-full md:w-[50%] justify-center px-3 flex md:justify-end md:mt-[200px] mt-6 mb-6">
              <div className=" max-w-[354px] bg-white pt-[30px] px-6 pb-[44px] rounded-[16px] border border-white hover:shadow-[0_4px_18px_2px_#02CDCF] duration-300 ease-linear ">
              <Intell/>
                <h3 className=' text-[#0B0A0A] font-Recharge font-[700] text-[20px] leading-[32px] pt-[30px] pb-[10px] '>Intelligent Contextual Awareness</h3>
                <p className=' text-[#0B0A0A] text-[16px] font-Poppins font-[400] leading-[25.6px] opacity-[70%] '> Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen.  </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className=" mx-auto px- 3 max-w-[997px] pt-[80px] md:pt-[160px] flex flex-col items-center px-3">
                <h2 className='font-[700] text-[40px] leading-[50.4px] text-[#02CDCF] font-Recharge text-center'>Blockchain & AI technology</h2>
                <p className=' text-white font-[400] text-[16px] leading-[25.6px] text-center opacity-[70%] pt-4 font-Poppins '>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <h2 className='font-[700] text-[20px] leading-[32px] text-white text-center max-w-[684px] pt-[40px] md:pt-[96px] pb-[60px] font-Recharge'>By building the software on blockchain, Nexai provides the following advantages</h2>
            </div>
</section>
  )
}

export default Section2