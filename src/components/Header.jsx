import React, { useState } from 'react'
import Logo from '../assets/Webp/logo.png'
const Header = () => {
  const [data , setdata]=useState(false);
 function view (){setdata(!data)
if(data === false){
    document.body.classList.add("overflow_hidden");
}
else{
    document.body.classList.remove("overflow_hidden");
}
}
  return (
    <header className='bg-[#040404] min-h-scre en  mt-[10px] max-w-[13 80px] mx-au to  max -sm: bg-c over'>
      <div className="container max-w-[1380px] mx-auto px-3 bg-no-repeat bg-hero pt-[10px] pb-[30px] sm:pb-[90px]">
       <div className="flex justify-between items-center max-w-[1120px] mx-auto ">
       <div className="">
          <img src={Logo} alt="logo" />
        </div>
        <ul className={`${data ? "right-0":"right-[-100%]"} flex items-center justify -between z-[50] gap-[20px] max-md:fixed  max-md:bg-[#00141B] max-md:w-full max-md:h-full max-md:top-0  max-md:flex-col max-md:justify-center duration-500`}>
          <li><a className='text-white text-[16px] font-[400] font-Poppins leading-[25.6px]' href="">Home</a></li>
          <li><a className='text-white text-[16px] font-[400] font-Poppins leading-[25.6px]' href="">Marketplace</a></li>
          <li><a className='text-white text-[16px] font-[400] font-Poppins leading-[25.6px]' href="">About</a></li>
          <li><a className='text-white text-[16px] font-[400] font-Poppins leading-[25.6px]' href="">NexChat</a></li>
          <li><a className='text-white text-[16px] font-[400] font-Poppins leading-[25.6px]' href="">Tokens</a></li>
        </ul>
        <button className='px-[32px] py-[18px] bg-[#02CDCF] font-Recharge hover:bg-white  duration-300 ease-linear hover:shadow-[0_4px_10px_2px_#02CDCF] rounded-[12px] text-[#0B0A0A] text-[18px] leading-[21.6px] font-[700] '>Sign Up</button>
        <div onClick={view} className="menuicon lg:hidden block z-50 ">
                    <span className="bar h-[5px] rounded-[6px] block bg-white w-[40px] duration-300"></span>
                    <span className="bar h-[5px] rounded-[6px] block  bg-white w-[40px] my-[6px]"></span>
                    <span className="bar h-[5px] rounded-[6px] block  bg-white w-[40px]  duration-300"></span>
                </div>
       </div>

        <div className="container max-w-[1150px] mx-auto ">
          <h1 className=' text-white text-[37px] leading-[46px] md:text-[60px] font-bold md:leading-[75.6px] max-w-[577px] z-10 pt-[104px] font-Recharge '><span className='text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
          <p className='text-[16px] font-Poppins font-[400] leading-[25.6px] text-white opacity-[70%] pt-4 pb-[35px] sm:pb-[51px]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
          <button className='px-[32px] py-[18px] bg-[#02CDCF] font-Recharge hover:bg-white  duration-300 ease-linear hover:shadow-[0_4px_10px_2px_#02CDCF] rounded-[12px] text-[#0B0A0A] text-[18px] leading-[21.6px] font-[700] '>Know More</button>
        </div>
      </div>
    </header>
  )
}

export default Header