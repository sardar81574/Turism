import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const splitTitle = title.innerText.split("");

    title.innerHTML = splitTitle
      .map((l) =>
        l === " "
          ? `<span class="inline-block">&nbsp;</span>`
          : `<span class="inline-block">${l}</span>`
      )
      .join("");

    gsap.from(title.querySelectorAll("span"), {
      opacity: 0,
      y: 40,
      stagger: 0.05,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    const para = paraRef.current;
    const splitPara = para.innerText.split("");

    para.innerHTML = splitPara
      .map((l) =>
        l === " "
          ? `<span class="inline-block">&nbsp;</span>`
          : `<span class="inline-block">${l}</span>`
      )
      .join("");

    gsap.from(para.querySelectorAll("span"), {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 1.2,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* VIDEO */}
    <img
  className="absolute inset-0 w-full h-full object-cover"
  src="/bg-b1.jpg"
  alt="Background"
/>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center 
                        pt-24 sm:pt-32 md:pt-40 
                        pb-12 px-4">
          <h1
            ref={titleRef}
            className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl 
                       font-bold max-w-4xl leading-snug"
          >
            Discover Beautiful Places Around the, Madhya Pradesh
          </h1>

          <p
            ref={paraRef}
            className="text-sm sm:text-lg md:text-xl 
                       mt-4 max-w-3xl leading-relaxed"
          >
            Explore stunning destinations, peaceful nature spots, and exciting
            travel experiences. Whether you love mountains, beaches,
            waterfalls, or historical places, we help you find the perfect
            location.
          </p>
        </div>

        {/* SEARCH + TITLE */}
        <div className="flex flex-col items-center gap-4 px-4">
          <input
            className="text-black rounded-full font-semibold 
                       text-sm sm:text-lg 
                       w-full max-w-xs sm:max-w-md
                       border-2 px-5 py-2 outline-none"
            type="text"
            placeholder="Search place..."
          />

          <h1 className="font-bold text-lg sm:text-2xl">
            Top Categories
          </h1>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
                        gap-4 px-4 py-6 place-items-center">
          {[
            {
              name: "Mountains",
              img: "https://i.pinimg.com/736x/a3/86/77/a38677b6f849770ddf75521147c93a9c.jpg",
            },
            { name: "Beaches", img: "beach-b1.jpg" },
            { name: "Cities", img: "city-c1.jpg" },
            { name: "Waterfall", img: "watet-w1.jpg" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative 
                         h-36 w-36 
                         sm:h-48 sm:w-48 
                         lg:h-60 lg:w-60
                         rounded-3xl bg-cover bg-center 
                         shadow-xl overflow-hidden"
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>

              <h1 className="absolute bottom-3 w-full text-center 
                             text-sm sm:text-lg font-bold text-white">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
