import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Eyes() {

    const [rotateLeft, setRotateLeft] = useState(0);
    const [rotateRight, setRotateRight] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            setMousePosition({ x: mouseX, y: mouseY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const calculateRotation = (eye, setRotate) => {
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            const deltaX = mousePosition.x - eyeCenterX;
            const deltaY = mousePosition.y - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        const leftEye = document.querySelector('.left-eye');
        const rightEye = document.querySelector('.right-eye');

        if (leftEye) {
            calculateRotation(leftEye, setRotateLeft);
        }

        if (rightEye) {
            calculateRotation(rightEye, setRotateRight);
        }
    }, [mousePosition]);

    return (
        <div id='fun' className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll  data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute top-1/2 flex gap-20 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
                    <div className='left-eye flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                            <div className='line absolute top-1/2 left-1/2 w-full flex items-center pl-[1px]' style={{ transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)` }}>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>

                    </div>
                    <div className='right-eye flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                            <div className='line absolute top-1/2 left-1/2 w-full flex items-center pl-[1px]' style={{ transform: `translate(-50%, -50%) rotate(${rotateRight}deg)` }}>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
