import React from "react";

function About() {
  return (
    <div
      id="about"
      className="w-full p-20 pt-24 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black relative z-50 "
    >
      <div className="flex justify-center items-center">
        <h1 className='font-["Neue_Montreal"] text-[2.5vw] tracking-tight leading-[3.5vw] text-center max-w-[60vw]'>
          Streamline the campus event planning with this platform. Easily
          organize, promote, and manage all college events in one place.
          Simplify coordination and maximize attendance with our user-friendly
          tools.
        </h1>
      </div>
      <div className="w-full  flex flex-wrap flex-col border-t-[1px] gap-5 pt-20 mt-16 border-[#8ca148]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl">SERVICES: </h1>
          <button className="uppercase flex  gap-3 items-center mt-5 mb-5 px-5 py-3 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-[8px] h-[8px] bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="grow  w-[80%] rounded-2xl bg-[#8a9d45] mx-[10%] backdrop-blur-sm  py-10 px-10 pb-6 font-neueMontreal flex flex-wrap gap-10 justify-around items-center shadow-lg ring-1 ring-black/5">
          <div className=" min-w-[35%] h-[40vh]  transition duration-500 hover:scale-[1.05] hover:bg-blue-100 shadow-lg overflow-hidden shadow-zinc-700 bg-zinc-100 mb-4 max-w-[50%] grow flex justify-center rounded-lg items-center">
            <div className="left h-full w-1/2   pl-10">
              <h1 className="font-neueMontreal mt-10 font-bold text-3xl ">
                Participate in <br />
                Live Events
              </h1>
              <h1 className="w-40 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptatibus minus
              </h1>
              <a href="#projects">
                <button className=" hover:bg-zinc-700 hover:text-white font-bold hover:shadow-sm hover:shadow-black rounded-full mt-6 bg-zinc-400 py-2 px-5">
                  Know More
                </button>
              </a>
            </div>
            <div className="right w-1/2">
              <img
                className="rounded-md h-40 "
                src="https://img.freepik.com/free-vector/rock-star-talent-show-judges-approving-musician-with-guitar-stage-flat-vector-illustration-competition-performance-concert_74855-13225.jpg?t=st=1715373538~exp=1715377138~hmac=75b5687f55d33d0a68c0c1b511e63670f893fcbac73926171e5b563a2534399a&w=1060"
                alt=""
              />
            </div>
          </div>
          <div className=" min-w-[35%] h-[40vh]  transition duration-500 hover:scale-[1.05] hover:bg-blue-100 shadow-lg overflow-hidden shadow-zinc-700 bg-zinc-100 mb-4 max-w-[50%] grow flex justify-center rounded-lg items-center">
            <div className="left h-full w-1/2   pl-10">
              <h1 className="font-neueMontreal mt-10 font-bold text-3xl ">
                Organizing <br />
                Events
              </h1>
              <h1 className="w-40 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptatibus minus
              </h1>
              <a href="#projects">
                {/* <button className=" hover:bg-zinc-700 hover:text-white font-bold hover:shadow-sm hover:shadow-black rounded-full mt-6 bg-zinc-400 py-2 px-5">
                  Know More
                </button> */}
              </a>
            </div>
            <div className="right w-1/2">
              <img
                className="rounded-md h-40 "
                src="https://img.freepik.com/free-vector/business-people-calendar_24908-56089.jpg?t=st=1715373467~exp=1715377067~hmac=70a532c99a2a7277c6c530ef90d8b618733df071fa3d8fc612a95ed23b9874a3&w=826"
                alt=""
              />
            </div>
          </div>
          <div className=" min-w-[35%] h-[40vh] transition duration-500 hover:scale-[1.05] hover:bg-blue-100 shadow-lg overflow-hidden shadow-zinc-700 bg-zinc-100 mb-4 max-w-[50%] grow flex justify-center rounded-lg items-center">
            <div className="left h-full w-1/2   pl-10">
              <h1 className="font-neueMontreal mt-10 font-bold text-3xl ">
                Participate in <br />
                competitions
              </h1>
              <h1 className="w-40 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptatibus minus
              </h1>
              <a href="#projects">
                {/* <button className=" hover:bg-zinc-700 hover:text-white font-bold hover:shadow-sm hover:shadow-black rounded-full mt-6 bg-zinc-400 py-2 px-5">
                  Know More
                </button> */}
              </a>
            </div>
            <div className="right w-1/2">
              <img
                className="rounded-md h-40 "
                src="https://img.freepik.com/free-vector/woman-man-with-cup-prize-event_24877-54073.jpg?t=st=1715373592~exp=1715377192~hmac=be1d6ba87c93eeb2115de3cb1213e6f41000b263f2d1a13f092a8459a1237020&w=740"
                alt=""
              />
            </div>
          </div>
          <div className=" min-w-[35%] h-[40vh]  transition duration-500 hover:scale-[1.05] hover:bg-blue-100 shadow-lg overflow-hidden shadow-zinc-700 bg-zinc-100 mb-4 max-w-[50%] grow flex justify-center rounded-lg items-center">
            <div className="left h-full w-1/2   pl-10">
              <h1 className="font-neueMontreal mt-10 font-bold text-3xl ">
                Participate in <br />
                Upcoming Events
              </h1>
              <h1 className="w-40 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptatibus minus
              </h1>
              <a href="#projects">
                {/* <button className=" hover:bg-zinc-700 hover:text-white font-bold hover:shadow-sm hover:shadow-black rounded-full mt-6 bg-zinc-400 py-2 px-5">
                  Know More
                </button> */}
              </a>
            </div>
            <div className="right w-1/2">
              <img
                className="rounded-md h-40 "
                src="https://img.freepik.com/free-vector/realistic-coming-soon-background_23-2148893855.jpg?t=st=1715373642~exp=1715377242~hmac=553ca01d36362add7a05b9374cedfdf0355e60a1e81b7557e992a2ae81b68982&w=1060"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
