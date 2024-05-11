import React from "react";

function Cards() {
  return (
    <div
      id="education"
      className="w-full min-h-screen grow gap-5 flex flex-wrap items-center pt-24 pb-10
     bg-zinc-100 cards  px-20 justify-center "
    >
      <div className=" w-full border-b-[1px] border-zinc-300 pb-10">
        <h1 className='text-8xl font-["Neue_Montreal"] text-zinc-900'>
          Previous Events Gallery
        </h1>
      </div>
      <div className="cardcontainer grow  w-2/5 ">
        <div className="card relative w-full rounded-xl flex flex-col items-center justify-center overflow-hidden min-h-[45vh]  bg-[#212121]">
          <img
            src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg"
            alt=""
          />
          {/* <div className="absolute px-5 py-1 rounded-full border-2 left-[2vw] bottom-[2vw]">
            {" "}
            REGISTER
          </div>
          <div className="absolute px-5 py-1 rounded-full border-2 right-[2vw] bottom-[2vw]">
            KNOW MORE
          </div> */}
        </div>
      </div>
      <div className="cardcontainer  flex-wrap flex gap-5  grow">
        <div className="card flex-col relative grow rounded-xl flex justify-center items-center h-[45vh] min-w-[235px] bg-[#212121]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCShNLONy_vDiHggoGlZdjLVCxoiDmz9E01gwSGIP19w&s"
            alt=""
          />
          {/* <div className="absolute px-1 py-1 rounded-full border-2 left-[2vw] bottom-[2vw]">
            {" "}
            REGISTER
          </div>
          <div className="absolute px-1 py-1 rounded-full border-2 right-[2vw] bottom-[2vw]">
            KNOW MORE
          </div> */}
        </div>
        <div className="card flex-col relative grow rounded-xl flex justify-center items-center h-[45vh] min-w-[235px] overflow-hidden bg-[#212121]">
          <img
            src="https://t3.ftcdn.net/jpg/06/77/12/40/360_F_677124043_GVUnrY7z2T9MvymDuOczMBsCr7U3iPqK.jpg"
            alt=""
          />
          {/* <div className="absolute px-1 py-1 rounded-full border-2 left-[2vw] bottom-[2vw]">
            {" "}
            REGISTER
          </div>
          <div className="absolute px-1 py-1 rounded-full border-2 right-[2vw] bottom-[2vw]">
            KNOW MORE
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
