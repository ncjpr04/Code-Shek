import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
function Feathured() {
  const [isHovering, setHovering] = useState(false);

  const hoverEffect = (elementIndex) => {
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
      if (index === elementIndex) {
        item.classList.remove("blurred");
      } else {
        item.classList.add("blurred");
      }
    });
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="projects" className="w-full pt-24">
      <div className=" w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-8xl font-["Neue_Montreal"] '>EVENTS</h1>
        <h1 className='text-xl font-["Neue_Montreal"] '>
          Click On the card to know more and Participate
        </h1>
      </div>
      <div className="cards py-10 px-20 flex flex-wrap justify-center items-center w-full">
        <a
          href="#"
          className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow "
          onMouseOver={() => hoverEffect(0)}
          onClick={() => setShowModal(true)}
        >
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>
            Hackathon - AIETM
          </h1>
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/hackathon-doodle-hand-drawing-team-programmers-web-developers-managers-graphic-designers-deve_88138-1348.jpg?t=st=1715373993~exp=1715377593~hmac=bd64159301476b9e86c2f243e8715067dfb93b414b2c2697ed8c55d105f70dcf&w=1060"
            alt=""
          />
        </a>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        <a
          href="#"
          className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow "
          onMouseOver={() => hoverEffect(0)}
          onClick={() => setShowModal(true)}
        >
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>
            Full Moon Party
          </h1>
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/full-moon-party-template-design_23-2150988973.jpg?t=st=1715374242~exp=1715377842~hmac=7ec51d0768ff8376b77c8a22e5adc75c56750a1fda8a2bfd1a5425df823554ee&w=1380"
            alt=""
          />
        </a>
        <a
          href="#"
          className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow "
          onMouseOver={() => hoverEffect(0)}
          onClick={() => setShowModal(true)}
        >
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>
            College Fest
          </h1>
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/open-air-concert_23-2148653209.jpg?t=st=1715374358~exp=1715377958~hmac=3b972c03ccae91ad3f1baef4a6a41b5da95aff3b8cf8f2584f1c2c3d130cacfd&w=1060"
            alt=""
          />
        </a>
        <a
          href="#"
          className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow "
          onMouseOver={() => hoverEffect(0)}
          onClick={() => setShowModal(true)}
        >
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>
            Independence Day Celebration
          </h1>
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-india-independence-day-celebration_23-2150569141.jpg?t=st=1715374442~exp=1715378042~hmac=eb8ec44970e1e534e33dab41e33039ce4414555c55ca5d8d2833f47abccd0481&w=1380"
            alt=""
          />
        </a>
        <a
          href="#"
          className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow "
          onMouseOver={() => hoverEffect(0)}
          onClick={() => setShowModal(true)}
        >
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>
            Coding competition
          </h1>
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/woman-working-new-app_23-2148682102.jpg?t=st=1715374566~exp=1715378166~hmac=d9aca2ac09a2c8bd14361eb65ea9dd456a0ce91004ffe5a32a53d5a8161ae119&w=1060"
            alt=""
          />
        </a>
        <a
          href="#"
          className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow "
          onMouseOver={() => hoverEffect(0)}
          onClick={() => setShowModal(true)}
        >
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>
            Chess competition
          </h1>
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/business-strategy-presentation-illustration_1262-18911.jpg?t=st=1715374662~exp=1715378262~hmac=e5c0832633e5b4e56a1eaee24a5cc1d6d3842108b3b57c2547aaebe58f77b9e9&w=1060"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Feathured;
