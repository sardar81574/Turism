import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Card() {
  const navigate = useNavigate();
 const [search, setSearch] = useState("");

  // ======================
  //  ALL CARD DATA (6 cards)
  // ======================
  const cardData = [
    {
      id: 1,
      title: "Dhoopgarh",
      desc: "Dhoopgarh is the highest point in Pachmarhi, famous for its stunning sunrise and sunset views over the Satpura hills.",
      images: [
        "/images/doopghar/doop-d1.jpg",
        "/images/doopghar/doop-d2.jpg",
        "/images/doopghar/doop-d3.jpg",
        "/images/doopghar/doop-d4.jpg",
        "/images/doopghar/doop-d5.jpg",
        "/images/doopghar/doop-d6.jpg",
        "/images/doopghar/doop-d7.jpg",
      ]
    },

    {
      id: 2,
      title: "Bee-fall",
      desc: "Bee Fall is a beautiful waterfall near Pachmarhi, known for its refreshing water and lush green surroundings.",
      images: [
        "/images/bee-fall/bee-b1.jpg",
        "/images/bee-fall/bee-b2.jpg",
        "/images/bee-fall/bee-b3.jpg",
        "/images/bee-fall/bee-b4.jpg",
        "/images/bee-fall/bee-b5.jpg",
      ]
    },

    {
      id: 3,
      title: "Handi-khoh",
      desc:  "Handi Khoh is a deep natural gorge in Pachmarhi, famous for its dramatic cliffs and scenic views.",
      images: [
        "/images/handikhoh/handi-h1.jpg",
        "/images/handikhoh/handi-h2.jpg",
        "/images/handikhoh/handi-h3.jpg",
        "/images/handikhoh/handi-h4.jpg",
        "/images/handikhoh/handi-h5.jpg",
      ]
    },

    {
      id: 4,
      title: "Jatashankar",
      desc: "Jatashankar is a sacred cave temple in Pachmarhi, known for its natural Shiva lingam and rock formations.",
      images: [
        "/images/jatashankar/jata-j1.jpg",
        "/images/jatashankar/jata-j2.jpg",
        "/images/jatashankar/jata-j3.jpg",
        "/images/jatashankar/jata-j4.jpg",
        "/images/jatashankar/Jata-j5.jpg",
      ]
    },

    {
      id: 5,
      title: "Pandava Caves",
      desc: "Pandava Caves are ancient rock-cut caves in Pachmarhi, believed to be linked to the Pandavas and known for their historical and spiritual significance.",
      images: [
        "/images/pandava/pandav-p1.jpg",
        "/images/pandava/pandav-p2.jpg", 
        "/images/pandava/pandav-p3.jpg", 
        "/images/pandava/pandav-p4.jpg", 
        "/images/pandava/pandav-p5.jpg",
      ],
       
      
    },

    {
      id: 6,
      title: "Satpura National Park",
        desc: "Satpura National Park is a rich wildlife reserve in Madhya Pradesh, known for its dense forests, scenic landscapes, and diverse flora and fauna.",
      images: [
        "/images/satpura/satpura-s1.jpg", 
        "/images/satpura/satpura-s2.jpg", 
        "/images/satpura/satpura-s3.jpg", 
        "/images/satpura/satpura-s4.jpg", 
        "/images/satpura/satpura-s5.jpg",
      ]
    },

     /*bhedaghat*/

     {
      id: 7,
      title: "Marble-rocks",
       desc: "Marble Rocks are stunning white marble cliffs in Bhedaghat, famous for the Narmada River flowing between them and beautiful boat rides.",      
      images: [
        "/images/Marble-Rocks/marblem1.jpg", 
         "/images/Marble-Rocks/marblem2.jpg",
         "/images/Marble-Rocks/marblem3.jpg", 
         "/images/Marble-Rocks/marblem4.jpg", 
         "/images/Marble-Rocks/marblem5.jpg", 
      ]
    },


     {
      id: 8,
      title: "Dhuadhar Waterfall",
      desc: "Dhuandhar Waterfall is a powerful waterfall in Bhedaghat, known for its misty spray and roaring sound.",
      images: [
        "/images/Dhuandhar/dhuandhard1.jpg", 
        "/images/Dhuandhar/dhuandhard2.jpg", 
        "/images/Dhuandhar/dhuandhard3.jpg", 
        "/images/Dhuandhar/dhuandhard4.jpg", 
        "/images/Dhuandhar/dhuandhard5.jpg", 
       
      ]
    },

     {
      id: 9,
      title: "Chausath Yogini Temple",
       desc: "Chausath Yogini Temple is an ancient hilltop temple near Bhedaghat, famous for its 64 Yogini statues and river views.",      
      images: [
        "/images/Chausath-yohini/chusathc1.jpg", 
        "/images/Chausath-yohini/chusathc2.jpg",
       "/images/Chausath-yohini/chusathc3.jpg", 
       "/images/Chausath-yohini/chusathc4.jpg", 
       "/images/Chausath-yohini/chusathc5.jpg", 
        
       
      ]
    },



     {
      id: 10,
      title: "Cable car ride",
      desc: "Cable Car Ride offers a thrilling aerial view of the Marble Rocks and Dhuandhar Waterfall.",      
      images: [
        "/images/cable-car/cable-carc5.jpg", 
         "/images/cable-car/cable-carc2.jpeg", 
         "/images/cable-car/cable-carc3.jpg", 
         "/images/cable-car/cable-carc4.jpg", 
         "/images/cable-car/cable-carc1.jpeg", 
        
       
      ]
    },

    {
      id: 11,
      title: "Boating ride Bhedghat",
      desc: "Boating Ride, Bhedaghat offers a peaceful journey through the Marble Rocks, with the Narmada River flowing between stunning white cliffs.",
      images: [
        "/images/Boating/boatingb1.jpeg", 
        "/images/Boating/boatingb2.jpeg", 
       "/images/Boating/boatingb3.jpeg", 
        "/images/Boating/boatingb4.jpeg", 
        "/images/Boating/boatingb5.jpeg", 
        
       
      ]
    },

    /*ujjaan mahakal*/

        {
      id: 12,
      title: "Shree-Mahakaleshwar",
      desc: "Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas of Lord Shiva, famous for its sacred Bhasma Aarti.",
      images: [
        "/images/Shree-Mahakaleshwar/mahakaleshwarm1.jpg", 
         "/images/Shree-Mahakaleshwar/mahakaleshwarm2.jpg", 
         "/images/Shree-Mahakaleshwar/mahakaleshwarm3.jpg", 
         "/images/Shree-Mahakaleshwar/mahakaleshwarm4.jpg", 
         "/images/Shree-Mahakaleshwar/mahakaleshwarm5.jpg",  
        
       
      ]
    },


    
        {
      id: 13,
      title: "Harsiddhi Mata Mandir",
      desc: "Harsiddhi Mata Mandir is a revered Shakti Peeth in Ujjain, known for its tall oil lamps and spiritual aura.",
      images: [
        "/images/Harsiddhi/Harsiddhi1.jpg", 
          "/images/Harsiddhi/Harsiddhi2.jpg", 
         "/images/Harsiddhi/Harsiddhi3.jpg",  
         "/images/Harsiddhi/Harsiddhi4.jpg", 
         "/images/Harsiddhi/Harsiddhi5.jpg", 
        
       
      ]
    },

     {
      id: 14,
      title: "Kal Bhairav Mandir",
      desc: "Kal Bhairav Mandir is a unique temple where devotees offer liquor to Lord Kal Bhairav.",
      images: [
        "/images/Kal/kal1.jpg", 
        "/images/Kal/kal2.jpg", 
        "/images/Kal/kal3.jpg", 
        "/images/Kal/kal4.jpg", 
        "/images/Kal/kal5.jpg", 
      ]
    },


     {
      id: 15,
      title: "Gopal mandir ",
      desc: "Gopal Mandir is a historic Krishna temple in Ujjain, known for its beautiful silver doors.",
      images: [
        "/images/Gopal-mandir/gopal-mandirg1.jpg", 
        "/images/Gopal-mandir/gopal-mandirg2.jpg", 
        "/images/Gopal-mandir/gopal-mandirg3.jpg", 
        "/images/Gopal-mandir/gopal-mandirg4.jpg", 
        "/images/Gopal-mandir/gopal-mandirg5.jpg", 
        
      ]
    },

      {
      id: 16,
      title: "Ram ghat ",
      desc: "Ram Ghat is a sacred bathing ghat on the Shipra River in Ujjain, famous for evening aarti.",
      images: [
        "/images/Ram-ghat/Ram-ghatr5.jpg",
        "/images/Ram-ghat/Ram-ghatr2.jpg", 
        "/images/Ram-ghat/Ram-ghatr3.jpg", 
        "/images/Ram-ghat/Ram-ghatr4.jpg", 
        "/images/Ram-ghat/Ram-ghatr1.jpg",  
        
        
      ]
    },

     {
      id: 17,
      title: "Sandipani Ashram ",
      desc: "Sandipani Ashram is an ancient ashram where Lord Krishna is believed to have studied.",
      images: [
        "/images/Sandipani-ashram/sandipani-ashrams1.jpg",
        "/images/Sandipani-ashram/sandipani-ashrams2.jpg",
        "/images/Sandipani-ashram/sandipani-ashrams3.jpg",
        "/images/Sandipani-ashram/sandipani-ashrams4.jpg",
        "/images/Sandipani-ashram/sandipani-ashrams5.jpg",
        
        
        
      ]
    },

    {
      id: 18,
      title: "Vedh Sala ",
      desc: "Vedh Shala is a historic observatory built by Maharaja Jai Singh, used for astronomical studies.",
      images: [
        "/images/Vedh-sala/Vedh-salav5.jpeg",
        "/images/Vedh-sala/Vedh-salav2.jpeg",
        "/images/Vedh-sala/Vedh-salav3.jpeg",
        "/images/Vedh-sala/Vedh-salav4.jpeg",
        
        
        
      ]
    },



    {
      id: 19,
      title: "Bade Ganesh mandir" ,
      desc: "Bade Ganesh Mandir is a popular temple near Mahakaleshwar, known for its large Ganesh idol.",
      images: [
        "/images/Bade-Ganesh/Bade-Ganeshb1.jpg",
        "/images/Bade-Ganesh/Bade-Ganeshb2.jpg",
        "/images/Bade-Ganesh/Bade-Ganeshb3.jpg",
        "/images/Bade-Ganesh/Bade-Ganeshb4.jpg",
        "/images/Bade-Ganesh/Bade-Ganeshb5.jpg",
        
        
        
      ]
    },

/*omkerashwar*/



{
      id: 20,
      title: "Omkareshwar-mandir" ,
      desc: "Omkareshwar Mandir is a sacred Jyotirlinga temple of Lord Shiva, located on the holy Narmada River.",
      images: [
        "/images/omkareshwar/omkareshwaro4.jpg",
        "/images/omkareshwar/omkareshwaro2.jpg",
        "/images/omkareshwar/omkareshwaro3.jpg",
        "/images/omkareshwar/omkareshwaro1.jpg",
        "/images/omkareshwar/omkareshwaro5.jpg",
      
        
        
        
      ]
    },

     {
      id: 21,
      title: "Mamleshwar" ,
      desc: "Mamleshwar (Amareshwar) Mandir is an ancient Shiva temple on the opposite bank of the Narmada.",
      images: [
        "/images/Mamleshwar/Mamleshwarm2.jpg",
        "/images/Mamleshwar/Mamleshwarm1.jpg",
        "/images/Mamleshwar/Mamleshwarm3.jpg",
        "/images/Mamleshwar/Mamleshwarm4.jpg",
        "/images/Mamleshwar/Mamleshwarm5.jpg",
      ]
    },




{
      id: 22,
      title: "Narmada Ghat" ,
      desc: "Narmada Ghat is a peaceful riverside area for rituals and holy dips..",
      images: [
        "/images/Narmada/Narmada1.jpg",
        "/images/Narmada/Narmada2.jpg",
        "/images/Narmada/Narmada3.jpg",
        "/images/Narmada/Narmada4.jpg",
        "/images/Narmada/Narmada5.jpg",
      ]
    },

{
      id: 23,
      title: "Siddhanath Mandir" ,
      desc: "Siddhanath Mandir is a historic temple known for its fine carvings and spiritual importance..",
      images: [
        "/images/Siddhanath/Siddhanath1.jpg",
        "/images/Siddhanath/Siddhanath2.jpg",
        "/images/Siddhanath/Siddhanath3.jpg",
        "/images/Siddhanath/Siddhanath4.jpg",
        "/images/Siddhanath/Siddhanath5.jpg",  
      ]
    },
{
      id: 24,
      title: "24 Avtar" ,
      desc: "24 Avtar Mandir depicts the 24 incarnations of Lord Vishnu..",
      images: [
        
        "/images/24-Avtar/24-Avtara2.jpg",
        "/images/24-Avtar/24-Avtara3.jpg",
        "/images/24-Avtar/24-Avtara4.jpg",
        "/images/24-Avtar/24-Avtara5.jpg",
      
        
        
        
      ]
    },
{
      id: 25,
      title: "Omkar Parvat" ,
      desc: "Omkar Parvat is the holy hill shaped like the ‘Om’ symbol, giving Omkareshwar its name..",
      images: [
        "/images/Omkar/Omkar1.jpg",
        "/images/Omkar/Omkar2.jpg",
        "/images/Omkar/Omkar3.jpg",
        "/images/Omkar/Omkar4.jpg",
        "/images/Omkar/Omkar5.jpg",
      ]
    },
{
      id: 26,
      title: "Ahilya Ghat" ,
      desc: "Ahilya Ghat is a serene ghat associated with Ahilyabai Holkar, ideal for prayer and aarti..",
      images: [
        "/images/Ahilya/Ahilya1.jpg",
        "/images/Ahilya/Ahilya2.jpg",
        "/images/Ahilya/Ahilya3.jpg",
        "/images/Ahilya/Ahilya4.jpg",
        "/images/Ahilya/Ahilya5.jpg",  
      ]
    },

{
      id: 27,
      title: "Kedareshwar Mandir" ,
      desc: "Kedareshwar Mandir is an old Shiva temple believed to have strong spiritual energy..",
      images: [
        "/images/Kedareshwar/Kedareshwar1.jpg",
        "/images/Kedareshwar/Kedareshwar2.jpg",
        "/images/Kedareshwar/Kedareshwar3.jpg",
        "/images/Kedareshwar/Kedareshwar4.jpg", 
      ]
    },
{
      id: 28,
      title: "Gauri Somnath Mandir" ,
      desc: "Gauri Somnath Mandir is a sacred temple dedicated to Goddess Parvati and Lord Shiva..",
      images: [
        "/images/Gauri/Gauri1.jpg",
        "/images/Gauri/Gauri2.jpg",
        "/images/Gauri/Gauri3.jpg",
        "/images/Gauri/Gauri4.jpg",
      ]
    },
{
      id: 29,
      title: "Boat ride " ,
      desc: "Boat Ride offers a scenic view of the Om-shaped island and temples along the Narmada River..",
      images: [
        "/images/boatrideom/boatrideomb1.jpg",
        "/images/boatrideom/boatrideomb2.jpg",
        "/images/boatrideom/boatrideomb3.jpg",
        "/images/boatrideom/boatrideomb4.jpg",
        "/images/boatrideom/boatrideomb5.jpg",
      
        
        
        
      ]
    },


/*khajuraho*/

{
      id: 30,
      title: "Kandariya Mahadev Mandir" ,
      desc: "Kandariya Mahadev Mandir is the largest and most ornate temple in Khajuraho, dedicated to Lord Shiva..",
      images: [
        "/images/Kandariya/Kandariya1.jpg",
        "/images/Kandariya/Kandariya2.jpg",
        "/images/Kandariya/Kandariya3.jpg",
        "/images/Kandariya/Kandariya4.jpg",
        "/images/Kandariya/Kandariya5.jpg",
      ]
    },

{
      id: 31,
      title: "Lakshman Mandir" ,
      desc: "Lakshman Mandir is an early Khajuraho temple, famous for its detailed stone carvings..",
      images: [
        "/images/Lakshman/Lakshman1.jpg",
        "/images/Lakshman/Lakshman2.jpg",
        "/images/Lakshman/Lakshman3.jpg",
        "/images/Lakshman/Lakshman4.jpg",
        "/images/Lakshman/Lakshman5.jpg", 
      ]
    },


    {
      id: 32,
      title: "Vishvanath Mandir" ,
      desc: "Vishvanath Mandir is a beautifully sculpted Shiva temple known for its elegant architecture..",
      images: [
        "/images/Vishvanath/Vishvanath1.jpg",
        "/images/Vishvanath/Vishvanath2.jpg",
        "/images/Vishvanath/Vishvanath3.jpg",
        "/images/Vishvanath/Vishvanath4.jpg",
        "/images/Vishvanath/Vishvanath5.jpg",
      
        
        
        
      ]
    },



    {
      id: 33,
      title: "Chitragupta Mandir" ,
      desc: "Chitragupta Mandir is a rare Sun Temple in Khajuraho, dedicated to Surya..",
      images: [
        "/images/Chitragupta/Chitragupta1.jpg",
       "/images/Chitragupta/Chitragupta2.jpg",
       "/images/Chitragupta/Chitragupta3.jpg",
       "/images/Chitragupta/Chitragupta4.jpg",
        "/images/Chitragupta/Chitragupta5.jpg",  
      ]
    },


    {
      id: 34,
      title: "Parshvanath Mandir" ,
      desc: "Parshvanath Mandir is the largest Jain temple in Khajuraho, noted for its fine sculptures..",
      images: [
        "/images/Parshvanath/Parshvanath1.jpg",
        "/images/Parshvanath/Parshvanath2.jpg",
        "/images/Parshvanath/Parshvanath3.jpg",
        "/images/Parshvanath/Parshvanath4.jpg",
       "/images/Parshvanath/Parshvanath5.jpg", 
      ]
    },


    {
      id: 35,
      title: "Raneh Falls Canyon" ,
      desc: "Raneh Falls Canyon is a scenic canyon near Khajuraho, formed by the Ken River over volcanic rock..",
      images: [
        "/images/Raneh/Raneh1.jpg",
        "/images/Raneh/Raneh2.jpg",
        "/images/Raneh/Raneh3.jpg",
        "/images/Raneh/Raneh4.jpg",
        "/images/Raneh/Raneh5.jpg",
      ]
    },


    {
      id: 36,
      title: "Ken Gharial Sancturary" ,
      desc: "Ken Gharial Sanctuary is a protected area for gharials and other wildlife along the Ken River..",
      images: [
        "/images/Ken/Ken1.jpg",
        "/images/Ken/Ken2.jpg",
        "/images/Ken/Ken3.jpg",
        "/images/Ken/Ken4.jpg",
        "/images/Ken/Ken5.jpg", 
      ]
    },


    {
      id: 37,
      title: "Khajuraho Archaeological Museum" ,
      desc: "Khajuraho Archaeological Museum displays sculptures and artifacts from the Khajuraho temples..",
      images: [
        "/images/Khajuraho/Khajuraho1.jpg",
        "/images/Khajuraho/Khajuraho2.jpg",
        "/images/Khajuraho/Khajuraho3.jpg",
        "/images/Khajuraho/Khajuraho4.jpg",
        "/images/Khajuraho/Khajuraho5.jpg", 
      ]
    },


    {
      id: 38,
      title: "State Museum of Tribal & Folk Art" ,
      desc: "State Museum of Tribal & Folk Art showcases the rich tribal culture and traditional art of Madhya Pradesh..",
      images: [
        "/images/State/State1.jpg",
        "/images/State/State2.jpg",
        "/images/State/State3.jpg",
        "/images/State/State4.jpg",
        "/images/State/State5.jpg", 
      ]
    },


    {
      id: 39,
      title: "Light & Sound Show" ,
      desc: "Light & Sound Show brings the history of Khajuraho temples to life through music and narration..",
      images: [
        "/images/Light/Light1.jpg",
        "/images/Light/Light2.jpg",
        "/images/Light/Light3.jpg",
        "/images/Light/Light4.jpg",
        "/images/Light/Light5.jpg", 
      ]
    },



    {
      id: 40,
      title: "Khajuraho Dance Festival" ,
      desc: "Khajuraho Dance Festival is a famous cultural event celebrating classical Indian dance forms..",
      images: [
        "/images/Khajuraho-Dance/Khajuraho-Dance1.jpg",
        "/images/Khajuraho-Dance/Khajuraho-Dance2.jpg",
        "/images/Khajuraho-Dance/Khajuraho-Dance3.jpg",
        "/images/Khajuraho-Dance/Khajuraho-Dance4.jpg",
         "/images/Khajuraho-Dance/Khajuraho-Dance5.jpg", 
      ]
    },
/*orchha*/


    {
      id: 41,
      title: "Orchha Fort Complex" ,
      desc: "Orchha Fort Complex is a grand historical site showcasing Bundela architecture and royal heritage..",
      images: [
        "/images/Orchha/Orchha1.jpg",
        "/images/Orchha/Orchha1.jpg",
        "/images/Orchha/Orchha1.jpg",
       "/images/Orchha/Orchha1.jpg",
        "/images/Orchha/Orchha1.jpg",
      ]
    },



    {
      id: 42,
      title: "Jehangir Mahal" ,
      desc: "Jehangir Mahal is a majestic palace built to welcome Mughal emperor Jahangir..",
      images: [
        "/images/Jehangir/Jehangir1.jpg",
        "/images/Jehangir/Jehangir2.jpg",
        "/images/Jehangir/Jehangir3.jpg",
        "/images/Jehangir/Jehangir4.jpg",     
        "/images/Jehangir/Jehangir5.jpg",  
      ]
    },



    {
      id: 43,
      title: "Raja Mahal" ,
      desc: "Raja Mahal is a historic palace known for its murals and royal charm..",
      images: [
        "/images/Raja/Raja1.jpg",
        "/images/Raja/Raja2.jpg",
        "/images/Raja/Raja3.jpg",
        "/images/Raja/Raja4.jpg",
        "/images/Raja/Raja5.jpg", 
      ]
    },



    {
      id: 44,
      title: "Ram Raja Mandir" ,
      desc: "Ram Raja Mandir is a unique temple where Lord Ram is worshipped as a king..",
      images: [
        "/images/Ram/Ram1.jpg",
        "/images/Ram/Ram2.jpg",
        "/images/Ram/Ram3.jpg",
        "/images/Ram/Ram4.jpg",
        "/images/Ram/Ram5.jpg",  
      ]
    },



    {
      id: 45,
      title: "Chaturbhuj Temple" ,
      desc: "Chaturbhuj Temple is a towering temple dedicated to Lord Vishnu, famous for its architecture..",
      images: [
        "/images/Chaturbhuj/Chaturbhuj1.jpg",
         "/images/Chaturbhuj/Chaturbhuj2.jpg",
         "/images/Chaturbhuj/Chaturbhuj3.jpg",
         "/images/Chaturbhuj/Chaturbhuj4.jpg",
         "/images/Chaturbhuj/Chaturbhuj5.jpg",  
      ]
    },


    {
      id: 46,
      title: "Laxmi Narayan Temple" ,
      desc: "Laxmi Narayan Temple blends temple and fort architecture with beautiful wall paintings..",
      images: [
        "/images/Laxmi/Laxmi1.jpg",
        "/images/Laxmi/Laxmi2.jpg",
        "/images/Laxmi/Laxmi3.jpg",
        "/images/Laxmi/Laxmi4.jpg",
        "/images/Laxmi/Laxmi5.jpg",  
      ]
    },


    {
      id: 47,
      title: "Cenotaphs  Chhatris" ,
      desc: "Cenotaphs (Chhatris) are elegant memorials of Orchha’s rulers along the Betwa River..",
      images: [
        "/images/Cenotaphs/Cenotaphs1.jpg",
        "/images/Cenotaphs/Cenotaphs2.jpg",
        "/images/Cenotaphs/Cenotaphs3.jpg",
        "/images/Cenotaphs/Cenotaphs4.jpg",
        "/images/Cenotaphs/Cenotaphs5.jpg", 
      ]
    },


    {
      id: 48,
      title: "Betwa River" ,
      desc: "Betwa River flows beside Orchha, adding natural beauty and peaceful views..",
      images: [
        "/images/Betwa/Betwa1.jpg",
        "/images/Betwa/Betwa2.jpg",
        "/images/Betwa/Betwa3.jpg",
        "/images/Betwa/Betwa4.jpg",
        "/images/Betwa/Betwa5.jpg",
      ]
    },


    {
      id: 49,
      title: "Phool Bagh" ,
      desc: "Phool Bagh is a royal garden complex known for its fountains and underground chambers..",
      images: [
        "/images/Phool/Phool1.jpg",
         "/images/Phool/Phool2.jpg",
          "/images/Phool/Phool3.jpg",
           "/images/Phool/Phool4.jpg",
            "/images/Phool/Phool5.jpg", 
      ]
    },


    {
      id: 50,
      title: "Sound & Light Show" ,
      desc: "Sound & Light Show narrates the history and legends of Orchha in an engaging way..",
      images: [
        "/images/Sound/Sound1.jpg",
        "/images/Sound/Sound2.jpg",
        "/images/Sound/Sound3.jpg",
        "/images/Sound/Sound4.jpg",
        "/images/Sound/Sound5.jpg", 
      ]
    },


/*Mandhu*/



 {
      id: 51,
      title: "Jahaz Mahal" ,
      desc: "Jahaz Mahal is a beautiful palace in Mandu, appearing like a ship between two lakes..",
      images: [
        "/images/Jahaz/Jahaz1.jpg",
        "/images/Jahaz/Jahaz2.jpg",
        "/images/Jahaz/Jahaz3.jpg",
        "/images/Jahaz/Jahaz4.jpg",
        "/images/Jahaz/Jahaz5.jpg",  
      ]
    },


    
 {
      id: 52,
      title: "Hindola Mahal" ,
      desc: "Hindola Mahal is an elegant hall known for its sloping walls and unique design..",
      images: [
        "/images/Hindola/Hindola1.jpg",
        "/images/Hindola/Hindola2.jpg",
        "/images/Hindola/Hindola3.jpg",
        "/images/Hindola/Hindola4.jpg",
        "/images/Hindola/Hindola5.jpg",  
      ]
    },


    
 {
      id: 53,
      title: "Rani Roopmati Pavilion" ,
      desc: "Rani Roopmati Pavilion offers stunning views of the Narmada valley and sunsets..",
      images: [
        "/images/Rani/Rani1.jpg",
        "/images/Rani/Rani2.jpg",
        "/images/Rani/Rani3.jpg",
        "/images/Rani/Rani4.jpg",
        "/images/Rani/Rani5.jpg",
      ]
    },

    
 {
      id: 54,
      title: "Baz Bahadur Palace" ,
      desc: "Baz Bahadur Palace is a historic palace linked to the love story of Baz Bahadur and Rani Roopmati..",
      images: [
        "/images/Baz/Baz1.jpg",
        "/images/Baz/Baz2.jpg",
        "/images/Baz/Baz3.jpg",
        "/images/Baz/Baz4.jpg",
        "/images/Baz/Baz5.jpg",
      ]
    },

    
 {
      id: 55,
      title: "Jami Masjid" ,
      desc: "Jami Masjid is a grand mosque inspired by Afghan architecture..",
      images: [
        "/images/Jami/Jami1.jpg",
        "/images/Jami/Jami2.jpg",
        "/images/Jami/Jami3.jpg",
        "/images/Jami/Jami4.jpg",
        "/images/Jami/Jami5.jpg",
      ]
    },

    
 {
      id: 56,
      title: "Hoshang Shahs Tomb" ,
      desc: "Hoshang Shah’s Tomb is India’s first marble mausoleum, famous for its fine craftsmanship..",
      images: [
        "/images/Hoshang/Hoshang1.jpg",
        "/images/Hoshang/Hoshang2.jpg",
        "/images/Hoshang/Hoshang3.jpg",
        "/images/Hoshang/Hoshang4.jpg",
        "/images/Hoshang/Hoshang5.jpg", 
      ]
    },

    
 {
      id: 57,
      title: "Ashrafi Mahal" ,
      desc: "Ashrafi Mahal is a historic madrasa and victory monument near the Jami Masjid..",
      images: [
        "/images/Ashrafi/Ashrafi1.jpg",
        "/images/Ashrafi/Ashrafi2.jpg",
        "/images/Ashrafi/Ashrafi3.jpg",
        "/images/Ashrafi/Ashrafi4.jpg",
        "/images/Ashrafi/Ashrafi5.jpg",
      ]
    },


    
 {
      id: 58,
      title: "Rewa Kund" ,
      desc: "Rewa Kund is a serene reservoir built to supply water to Rani Roopmati Pavilion..",
      images: [
        "/images/Rewa/Rewa1.jpg",
        "/images/Rewa/Rewa2.jpg",
        "/images/Rewa/Rewa3.jpg",
        "/images/Rewa/Rewa4.jpg",
        "/images/Rewa/Rewa5.jpg",
      ]
    },


    
 {
      id: 59,
      title: "Nilkanth Palace" ,
      desc: "Nilkanth Palace is a Mughal-era hunting lodge with scenic surroundings..",
      images: [
        "/images/Nilkanth/Nilkanth1.jpg",
        "/images/Nilkanth/Nilkanth2.jpg",
        "/images/Nilkanth/Nilkanth3.jpg",
        "/images/Nilkanth/Nilkanth4.jpg",
        "/images/Nilkanth/Nilkanth5.jpg",  
      ]
    },


    
 {
      id: 60,
      title: "Echo Point & Sunset Point" ,
      desc: "Echo Point & Sunset Point are popular viewpoints offering natural echoes and beautiful sunsets..",
      images: [
        "/images/Echo/Echo1.jpg",
        "/images/Echo/Echo2.jpg",
        "/images/Echo/Echo3.jpg",
        "/images/Echo/Echo4.jpg",
        "/images/Echo/Echo5.jpg", 
      ]
    },


    
 {
      id: 61,
      title: "Champa Baoli" ,
      desc: "Champa Baoli is an ancient stepwell known for its intricate design and cool interiors..",
      images: [
        "/images/Champa/Champa1.jpg",
        "/images/Champa/Champa2.jpg",
        "/images/Champa/Champa3.jpg",
        "/images/Champa/Champa4.jpg",
        "/images/Champa/Champa5.jpg",
      ]
    },
/*kanha national park */

    
 {
      id: 62,
      title: "Kanha Meadow" ,
      desc: "Kanha Meadow  Bamni Dadar  Mukki Zone Kisli Zone Khatia Gate Shravan Tal.",
      images: [
        "/images/Kanha/Kanha1.jpg",
        "/images/Kanha/Kanha2.jpg",
        "/images/Kanha/Kanha3.jpg",
        "/images/Kanha/Kanha4.jpg",
        "/images/Kanha/Kanha5.jpg",
      ]
    },
 {
      id: 63,
      title: "Bamni Dadar" ,
      desc: "Bamni Dadar is a famous sunset point in Kanha, offering panoramic forest views..",
      images: [
        "/images/Bamni/Bamni1.jpg",
        "/images/Bamni/Bamni2.jpg",
        "/images/Bamni/Bamni3.jpg", 
      ]
    },
 
 {
      id: 64,
      title: "Mukki Zone" ,
      desc: "Mukki Zone is a prime safari zone known for tiger sightings and scenic landscapes..",
      images: [
        "/images/Mukki/Mukki1.jpg",
        "/images/Mukki/Mukki2.jpg",
        "/images/Mukki/Mukki3.jpg",
      ]
    },  
 {
      id: 65,
      title: "Kisli Zone" ,
      desc: "Kisli Zone is a popular entry zone with rich biodiversity and nature trails..",
      images: [
        "/images/Kisli/Kisli1.jpg",
        "/images/Kisli/Kisli2.jpg",
        "/images/Kisli/Kisli3.jpg",
      ]
    },
  
 {
      id: 66,
      title: "Khatia Gate" ,
      desc: "Khatia Gate is the main entrance to Kanha National Park..",
      images: [
        "/images/Khatia/Khatia1.jpg",
        "/images/Khatia/Khatia2.jpg",
        "/images/Khatia/Khatia3.jpg",
      ]
    },  
 {
      id: 67,
      title: "Shravan Tal" ,
      desc: "Shravan Tal is a peaceful lake inside the park, attracting birds and animals..",
      images: [
        "/images/Shravan/Shravan1.jpg",
        "/images/Shravan/Shravan2.jpg",
        "/images/Shravan/Shravan3.jpg",
      ]
    },  
 {
      id: 68,
      title: "Banjar River" ,
      desc: "Banjar River is a scenic river in Kanha, flowing through forests and meadows, often seen during safaris..",
      images: [
        "/images/Banjar/Banjar1.jpg",
        "/images/Banjar/Banjar2.jpg",
        "/images/Banjar/Banjar3.jpg",
        "/images/Banjar/Banjar4.jpg",
        "/images/Banjar/Banjar5.jpg",
      ]
    },


    
 {
      id: 69,
      title: "Kanjiya Lake" ,
      desc: "Kanjiya Lake is a serene waterbody in Kanha National Park, attracting migratory birds and offering peaceful nature views..",
      images: [
        "/images/Kanjiya/Kanjiya1.jpg",
        "/images/Kanjiya/Kanjiya2.jpg",
        "/images/Kanjiya/Kanjiya3.jpg",
        "/images/Kanjiya/Kanjiya4.jpg",
        "/images/Kanjiya/Kanjiya5.jpg", 
      ]
    },

/*sachi stupa*/
    
 {
      id: 70,
      title: "Great Stupa (Stupa No. 1)" ,
      desc: "Great Stupa (Stupa No. 1) is the largest stupa at Sanchi, built by Emperor Ashoka to house relics of Buddha..",
      images: [
        "/images/Stupa1/Stupa1.jpg",
        "/images/Stupa1/Stupa2.jpg",
        "/images/Stupa1/Stupa3.jpg",
        "/images/Stupa1/Stupa4.jpg",
        "/images/Stupa1/Stupa5.jpg",2
      ]
    },



    
 {
      id: 71,
      title: "Great Stupa (Stupa No. 2)" ,
      desc: "Great Stupa (Stupa No. 2) is a smaller stupa at Sanchi, also important for Buddhist worship..",
      images: [
        "/images/Stupa2/Stupa1.jpg",
        "/images/Stupa2/Stupa2.jpg",
        "/images/Stupa2/Stupa3.jpg",
        "/images/Stupa2/Stupa4.jpg",
        "/images/Stupa2/Stupa5.jpg",  
      ]
    },


    
 {
      id: 72,
      title: "Ashoka Pillar" ,
      desc: "Ashoka Pillar is an ancient pillar erected by Emperor Ashoka, symbolizing Buddhist teachings..",
      images: [
        "/images/Ashoka/Ashoka1.jpg",
        "/images/Ashoka/Ashoka2.jpg",
        "/images/Ashoka/Ashoka3.jpg",
        "/images/Ashoka/Ashoka4.jpg",
        "/images/Ashoka/Ashoka5.jpg", 
      ]
    },   
 {
      id: 73,
      title: "Eastern Gateway" ,
      desc: "Eastern Gateway is a beautifully carved entrance to Stupa No. 1, depicting Buddhist stories..",
      images: [
        "/images/Eastern/Eastern1.jpg",
        "/images/Eastern/Eastern2.jpg",
        "/images/Eastern/Eastern3.jpg",
        "/images/Eastern/Eastern4.jpg",
        "/images/Eastern/Eastern5.jpg",  
      ]
    },  
 {
      id: 74,
      title: "Northern Gateway" ,
      desc: "Northern Gateway features intricate carvings of Jataka tales and Buddhist motifs..",
      images: [
        "/images/Northern/Northern1.jpg",
        "/images/Northern/Northern2.jpg",
        "/images/Northern/Northern3.jpg",
      ]
    },  
 {
      id: 75,
      title: "Southern Gateway" ,
      desc: "Southern Gateway is another elaborately decorated entrance to the main stupa..",
      images: [
        "/images/Southern/Southern1.jpg",
        "/images/Southern/Southern2.jpg",
        "/images/Southern/Southern3.jpg", 
      ]
    },   
 {
      id: 76,
      title: "Western Gateway" ,
      desc: "Western Gateway marks the main approach to Stupa No. 1, showcasing detailed sculptures..",
      images: [
        "/images/Western/Western1.jpg",
        "/images/Western/Western2.jpg",
        "/images/Western/Western3.jpg",
        "/images/Western/Western4.jpg",
        "/images/Western/Western5.jpg",
   
      ]
    },   
 {
      id: 77,
      title: "Buddhist Monastery" ,
      desc: "Buddhist Monastery at Sanchi is an ancient structure where monks resided and practiced..",
      images: [
        "/images/Buddhist/Buddhist1.jpg",
        "/images/Buddhist/Buddhist2.jpg",
        "/images/Buddhist/Buddhist3.jpg",
        "/images/Buddhist/Buddhist4.jpg",
        "/images/Buddhist/Buddhist5.jpg",
      ]
    },

    
 {
      id: 78,
      title: "Sanchi Archaeological Museum" ,
      desc: "Sanchi Archaeological Museum displays artifacts, sculptures, and relics from the Sanchi stupas and surrounding sites..",
      images: [
        "/images/Sanchi/Sanchi1.jpg",
        "/images/Sanchi/Sanchi2.jpg",
        "/images/Sanchi/Sanchi3.jpg",
        "/images/Sanchi/Sanchi4.jpg",
        "/images/Sanchi/Sanchi5.jpg",
      ]
    },
 {
      id: 79,
      title: "Narmada Udgam Kund" ,
      desc: "Narmada Udgam Kund is the sacred source of the Narmada River, a holy spot for pilgrims..",
      images: [
        "/images/Narmada/Narmada1.jpg",
        "/images/Narmada/Narmada2.jpg",
        "/images/Narmada/Narmada3.jpg",
        "/images/Narmada/Narmada4.jpg",
        "/images/Narmada/Narmada5.jpg", 
      ]
    },
 {
      id: 80,
      title: "Sonmuda" ,
      desc: "Sonmuda is a scenic hilltop area where the Narmada and Tawa rivers meet, offering panoramic views..",
      images: [
        "/images/Sonmuda/Sonmudas1.jpg",
        "/images/Sonmuda/Sonmudas2.jpg",
        "/images/Sonmuda/Sonmudas3.jpg",
        "/images/Sonmuda/Sonmudas4.jpg",
        "/images/Sonmuda/Sonmudas5.jpg",  
      ]
    },


     {
      id: 81,
      title: "Kapildhara Waterfall" ,
      desc: "Kapildhara Waterfall is a picturesque waterfall named after Sage Kapil, surrounded by lush greenery..",
      images: [
        "/images/Kapildhara/Kapildhara1.jpg",
        "/images/Kapildhara/Kapildhara2.jpg",
        "/images/Kapildhara/Kapildhara3.jpg",
        "/images/Kapildhara/Kapildhara4.jpg",
        "/images/Kapildhara/Kapildhara5.jpg",  
      ]
    },
     {
      id: 82,
      title: "Dudhdhara Waterfall" ,
      desc: "Dudhdhara Waterfall is known for its milky white cascading water and natural beauty..",
      images: [
        "/images/Dudhdhara/Dudhdhara1.jpg",
        "/images/Dudhdhara/Dudhdhara2.jpg",
        "/images/Dudhdhara/Dudhdhara3.jpg",
        "/images/Dudhdhara/Dudhdhara4.jpg",
        "/images/Dudhdhara/Dudhdhara5.jpg",  
      ]
    },



     {
      id: 83,
      title: "Mai Ki Bagiya" ,
      desc: "Mai Ki Bagiya is a tranquil garden with flowering plants and serene surroundings..",
      images: [
        "/images/Mai/Mai1.jpg",
        "/images/Mai/Mai2.jpg",
        "/images/Mai/Mai3.jpg",
        "/images/Mai/Mai4.jpg",
        "/images/Mai/Mai5.jpg",  
      ]
    },
     {
      id: 84,
      title: "Kamakandal Kund" ,
      desc: "Kamakandal Kund is a sacred pond associated with meditation and religious legends..",
      images: [
        "/images/Kamakandal/Kamakandal1.jpg",
        "/images/Kamakandal/Kamakandal2.jpg",
        "/images/Kamakandal/Kamakandal3.jpg",
        "/images/Kamakandal/Kamakandal4.jpg",
        "/images/Kamakandal/Kamakandal5.jpg",  
      ]
    },
     {
      id: 85,
      title: "Shri Yantra Temple" ,
      desc: "Shri Yantra Temple is a spiritual site dedicated to Goddess Tripura Sundari with a mystical yantra..",
      images: [
        "/images/Shri/Shri1.jpg",
        "/images/Shri/Shri2.jpg",
        "/images/Shri/Shri3.jpg",
        "/images/Shri/Shri4.jpg",
        "/images/Shri/Shri5.jpg",  
      ]
    },
     {
      id: 86,
      title: "Kalachuri Temples" ,
      desc: "Kalachuri Temples are historic temples built by the Kalachuri dynasty, showcasing ancient architecture..",
      images: [
        "/images/Kalachuri/Kalachuri1.jpg",
        "/images/Kalachuri/Kalachuri2.jpg",
        "/images/Kalachuri/Kalachuri3.jpg",  
        "/images/Kalachuri/Kalachuri4.jpg",
        "/images/Kalachuri/Kalachuri5.jpg",
      ]
    },
     {
      id: 87,
      title: "Kabir Chabutra" ,
      desc: "Kabir Chabutra is a memorial site honoring the poet-saint Kabir, often visited for reflection and prayer..",
      images: [
        "/images/Kabir/Kabir1.jpg",
        "/images/Kabir/Kabir2.jpg", 
        "/images/Kabir/Kabir3.jpg", 
        "/images/Kabir/Kabir4.jpg", 
        "/images/Kabir/Kabir5.jpg",   
      ]
    },
     {
      id: 88,
      title: "Ramghat" ,
      desc: "Ram Ghat is a sacred riverside ghat in Ramtek, famous for holy dips and rituals..",
      images: [
        "/images/Ramghat/Ramghatr1.jpg",
        "/images/Ramghat/Ramghatr2.jpg",
        "/images/Ramghat/Ramghatr3.jpg",
        "/images/Ramghat/Ramghatr4.jpg",
        "/images/Ramghat/Ramghatr5.jpg",  
      ]
    },



     {
      id: 89,
      title: "Kamadgiri Parikrama" ,
      desc: "Kamadgiri Parikrama is a revered circular pilgrimage around Kamadgiri hill, believed to fulfill devotees’ wishes..",
      images: [
        "/images/Kamadgiri/Kamadgiri1.jpg",
        "/images/Kamadgiri/Kamadgiri2.jpg",
        "/images/Kamadgiri/Kamadgiri3.jpg",
        "/images/Kamadgiri/Kamadgiri4.jpg",  
        "/images/Kamadgiri/Kamadgiri5.jpg",
      ]
    },
     {
      id: 90,
      title: "Hanuman Dhara" ,
      desc: "Hanuman Dhara is a natural spring near a Hanuman temple, known for its spiritual and scenic appeal..",
      images: [
        "/images/Hanuman/Hanuman1.jpg",
        "/images/Hanuman/Hanuman2.jpg", 
        "/images/Hanuman/Hanuman3.jpg",   
        "/images/Hanuman/Hanuman4.jpg", 
        "/images/Hanuman/Hanuman5.jpg", 
      ]
    },
     {
      id: 91,
      title: "Sati Anusuya Ashram" ,
      desc: "Sati Anusuya Ashram is a historic ashram dedicated to the saintly figure Anusuya..",
      images: [
        "/images/Sati/Sati1.jpg",
        "/images/Sati/Sati2.jpg",
        "/images/Sati/Sati3.jpg",
        "/images/Sati/Sati4.jpg",  
        "/images/Sati/Sati5.jpg",
      ]
    },
     {
      id: 92,
      title: "Gupt Godavari" ,
      desc: "Gupt Godavari is an underground cave and temple complex associated with Lord Rama and Goddess Sita..",
      images: [
        "/images/Gupt/Gupt1.jpg",
        "/images/Gupt/Gupt2.jpg",
        "/images/Gupt/Gupt3.jpg",
        "/images/Gupt/Gupt4.jpg",
        "/images/Gupt/Gupt5.jpg",  
      ]
    },
     {
      id: 93,
      title: "Bharat Milap Mandir" ,
      desc: "Bharat Milap Mandir is a temple marking the legendary reunion of Lord Ram and his brother Bharat..",
      images: [
        "/images/Bharat/Bharat1.jpg",
        "/images/Bharat/Bharat2.jpg",
        "/images/Bharat/Bharat3.jpg",  
        "/images/Bharat/Bharat4.jpg",
        "/images/Bharat/Bharat5.jpg",
      ]
    },
     {
      id: 94,
      title: "Janki Kund" ,
      desc: "Janki Kund is a sacred pond linked to Sita (Janki), visited for ritual baths and prayers..",
      images: [
        "/images/Janki/Janki1.jpg",
        "/images/Janki/Janki2.jpg",
        "/images/Janki/Janki3.jpg",
        "/images/Janki/Janki4.jpg",
        "/images/Janki/Janki5.jpg",  
      ]
    },
     {
      id: 95,
      title: "Mandakini River" ,
      desc: "Mandakini River is a holy river flowing through the region, adding natural beauty to the temples..",
      images: [
        "/images/Mandakini/Mandakini1.jpg",
        "/images/Mandakini/Mandakini2.jpg",
        "/images/Mandakini/Mandakini3.jpg",
        "/images/Mandakini/Mandakini4.jpg",  
        "/images/Mandakini/Mandakini5.jpg",
      ]
    },
     {
      id: 96,
      title: "Spatik Shila" ,
      desc: "Spatik Shila is a revered crystal stone associated with spiritual legends of Ramtek..",
      images: [
        "/images/Spatik/Spatik1.jpg",
        "/images/Spatik/Spatik2.jpg",
        "/images/Spatik/Spatik3.jpg",  
        "/images/Spatik/Spatik4.jpg",
        "/images/Spatik/Spatik5.jpg",
      ]
    },


   

     {
      id: 98,
      title: "Gwalior Fort" ,
      desc: "Gwalior Fort is a historic hill fort known for its palaces, temples, and architectural grandeur..",
      images: [
        "/images/Gwalior/Gwalior1.jpg",
        "/images/Gwalior/Gwalior2.jpg",
        "/images/Gwalior/Gwalior3.jpg",
        "/images/Gwalior/Gwalior4.jpg",
        "/images/Gwalior/Gwalior5.jpg",  
      ]
    },
     
    {
      id: 99,
      title: "Man Singh Palace" ,
      desc: "Man Singh Palace is a royal palace inside Gwalior Fort, famous for its intricate carvings and historic significance..",
      images: [
        "/images/Man/Man1.jpg",
        "/images/Man/Man2.jpg",
        "/images/Man/Man3.jpg",  
        "/images/Man/Man4.jpg",
        "/images/Man/Man5.jpg",

      ]
    },

     {
      id: 100,
      title: "Saas Bahu Temple" ,
      desc: "Saas Bahu Temple is an ancient temple complex in Gwalior, known for its intricate carvings..",
      images: [
        "/images/Saas/Saas1.jpg",
        "/images/Saas/Saas2.jpg",
        "/images/Saas/Saas3.jpg",
        "/images/Saas/Saas4.jpg",  
        "/images/Saas/Saas5.jpg",
      ]
    },
     {
      id: 101,
      title: "Teli Ka Mandi" ,
      desc: "Teli Ka Mandir is a unique temple in Gwalior Fort, blending northern and southern architectural styles..",
      images: [
        "/images/Teli/Teli1.jpg",
        "/images/Teli/Teli2.jpg",
        "/images/Teli/Teli3.jpg",  
        "/images/Teli/Teli4.jpg",
        "/images/Teli/Teli5.jpg",
      ]
    },
     {
      id: 102,
      title: "Gujari Mahal" ,
      desc: "Gujari Mahal is a museum and former palace, showcasing sculptures and historical artifacts..",
      images: [
        "/images/Gujari/Gujari1.jpg",
        "/images/Gujari/Gujari2.jpg",
        "/images/Gujari/Gujari3.jpg",
        "/images/Gujari/Gujari4.jpg",
        "/images/Gujari/Gujari5.jpg",
      ]
    },
     {
      id: 103,
      title: "Jai Vilas Palace" ,
      desc: "Jai Vilas Palace is a grand palace of the Scindia dynasty, famous for its opulent interiors..",
      images: [
        "/images/Jai/Jai1.jpg",  
        "/images/Jai/Jai2.jpg",  
        "/images/Jai/Jai3.jpg",
        "/images/Jai/Jai4.jpg",
        "/images/Jai/Jai5.jpg",  
      ]
    },
     {
      id: 104,
      title: "Sun Temple" ,
      desc: "Sun Temple is a historic temple dedicated to Surya, the Sun God..",
      images: [
        "/images/Sun/Sun1.jpg",
        "/images/Sun/Sun2.jpg",
        "/images/Sun/Sun3.jpg",
        "/images/Sun/Sun4.jpg",
        "/images/Sun/Sun5.jpg",

      ]
    },
     {
      id: 105,
      title: "Tomb of Tansen" ,
      desc: "Tomb of Tansen honors the legendary musician of Akbar’s court, located in Gwalior..",
      images: [
        "/images/Tomb/Tomb1.jpg",
        "/images/Tomb/Tomb2.jpg", 
        "/images/Tomb/Tomb3.jpg", 
        "/images/Tomb/Tomb4.jpg", 
        "/images/Tomb/Tomb5.jpg",   
      ]
    },
     {
      id: 106,
      title: "Gopachal Jain Parvat" ,
      desc: "Gopachal Jain Parvat is a hill featuring large Jain rock-cut statues and temples..",
      images: [
        "/images/Gopachal/Gopachal1.jpg",
        "/images/Gopachal/Gopachal2.jpg",
        "/images/Gopachal/Gopachal3.jpg",
        "/images/Gopachal/Gopachal4.jpg",
        "/images/Gopachal/Gopachal5.jpg",  
      ]
    },
     {
      id: 107,
      title: "Italian Garden" ,
      desc: "Italian Garden is a beautifully landscaped garden in Gwalior with fountains and floral displays..",
      images: [
        "/images/italian/italian1.jpg",
        "/images/italian/italian2.jpg",
        "/images/italian/italian3.jpg",
        "/images/italian/italian4.jpg",
        "/images/italian/italian5.jpg",
      ]
    },
     {
      id: 108,
      title: "Rajwada Palace" ,
      desc: "Rajwada Palace is a historic royal residence, showcasing Maratha architectural style..",
      images: [
        "/images/Rajwada/Rajwada1.jpg",
        "/images/Rajwada/Rajwada2.jpg",
        "/images/Rajwada/Rajwada3.jpg",
        "/images/Rajwada/Rajwada4.jpg",
        "/images/Rajwada/Rajwada5.jpg",  
      ]
    },
     {
      id: 109,
      title: "Lal Bagh Palace" ,
      desc: "Lal Bagh Palace is a luxurious palace with elegant rooms and rich history..",
      images: [
        "/images/Lal/Lal1.jpg",
        "/images/Lal/Lal2.jpg",
        "/images/Lal/Lal3.jpg",
        "/images/Lal/Lal4.jpg",
        "/images/Lal/Lal5.jpg",  
      ]
    },
     {
      id: 110,
      title: "Khajrana Ganesh Mandir" ,
      desc: "Khajrana Ganesh Mandir is a famous temple dedicated to Lord Ganesha, attracting devotees..",
      images: [
        "/images/Khajrana/Khajrana1.jpg",
        "/images/Khajrana/Khajrana2.jpg",
        "/images/Khajrana/Khajrana3.jpg",
        "/images/Khajrana/Khajrana4.jpg",
        "/images/Khajrana/Khajrana5.jpg",  
      ]
    },

     {
      id: 111,
      title: "Annapurna Temple" ,
      desc: "Annapurna Temple is a popular temple in Gwalior dedicated to Goddess Annapurna..",
      images: [
        "/images/Annapurna/Annapurna1.jpg",
        "/images/Annapurna/Annapurna2.jpg",
        "/images/Annapurna/Annapurna3.jpg",
        "/images/Annapurna/Annapurna4.jpg",  
        "/images/Annapurna/Annapurna5.jpg",
      ]
    },

     {
      id: 112,
      title: "Chhappan Dukan" ,
      desc: "Chhappan Dukan is a traditional shopping street known for local snacks and shops..",
      images: [
        "/images/Chhappan/Chhappan1.jpg",
        "/images/Chhappan/Chhappan2.jpg",
        "/images/Chhappan/Chhappan3.jpg",  
        "/images/Chhappan/Chhappan4.jpg",
        "/images/Chhappan/Chhappan5.jpg",
      ]
    },

     {
      id: 113,
      title: "Patalpani Waterfall" ,
      desc: "Patalpani Waterfall is a scenic waterfall near Gwalior, surrounded by lush greenery..",
      images: [
        "/images/Patalpani/Patalpani1.jpg",
        "/images/Patalpani/Patalpani2.jpg",
        "/images/Patalpani/Patalpani3.jpg",  
        "/images/Patalpani/Patalpani4.jpg",
        "/images/Patalpani/Patalpani5.jpg",
      ]
    },
     {
      id: 114,
      title: "Ralamandal Wildlife Sanctuary" ,
      desc: "Ralamandal Wildlife Sanctuary is a forest reserve known for its wildlife and trekking trails..",
      images: [
        "/images/Ralamandal/Ralamandal1.jpg",
        "/images/Ralamandal/Ralamandal2.jpg",
        "/images/Ralamandal/Ralamandal3.jpg",
        "/images/Ralamandal/Ralamandal4.jpg",
        "/images/Ralamandal/Ralamandal5.jpg",
        
      ]
    },

     {
      id: 115,
      title: "Gandhi Hall" ,
      desc: "Gandhi Hall is a historic building used for exhibitions, cultural events, and public gatherings..",
      images: [
        "/images/Gandhi/Gandhi1.jpg",
        "/images/Gandhi/Gandhi2.jpg",
        "/images/Gandhi/Gandhi3.jpg",
        "/images/Gandhi/Gandhi4.jpg",
        "/images/Gandhi/Gandhi5.jpg",
        
      ]
    },

     {
      id: 116,
      title: "Central Museum" ,
      desc: "Central Museum (Madhya Pradesh State Museum, Bhopal) displays artifacts of art, history, and culture of the region..",
      images: [
        "/images/Central/Central1.jpg",
        "/images/Central/Central2.jpg",
        "/images/Central/Central3.jpg",
        "/images/Central/Central4.jpg",
        "/images/Central/Central5.jpg",

      ]
    },

     {
      id: 117,
      title: "Madan Mahal Fort" ,
      desc: "Madan Mahal Fort is a historic hilltop fort in Jabalpur, known for its panoramic views..",
      images: [
        "/images/Madan/Madan1.jpg",
        "/images/Madan/Madan2.jpg",
        "/images/Madan/Madan3.jpg",
        "/images/Madan/Madan4.jpg",
        "/images/Madan/Madan5.jpg",  
      ]
    },
     {
      id: 118,
      title: "Rani Durgavati Museum" ,
      desc: "Rani Durgavati Museum honors the valor of Queen Durgavati and exhibits sculptures, weapons, and artifacts..",
      images: [
        "/images/Rani/Rani1.jpg",
        "/images/Rani/Rani2.jpg",
        "/images/Rani/Rani3.jpg",  
        "/images/Rani/Rani4.jpg",
        "/images/Rani/Rani5.jpg",
      ]
    },

     {
      id: 119,
      title: "Balancing Rocks" ,
      desc: "Balancing Rocks are natural rock formations in Jabalpur, appearing to defy gravity..",
      images: [
        "/images/Balancing/Balancing1.jpg",
        "/images/Balancing/Balancing2.jpg",
        "/images/Balancing/Balancing3.jpg",  
        "/images/Balancing/Balancing4.jpg",
        "/images/Balancing/Balancing5.jpg",
      ]
    },

    {
      id: 120,
      title: "Bargi Dam" ,
      desc: "Bargi Dam is a large dam and reservoir on the Narmada River, popular for boating and picnics..",
      images: [
        "/images/Bargi/Bargi1.jpg",
        "/images/Bargi/Bargi2.jpg",
        "/images/Bargi/Bargi3.jpg",
        "/images/Bargi/Bargi4.jpg",
        "/images/Bargi/Bargi5.jpg",
       
      ]
    },

     {
      id: 121,
      title: "Gwarighat" ,
      desc: "Gwarighat is a sacred ghat on the Narmada River, known for rituals and cremation ceremonies..",
      images: [
        "/images/Gwarighat/Gwarighatg1.jpg",
        "/images/Gwarighat/Gwarighatg2.jpg",
        "/images/Gwarighat/Gwarighatg3.jpg",
        "/images/Gwarighat/Gwarighatg4.jpg",
        "/images/Gwarighat/Gwarighatg5.jpg",
       
      ]
    },

     {
      id: 122,
      title: "Tilwara Ghat" ,
      desc: "Tilwara Ghat is a historic riverside ghat with temples and scenic views..",
      images: [
        "/images/Tilwara/Tilwara1.jpg",
        "/images/Tilwara/Tilwara2.jpg",
        "/images/Tilwara/Tilwara3.jpg",
        "/images/Tilwara/Tilwara4.jpg",
        "/images/Tilwara/Tilwara5.jpg",
       
      ]
    },

     {
      id: 123,
      title: "Upper Lake" ,
      desc: "Upper Lake (Bada Talab) is a large artificial lake in Bhopal, ideal for boating and birdwatching..",
      images: [
        "/images/Upper/Upper1.jpg",
        "/images/Upper/Upper2.jpg",
        "/images/Upper/Upper3.jpg",
        "/images/Upper/Upper4.jpg",
        "/images/Upper/Upper5.jpg",
       
      ]
    },

     {
      id: 124,
      title: "Lower Lake" ,
      desc: "Lower Lake (Chhota Talab) is connected to Upper Lake, adding to Bhopal’s scenic water bodies..",
      images: [
        "/images/Lower/Lower1.jpg",
        "/images/Lower/Lower2.jpg",
        "/images/Lower/Lower3.jpg",
        "/images/Lower/Lower4.jpg",
        "/images/Lower/Lower5.jpg",
       
      ]
    },


     {
      id: 125,
      title: "Van Vihar National Park" ,
      desc: "Van Vihar National Park is a wildlife sanctuary in Bhopal, home to tigers, leopards, and other animals..",
      images: [
        "/images/Vanbhopal/Vanbhopalv1.jpg",
        "/images/Vanbhopal/Vanbhopalv2.jpg",
        "/images/Vanbhopal/Vanbhopalv3.jpg",
        "/images/Vanbhopal/Vanbhopalv4.jpg",
        "/images/Vanbhopal/Vanbhopalv5.jpg",
       
      ]
    },


     {
      id: 126,
      title: "Taj-ul-Masajid" ,
      desc: "Taj-ul-Masajid is one of India’s largest mosques, famous for its impressive architecture..",
      images: [
        "/images/Taj-ul-Masajid/Taj-ul-Masajidt1.jpg",
        "/images/Taj-ul-Masajid/Taj-ul-Masajidt2.jpg",
        "/images/Taj-ul-Masajid/Taj-ul-Masajidt3.jpg",
        "/images/Taj-ul-Masajid/Taj-ul-Masajidt4.jpg",
        "/images/Taj-ul-Masajid/Taj-ul-Masajidt5.jpg",
       
      ]
    },


     {
      id: 127,
      title: "Bharat Bhavan" ,
      desc: "Bharat Bhavan is a multi-arts complex in Bhopal, showcasing art, theatre, and cultural events..",
      images: [
        "/images/Bharat/Bharat1.jpg",
        "/images/Bharat/Bharat2.jpg",
        "/images/Bharat/Bharat3.jpg",
        "/images/Bharat/Bharat4.jpg",
        "/images/Bharat/Bharat5.jpg",
       
      ]
    },


     {
      id: 128,
      title: "Indira Gandhi Rashtiriya Manav Sangrahala" ,
      desc: "Indira Gandhi Rashtriya Manav Sangrahalaya is an anthropological museum in Bhopal displaying tribal and folk heritage..",
      images: [
        "/images/indirabhopal/indirabhopalb1.jpg",
        "/images/indirabhopal/indirabhopalb2.jpg",
        "/images/indirabhopal/indirabhopalb3.jpg",
        "/images/indirabhopal/indirabhopalb4.jpg",
        "/images/indirabhopal/indirabhopalb5.jpg",
      
       
      ]
    },



     {
      id: 129,
      title: "Shaukat Mahal" ,
      desc: "Shaukat Mahal is a historic palace in Bhopal with a unique blend of Gothic and Islamic architecture..",
      images: [
        "/images/Shaukat/Shaukat1.jpg",
        "/images/Shaukat/Shaukat2.jpg",
        "/images/Shaukat/Shaukat3.jpg",
        "/images/Shaukat/Shaukat4.jpg",
        "/images/Shaukat/Shaukat5.jpg",
       
      ]
    },
     {
      id: 130,
      title: "Sadar Manzil " ,
      desc: "Sadar Manzil is a historic administrative building in Bhopal..",
      images: [
        "/images/Sadar/Sadar1.jpg",
        "/images/Sadar/Sadar2.jpg",
        "/images/Sadar/Sadar3.jpg",
        "/images/Sadar/Sadar4.jpg",
        "/images/Sadar/Sadar5.jpg",
       
      ]
    },


     {
      id: 131,
      title: "Birla Mandir" ,
      desc: "Birla Mandir is a modern temple dedicated to Lord Vishnu and Goddess Lakshmi, known for its white marble..",
      images: [
        "/images/Birla/Birla1.jpg",
        "/images/Birla/Birla2.jpg",
        "/images/Birla/Birla3.jpg",
        "/images/Birla/Birla4.jpg",
        "/images/Birla/Birla5.jpg",
       
      ]
    },



     {
      id: 132,
      title: "State Museum" ,
      desc: "State Museum (Bhopal) showcases Madhya Pradesh’s history, art, and archaeology. ",
      images: [
        "/images/State-Museumbhopal/State-Museumbhopals1.jpg",
        "/images/State-Museumbhopal/State-Museumbhopals2.jpg",
        "/images/State-Museumbhopal/State-Museumbhopals3.jpg",
        "/images/State-Museumbhopal/State-Museumbhopals4.jpg",
        "/images/State-Museumbhopal/State-Museumbhopals5.jpg",

      ]
    },


  
  ];

  // ======================
  // 6-6 CARDS + MANUAL HEADINGS
  // ======================
  const sections = [
    {
      heading: "⛰️ Pachmarhi Top Mountains",
      items: cardData.slice(0, 6)
    },

   {
       heading: "Bhedghat nature of beuty ",
      items: cardData.slice(6, 11)
     },

     {
       heading: "Ujjain Mahakal ",
      items: cardData.slice(11, 19)
     },

     {
       heading: "Omkareshwar ",
      items: cardData.slice(19, 29)
     },


     {
       heading: "Khajuraho ",
      items: cardData.slice(29, 40)
     },


      {
       heading: "Orchha ",
      items: cardData.slice(40, 50)
     },

      {
       heading: "Mandhu ",
      items: cardData.slice(50, 61)
     },

    


      {
       heading: "Kanha National Park",
      items: cardData.slice(61, 69)
     },


     {
       heading: "Sachi Stupa",
      items: cardData.slice(69, 78)
     },


      {
       heading: "Amarkantak",
      items: cardData.slice(78, 87)
     },


     {
       heading: "Chirakoot",
      items: cardData.slice(87, 97)
     },


     {
       heading: "Gwalior",
      items: cardData.slice(97, 107)
     },

     {
       heading: "Indore",
      items: cardData.slice(107, 116)
     },

     {
       heading: "Jabalpur",
      items: cardData.slice(116, 122)
     },


     {
       heading: "Bhopal",
      items: cardData.slice(122, 132)
     },






  ];


// SEARCH FILTER
  // ======================
  const filteredSections = sections
  .map(section => {
    const sectionMatch = section.heading
      .toLowerCase()
      .includes(search.toLowerCase());

    return {
      ...section,
      items: sectionMatch
        ? section.items // ✅ poora section show
        : section.items.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
    };
  })
  .filter(section => section.items.length > 0);


  return (
    <div className="  px-4 sm:px-6 lg:px-12 space-y-16">







      {/* 🔍 SEARCH BAR */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 border rounded-xl shadow focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* SECTIONS */}
      {filteredSections.map((section, index) => (
        <div key={index}>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-center mb-8
bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
text-transparent bg-clip-text hover:scale-105 transition duration-300">
  {section.heading}
</h1>




            

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {section.items.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >



                <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                   {item.images.map((img, i) => (
                     <img
                     key={i}
                     src={img}
                     alt={`${item.title}-${i}`}
                      className="w-full h-56 object-cover flex-shrink-0 snap-center"
                       />
                        ))}
                        </div>

                







                <div className="p-4">
                  <h2 className="text-lg font-bold text-center">{item.title}</h2>
                  <p className="text-gray-600 text-sm text-center mb-4">{item.desc}</p>

                  <button
                    onClick={() => navigate(`/info/${item.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                  >
                    View Information
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
