import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingIcon() {
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -18,
      rotation: 360,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%",
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden px-4">

      {/* BACKGROUND TEXT */}
      <h1
        className="
          absolute 
          text-[14vw] 
          sm:text-[10vw] 
          md:text-[8vw] 
          lg:text-[6vw]
          font-extrabold 
          tracking-widest
          bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 to-blue-500
          bg-clip-text text-transparent
          opacity-10 
          select-none
          text-center
        "
      >
        MADHYA&nbsp;PRADESH
      </h1>

      {/* ICON */}
      <svg
        ref={iconRef}
        viewBox="0 0 24 24"
        className="z-10 w-[70px] sm:w-[90px] md:w-[120px] lg:w-[140px]"
        fill="none"
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="50%" stopColor="#f9d423" />
            <stop offset="100%" stopColor="#24c6dc" />
          </linearGradient>
        </defs>

        <circle cx="12" cy="12" r="10" stroke="url(#iconGradient)" strokeWidth="2" />
        <path
          d="M12 3C8.6 3 6 5.6 6 9c0 4.5 6 12 6 12s6-7.5 6-12c0-3.4-2.6-6-6-6z"
          stroke="url(#iconGradient)"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="12" cy="9" r="2.2" fill="url(#iconGradient)" />
      </svg>

      {/* WELCOME TEXT */}
      <h2
        ref={textRef}
        className="
          mt-6
          text-center
          text-xl
          sm:text-2xl
          md:text-3xl
          font-extrabold
          bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
          bg-clip-text
          text-transparent
          tracking-wide
        "
      >
        Welcome to Madhya Pradesh <br />
        <span className="text-lg sm:text-xl md:text-2xl">
          Tourist Places
        </span>
      </h2>
    </div>
  );
}
