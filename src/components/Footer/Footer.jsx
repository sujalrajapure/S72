import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-black w-full h-[50vh] rounded-ss-4xl text-white font-[font2] px-[5vw] py-[5vh] flex flex-col justify-between">

  {/* SOCIAL + CONTACT ROW */}
  <div className="flex justify-between items-center w-full">

    {/* SOCIAL BUTTONS */}
    <div className="flex gap-6">
      
      {["FB", "IG", "IN", "BE"].map((item) => (
        <div
          key={item}
          className="
            border-2 
            border-white 
            text-white
            rounded-full 
            px-10 
            py-3 
            text-4xl 
            font-bold 
            cursor-pointer
            transition-all 
            duration-300 
            hover:text-[#D3FD50]
            hover:border-[#D3FD50]
          "
        >
          {item}
        </div>
      ))}

    </div>

    {/* CONTACT BUTTON */}
    <div
      className="
        border-2
        border-white 
        rounded-full 
        px-16 
        py-4 
        text-5xl 
        font-bold 
        cursor-pointer
        transition-all 
        duration-300
        flex 
        items-center 
        gap-4
        hover:text-[#D3FD50]
        hover:border-[#D3FD50]
      "
    >
      CONTACT <span>❤️</span>
    </div>

  </div>

  {/* FOOTER BOTTOM ROW */}
  <div className="flex justify-between items-end w-full mt-10">

    {/* LOCATION */}
    <div className="flex items-center gap-3 text-[1.3rem]">
      🌐 <span className="font-bold">MONTREAL</span> <span>10:58:13</span>
    </div>

    {/* CENTER LINKS */}
    <div className="flex gap-12 text-[1rem] tracking-wide ">
      <p className="hover:text-[#D3FD50] cursor-pointer">PRIVACY POLICY</p>
      <p className="hover:text-[#D3FD50] cursor-pointer">PRIVACY NOTICE</p>
      <p className="hover:text-[#D3FD50] cursor-pointer">ETHICS REPORT</p>
      <p className="hover:text-[#D3FD50] cursor-pointer">CONSENT CHOICES</p>
    </div>

    {/* BACK TO TOP */}
    <p className="text-[1.3rem] font-bold cursor-pointer hover:text-[#D3FD50]">
      BACK TO TOP
    </p>

  </div>

</div>
    </div>
  )
}

export default Footer