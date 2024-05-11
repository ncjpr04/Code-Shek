import React from "react";
import ContactForm from "./ContactForm.jsx";

function Footer() {
  return (
    <div id="contact">
      <div className='w-full flex flex-wrap p-20 font-["FoundersGrotesk"] bg-zinc-900'>
        <div className=" mt-10 h-full flex flex-col justify-between grow">
          <div className="heading">
            <h1 className="text-[8vw] uppercase  font-semibold">LEARN-</h1>
            <h1 className="text-[8vw] uppercase leading-[3rem] font-semibold">
              GROW
            </h1>
            <h1 className="text-[8vw] uppercase font-semibold">ACHIEVE</h1>
          </div>
        </div>
        <div className="mt-3 grow">
          <ContactForm />
        </div>
      </div>
      <div className="logo ml-20">
        <img
          className=" min-w-[70px] w-[7vw]"
          src="public\klipartbhsidvz.com.png"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center pb-5">
        &copy;EVENTGIG
      </div>
    </div>
  );
}

export default Footer;
