import React, { useRef } from "react";

function Modal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose;
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="flex flex-col items-end">
          <button onClick={onClose} className="place-self-end inset-0 ">
            <img
              className="h-7 m-3 mt-20 invert"
              src="https://cdn-icons-png.flaticon.com/512/1/1766.png"
              alt=""
            />
          </button>
          <iframe
            className="w-[60vw] h-[70vh] flex justify-center rounded-lg items-center shadow-2xl shadow-black pt-150"
            src="https://formfacade.com/sm/6ruYH2JD3"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Modal;
