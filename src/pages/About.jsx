import Card from "../components/Card";



function About() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-16">
      
      {/* IMAGE SECTION */}
      <div
        className="
          w-full 
          h-[200px] 
          sm:h-[300px] 
          md:h-[400px]
          my-4 
          rounded-xl
          bg-cover 
          bg-center 
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('about.jpg')",
        }}
      ></div>

      {/* HEADING */}
     <div className="flex justify-center">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl my-4 text-black">
          About Us
        </h1>
      </div>

      {/* PARAGRAPH */}
     <p className="
        text-base 
        sm:text-lg 
        md:text-xl 
        text-justify 
        leading-relaxed
        max-w-6xl 
        mx-auto 
        my-6
      ">
        Madhya Pradesh Tourism is a celebration of the heart of India, offering travelers a unique blend of natural beauty, rich cultural heritage, spiritual destinations, and historical wonders. From the lush green forests and scenic hill stations of Pachmarhi to the majestic marble rocks of Bhedaghat, from the sacred Jyotirlingas of Ujjain and Omkareshwar to the world-famous UNESCO heritage temples of Khajuraho and Sanchi, Madhya Pradesh presents an unforgettable journey for every kind of traveler. Known for its abundant wildlife sanctuaries such as Kanha, Bandhavgarh, and Pench, the state is a paradise for nature and adventure lovers, while its ancient forts, palaces, and archaeological sites reflect centuries of history and architectural brilliance. MP Tourism aims to inspire exploration by showcasing peaceful landscapes, vibrant tribal culture, colorful festivals, traditional art, and warm hospitality, making every visit meaningful and memorable. Whether you are seeking spiritual peace, thrilling wildlife experiences, cultural discoveries, or relaxing moments in nature, MP Tourism welcomes you to explore, experience, and fall in love with the timeless charm of Madhya Pradesh.
      </p>

    </div>
  )
}       
export default About;
