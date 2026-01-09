import React from "react";
import { useParams } from "react-router-dom";

export default function Info() {

  const { id } = useParams();
 
  const infoData = {
      "1": {
      title: "Doopghar",
      subtitle: "Highest Peak of Pachmarhi – Breathtaking sunrise & sunset views with 360° panorama of Satpura Hills",
      desc: "Dhoopgarh, located in Pachmarhi, Madhya Pradesh, is the highest peak of the Satpura Hills at approximately 1,350 meters (4,429 ft). It is famous for its breathtaking sunrise and sunset views and offers a 360° panoramic view of the surrounding hills, forests, and valleys, making it ideal for trekking, photography, and nature lovers. Visitors can reach the peak by a 1–2 hour trek from Pachmarhi town, or partially by vehicle followed by a short trek. The best time to visit is from October to March, especially for sunrise. Nearby attractions include Bee Falls, Pandav Caves, and the Satpura Tiger Reserve. Travelers are advised to carry water, snacks, wear comfortable trekking shoes, dress in layers for the early morning chill, start early for the sunrise, keep the area clean, and carry a camera or binoculars to enjoy the views and wildlife."
     
    
    },
    "2": {
      title: "Bee-Fall",
      subtitle: "Scenic Waterfall – Crystal-clear waterfall in lush forests, ideal for trekking, swimming & photographyt",
      desc: "Bee Falls Pachmarhi ka ek khoobsurat waterfall hai jo dense forests ke beech sthit hai. Ye waterfall kaafi high aur scenic hai, jahan ka pani crystal clear aur fresh hota hai. Yahan pahunchne ke liye chhota trek karna padta hai, jo lagbhag 15–20 minutes ka hai. Falls ke aas-pass picnic spots hain aur photography ke liye ye jagah perfect hai. Swimming aur water play allowed hai, lekin safety dhyan me rakhein. Best visiting time monsoon ke baad aur October–March hota hai, jab water flow accha hota hai aur surrounding greenery bahut sundar lagti hai."
    },



    "3": {
      title: "Handi-khoh",
      subtitle: "Deep Gorge Adventure – A natural gorge offering panoramic views and thrilling trekking experience",
      desc:"Handi Khoh Pachmarhi ka ek deep gorge hai jo adventure aur nature lovers ke liye perfect jagah hai. Yahan se neeche ghaati ka panoramic view milta hai jo sunrise aur sunset dono ke liye ideal hai. Trek yahan thoda challenging ho sakta hai, isliye comfortable shoes aur water bottle saath le jaayen. Yahan ka natural beauty aur rocky cliffs photography aur adventure trekking ke liye popular hai. Handi Khoh ka area largely untouched aur peaceful hai, isliye nature enthusiasts ko yahan kaafi sukoon milta hai."
    },

    "4": {
      title: "Jatashankar",
      subtitle: "Spiritual Retreat – Ancient Shiva cave with natural stalactite-stalagmite formations and peaceful surroundings",
      desc:"Jatashankar Cave ek religious aur historical site hai jo Pachmarhi me sthit hai. Ye cave Shiva temple ke roop me prasiddh hai aur yahan Shivling sthapit hai. Cave ke andar ka natural formation aur stalactites–stalagmites ka structure bahut hi interesting hai. Visitors yahan meditation aur religious rituals ke liye aate hain. Cave ke aas-pass ka environment serene aur peaceful hai, aur ye jagah history aur spirituality dono ka combination provide karti hai. Best time visit ke liye morning ya evening ideal hai, kyunki temperature mild aur surroundings photogenic hote hain."
    },
      "5": {
      title: "Pandava Caves",
      subtitle: "Historic Rock-Cut Caves – Ancient monk caves with fascinating carvings and serene environment amidst forests",
      desc:"Pandav Caves Pachmarhi ke historical aur archaeological importance wale rock-cut caves hai. Ye caves ancient monks aur sages dwara use kiye gaye the aur kaafi purane carvings aur inscriptions yahan mile hain. Caves ka architecture simple lekin fascinating hai, aur ye nature ke beech me sthit hai, jahan ka environment peaceful aur refreshing hai. Trek karke yahan pahunchna thoda adventurous hai, aur photography aur historical study ke liye ye jagah ideal hai. Visiting time October–March best mana jata hai."
    },
       "6": {
      title: "Satpura National Park",
      subtitle: "Wildlife Sanctuary – Protected forest area home to tigers, leopards, birds & other wildlife, ideal for safari & nature trekking",
      desc:"Satpura Tiger Reserve Pachmarhi ke paas sthit ek major wildlife sanctuary hai. Yahan aapko tigers, leopards, wild boars, deers, and exotic birds dekhne ko milte hain. Reserve ka area kaafi bada aur forested hai, aur yahan safari aur guided nature tours available hote hain. Wildlife photography aur trekking ke liye ye jagah perfect hai. Safety aur rules ka dhyan rakhein, kyunki ye protected area hai. Best visiting time October–March hai, aur early morning safari kaafi popular hai wildlife spotting ke liye."
    },


/*bhedghat*///


      "7": {
      title: "Marble Rocks, Bhedaghat",
      subtitle: "Spectacular white marble cliffs carved by the Narmada River",
      desc:"Marble Rocks is the most famous attraction of Bhedaghat and one of the natural wonders of Madhya Pradesh. This place is known for its massive white marble cliffs that rise steeply on both sides of the Narmada River. Over thousands of years, the river has beautifully carved these rocks into unique shapes, creating a stunning natural corridor.As sunlight falls on the marble surfaces, the rocks reflect different colors such as white, golden, and pink, making the view truly mesmerizing. A boat ride through the Marble Rocks allows visitors to experience the beauty of these cliffs from close range. The peaceful flow of the river combined with the towering marble walls creates a calm and unforgettable atmosphere for visitors and photographers."
    },

     "8": {
      title: "Dhuandhar Waterfall",
      subtitle: "A powerful waterfall of the Narmada River creating mist and thunderous sound",
      desc:"Dhuandhar Waterfall is one of the most powerful and dramatic waterfalls in central India. Located near the Marble Rocks, this waterfall is formed when the Narmada River plunges down with great force over rocky terrain. The crashing water creates a thick mist that rises like smoke, which is why it is called “Dhuandhar,” meaning flow of smoke.During the monsoon season, the waterfall becomes even more spectacular, with roaring sound and heavy water flow that can be heard from a distance. Viewing platforms and nearby walkways allow visitors to safely enjoy the breathtaking sight and capture memorable photographs."
    },


    "9": {
      title: "Chausath Yogini Temple",
      subtitle: "An ancient hilltop temple with spiritual and historical significance",
      desc:"The Chausath Yogini Temple is an ancient Hindu temple believed to have been built in the 10th century. It is dedicated to the 64 Yoginis and is located on a hilltop near the Narmada River. Visitors need to climb stone steps to reach the temple, but the effort is rewarded with stunning panoramic views of the river and Marble Rocks.The temple is an important religious site and a fine example of early Indian temple architecture. It attracts devotees, historians, and travelers who are interested in spirituality, culture, and ancient heritage. The peaceful environment of the temple adds to its charm and spiritual aura."
    },




    "10": {
      title: "Bhedaghat Cable Car (Ropeway)",
      subtitle: "An aerial view of Dhuandhar Waterfall and the Narmada River",
      desc:"The cable car at Bhedaghat provides a thrilling experience and a bird’s-eye view of the surrounding natural beauty. It connects the Marble Rocks area to the Dhuandhar Waterfall side, allowing visitors to enjoy breathtaking aerial views of the river, waterfall, and greenery.This ropeway ride is safe, enjoyable, and suitable for all age groups. It is especially popular among tourists who want to capture panoramic photographs and experience Bhedaghat from a different perspective."
    },

    "11": {
      title: "Boat Ride on the Narmada River",
      subtitle: "A scenic boating experience between towering marble cliffs",
      desc:"Boating at Bhedaghat is a must-do activity for every visitor. The boat ride takes tourists through the narrow stretch of the Narmada River surrounded by tall marble cliffs on both sides. The calm water, echoing sounds, and natural rock formations make the experience truly magical.Moonlight boating is especially popular, as the marble rocks glow under the soft light of the moon, creating a dreamlike scene. This boat ride offers a unique way to explore the natural beauty of Bhedaghat and enjoy the serenity of the river."
    },

/*ujjain mahakak*/



    "12": {
      title: "Shri Mahakaleshwar Jyotirlinga, Ujjain",
      subtitle: "One of the twelve sacred Jyotirlingas of Lord Shiva and a major spiritual center of India",
      desc:"Shri Mahakaleshwar Jyotirlinga is one of the most sacred Hindu temples and one of the twelve Jyotirlingas dedicated to Lord Shiva. Located in the holy city of Ujjain, Madhya Pradesh, this temple holds immense religious and spiritual significance. Lord Mahakal is worshipped here as the God of Time (Kaal), and it is believed that he protects the entire universe.The unique feature of this temple is that the Shiva Lingam is Swayambhu, meaning self-manifested. The temple is especially famous for its Bhasma Aarti, a divine ritual performed early in the morning using sacred ash. Devotees from all over India and abroad visit Mahakaleshwar to seek blessings, peace, and spiritual enlightenment."
    },



    "13": {
      title: "Harsiddhi Temple",
      subtitle: "One of the 51 Shakti Peethas dedicated to Goddess Durga",
      desc:"Harsiddhi Temple is a highly revered Shakti Peetha in Ujjain, dedicated to Goddess Annapurna and Mahalakshmi. According to Hindu beliefs, a part of Goddess Sati fell at this place, making it a powerful center of Shakti worship.The temple is especially beautiful during evening hours when its two tall oil lamps are lit, creating a divine and serene atmosphere. Devotees visit Harsiddhi Temple to seek strength, prosperity, and protection."
    },



    "14": {
      title: "Kal Bhairav Temple",
      subtitle: "A unique temple where liquor is offered as a sacred offering",
      desc:"Kal Bhairav Temple is one of the most unique and mysterious temples in Ujjain. Dedicated to Lord Kal Bhairav, a fierce form of Lord Shiva, this temple is famous for its unusual tradition of offering liquor as Prasad. Devotees believe that Lord Kal Bhairav accepts the offering and fulfills their wishes.The temple holds deep tantric and spiritual importance and attracts thousands of devotees daily. Its ancient architecture and powerful spiritual aura make it an important stop for pilgrims visiting Ujjain."
    },



    "15": {
      title: "Gopal Mandir, Ujjain",
      subtitle: "A historic Krishna temple built in Maratha architectural style",
      desc:"Gopal Mandir is a famous and beautiful temple in Ujjain dedicated to Lord Krishna. This temple was built in the 19th century by Maharani Bayajibai Shinde of the Scindia dynasty. The temple is well known for its impressive Maratha-style architecture and its silver-plated doors, which were once taken from the Somnath Temple and later brought back to India.The temple is located near the main market area, making it easily accessible for devotees and tourists. Inside the temple, the idol of Lord Krishna is worshipped in a peaceful and devotional atmosphere. Gopal Mandir is especially crowded during festivals like Janmashtami and attracts devotees who seek blessings, peace, and spiritual joy."
    },



    "16": {
      title: "Ram Ghat, Ujjain",
      subtitle: "A holy bathing ghat on the banks of the Shipra River",
      desc:"Ram Ghat is the most important and sacred ghat in Ujjain, situated on the banks of the holy Shipra River. It is believed that taking a holy dip in the river at Ram Ghat cleanses sins and brings spiritual purity. This ghat plays a central role during the Simhastha Kumbh Mela, one of the largest religious gatherings in the world.Every evening, Ram Ghat comes alive with spiritual energy during the Shipra Aarti, where lamps, chants, and devotional songs create a peaceful and divine atmosphere. The sight of thousands of floating lamps on the river leaves a lasting impression on visitors."
    },

    "17": {
      title: "Sandipani Ashram",
      subtitle: "The sacred place where Lord Krishna received his education",
      desc:"Sandipani Ashram is a peaceful and holy place believed to be the site where Lord Krishna, along with Sudama and Balarama, studied under Guru Sandipani. Located near the Shipra River, the ashram is an important spiritual and educational landmark in Ujjain.The ashram has a calm environment, making it an ideal place for meditation and reflection. Devotees and tourists visit this place to connect with ancient Indian culture, values, and spiritual wisdom."
    },

    "18": {
      title: "Vedh Shala (Jantar Mantar), Ujjain",
      subtitle: "An ancient astronomical observatory built for studying celestial movements",
      desc:"Vedh Shala, also known as Jantar Mantar, is an ancient astronomical observatory built by Maharaja Jai Singh II in the 18th century. Ujjain was considered the prime meridian of ancient Indian astronomy, making this site extremely important for scientific studies.The observatory houses large stone instruments used to measure time, planetary positions, and celestial events. Vedh Shala attracts history lovers, science enthusiasts, and students who are curious about India’s rich scientific heritage."
    },

    "19": {
      title: "Bade Ganesh Mandir, Ujjain",
      subtitle: "Home to a massive idol of Lord Ganesha near Mahakaleshwar Temple",
      desc:"Bade Ganesh Mandir is one of the most popular temples in Ujjain and is located close to the Mahakaleshwar Temple complex. The temple is famous for its large and colorful idol of Lord Ganesha, which is believed to be one of the biggest Ganesha idols in the region.Devotees visit Bade Ganesh Mandir to seek wisdom, success, and removal of obstacles before starting any important work. The temple has a vibrant and lively atmosphere, especially during Ganesh Chaturthi and other festivals. Due to its close proximity to Mahakaleshwar, it is often included in the pilgrimage route of visitors to Ujjain."
    },

/*omkarashwer*/

    "20": {
      title: "Shri Omkareshwar Jyotirlinga, Omkareshwar",
      subtitle: "One of the twelve sacred Jyotirlingas of Lord Shiva, located on the holy Narmada River",
      desc:"Shri Omkareshwar Jyotirlinga is one of the twelve most sacred Jyotirlingas of Lord Shiva in India. The temple is situated on Mandhata Island in the Narmada River, and the shape of the island resembles the sacred symbol “Om,” giving the place its divine name. Omkareshwar is a major pilgrimage destination and attracts millions of devotees every year.The temple showcases beautiful ancient architecture and offers a deeply spiritual atmosphere. Devotees believe that worshipping Lord Shiva here brings peace, prosperity, and liberation from worldly troubles. The sacred surroundings of the Narmada River add to the spiritual charm of this holy place."
    },


    
    "21": {
      title: "Mamleshwar (Amareshwar) Temple",
      subtitle: "The second Jyotirlinga shrine representing Lord Shiva on the banks of the Narmada",
      desc: "Mamleshwar Temple, also known as Amareshwar Temple, is located on the southern bank of the Narmada River, opposite the Omkareshwar Temple. According to religious beliefs, the Jyotirlinga of Omkareshwar is divided between Omkareshwar and Mamleshwar, making both temples equally sacred.This ancient temple is known for its peaceful environment and detailed stone carvings. Many pilgrims complete their Omkareshwar pilgrimage only after visiting Mamleshwar Temple, as it is believed that worship at both shrines fulfills the spiritual journey."
    },


    
    "22": {
      title: "Narmada Ghat, Omkareshwar",
      subtitle: "A sacred riverfront for holy baths, rituals, and evening aarti",
      desc:"Narmada Ghat is a spiritually significant place where devotees gather to take a holy dip in the Narmada River. It is believed that bathing here purifies the soul and washes away sins. The ghats are active throughout the day with prayers, offerings, and religious rituals.In the evening, the Narmada Aarti creates a peaceful and divine atmosphere. The glow of oil lamps, rhythmic chants, and reflections on the flowing river make Narmada Ghat one of the most serene places in Omkareshwar."
    },



    
    "23": {
      title: "Siddhanath Temple",
      subtitle: "An ancient temple known for its exquisite stone carvings",
      desc:"Siddhanath Temple is one of the oldest temples in Omkareshwar and is renowned for its beautifully carved pillars and detailed sculptures. The temple reflects the rich architectural heritage of medieval India and attracts devotees as well as history lovers.The peaceful surroundings of the temple make it an ideal place for meditation and quiet worship. Its artistic beauty and spiritual significance make Siddhanath Temple a hidden gem of Omkareshwar."
    },



    
    "24": {
      title: "24 Avtar Parikrama Path",
      subtitle: "A sacred circumambulation path with temples dedicated to 24 incarnations",
      desc:"The 24 Avtar Parikrama Path is an important spiritual route around Mandhata Island. Along this path, devotees encounter temples dedicated to the 24 incarnations (Avatars) of Lord Vishnu, making the parikrama both spiritually enriching and culturally significant.Pilgrims walk this path as an act of devotion, believing that completing the parikrama brings divine blessings, inner peace, and spiritual merit. The route offers beautiful views of the Narmada River and surrounding hills."
    },


    
    "25": {
      title: "Omkar Parvat",
      subtitle: "A sacred hill offering panoramic views of Omkareshwar and the Narmada River",
      desc:"Omkar Parvat is a spiritually important hill in Omkareshwar, believed to enhance the divine energy of the region. From the top of the hill, visitors can enjoy breathtaking panoramic views of Mandhata Island, temples, and the flowing Narmada River.The calm and elevated location makes Omkar Parvat ideal for meditation, photography, and spiritual reflection. It is especially beautiful during sunrise and sunset, when the landscape appears peaceful and divine."
    },



    
    "26": {
      title: "Ahilya Ghat",
      subtitle: "A historic ghat associated with Rajmata Ahilyabai Holkar",
      desc:"Ahilya Ghat is a historically significant river ghat named after Rajmata Ahilyabai Holkar, known for her devotion and contributions to temple restoration across India. The ghat reflects her deep connection with the Narmada River and Omkareshwar.This ghat is quieter and less crowded, making it a perfect place for meditation, prayer, and peaceful river views. The calm environment adds to its spiritual charm."
    },



    
    "27": {
      title: "Kedareshwar Temple",
      subtitle: "A sacred Shiva temple surrounded by natural rock formations",
      desc:"Kedareshwar Temple is a revered shrine dedicated to Lord Shiva, located amidst rocky surroundings near the Narmada River. The natural setting of the temple gives it a raw and powerful spiritual atmosphere.Devotees believe that worshipping at Kedareshwar brings strength, protection, and inner balance. The temple’s location close to nature makes it a unique spiritual experience."
    },


    
    "28": {
      title: "Gauri Somnath Temple",
      subtitle: "A divine temple dedicated to Lord Shiva and Goddess Parvati",
      desc:"Gauri Somnath Temple is a peaceful and sacred shrine dedicated to Lord Shiva (Somnath) and Goddess Parvati (Gauri). The temple is known for its calm surroundings and devotional atmosphere.Pilgrims visit this temple to seek blessings for marital harmony, family well-being, and spiritual growth. The simplicity and serenity of the temple make it a meaningful stop during the Omkareshwar pilgrimage."
    },


    
    "29": {
      title: "Boat Ride - Narmada Darshan",
      subtitle: "A spiritual and scenic boat journey on the holy Narmada River",
      desc:"The Boat Ride, also known as Narmada Darshan, is one of the most memorable experiences in Omkareshwar. The boat ride takes visitors along the calm waters of the Narmada River, offering beautiful views of temples, ghats, hills, and Mandhata Island.This peaceful journey allows devotees to experience Omkareshwar from a unique perspective. It is ideal for photography, relaxation, and spiritual connection with the holy river."
    },


/*khajuraho*/
    
    "30": {
      title: "Kandariya Mahadev Temple",
      subtitle: "The largest and most magnificent temple of Khajuraho dedicated to Lord Shiva",
      desc:"Kandariya Mahadev Temple is the most prominent and architecturally advanced temple in the Khajuraho Group of Monuments. Dedicated to Lord Shiva, this 11th-century temple represents the peak of Chandela-era temple architecture. The temple is adorned with hundreds of intricately carved sculptures depicting gods, goddesses, celestial beings, dancers, and scenes of daily life.Rising high with a beautifully designed shikhara (spire), the temple symbolizes Mount Kailash, the abode of Lord Shiva. Its artistic excellence and spiritual significance make it the most visited and admired temple in Khajuraho."
    },


    "31": {
      title: "Lakshman Temple",
      subtitle: "A beautifully preserved Vaishnav temple dedicated to Lord Vishnu",
      desc:"Lakshman Temple is one of the oldest and best-preserved temples in Khajuraho. Built in the 10th century by the Chandela rulers, this temple is dedicated to Lord Vishnu. The temple stands on a high platform and is known for its balanced proportions and fine stone carvings.The sculptures on the temple walls depict mythological scenes, divine figures, and cultural life of ancient India. Lakshman Temple plays a crucial role in understanding the early development of Khajuraho’s temple architecture."
    },

    "32": {
      title: "Vishvanath Temple",
      subtitle: "A sacred Shiva temple showcasing refined Chandela architecture",
      desc:"Vishvanath Temple is a graceful and elegant temple dedicated to Lord Shiva. Built in the early 11th century, the temple is famous for its finely carved sculptures and harmonious architectural design. A beautifully carved Nandi (bull) statue stands facing the sanctum, adding to its spiritual charm.The temple reflects devotion, artistic brilliance, and religious harmony, making it an important site within the Khajuraho temple complex."
    },


    "33": {
      title: "Chitragupta Temple",
      subtitle: "A rare Sun Temple dedicated to the Sun God Surya",
      desc:"Chitragupta Temple is one of the few temples in India dedicated to the Sun God, Surya. Built in the 11th century, the temple features an impressive idol of Surya holding lotus flowers and riding a chariot drawn by seven horses.The temple walls are decorated with detailed carvings of warriors, dancers, and mythological scenes. Chitragupta Temple highlights the religious diversity and artistic richness of Khajuraho."
    },


    "34": {
      title: "Parshvanath Jain Temple",
      subtitle: "The largest Jain temple in Khajuraho with elegant sculptures",
      desc:"Parshvanath Temple is the largest Jain temple in Khajuraho and is dedicated to the 23rd Jain Tirthankara, Parshvanath. Built in the 10th century, the temple is admired for its graceful carvings, detailed friezes, and spiritual simplicity.The sculptures include floral designs, celestial figures, and scenes from everyday life. This temple reflects the Jain philosophy of peace, discipline, and non-violence."
    },


    "35": {
      title: "Raneh Falls Canyon",
      subtitle: "A dramatic natural canyon formed by the Ken River",
      desc:"Raneh Falls Canyon is a stunning natural attraction located near Khajuraho. The canyon is carved by the Ken River through volcanic rock, creating colorful rock formations and deep gorges. During the monsoon season, the waterfalls flow with great force, making the scenery breathtaking.The unique geological formations and scenic viewpoints make Raneh Falls Canyon a paradise for nature lovers and photographers."
    },
    
    "36": {
      title: "Ken Gharial Sanctuary",
      subtitle: "A protected wildlife sanctuary for gharials and river biodiversity",
      desc:"Ken Gharial Sanctuary is a protected wildlife area established to conserve the endangered gharial species. Located along the Ken River, the sanctuary is also home to crocodiles, turtles, migratory birds, and various aquatic species.The sanctuary offers a peaceful natural environment and is ideal for wildlife enthusiasts, bird watchers, and eco-tourism lovers."
    },

    "37": {
      title: "Khajuraho Archaeological Museum",
      subtitle: "A museum preserving ancient sculptures and historical artifacts",
      desc:"The Khajuraho Archaeological Museum houses a rich collection of stone sculptures recovered from various temple sites. Managed by the Archaeological Survey of India, the museum provides deep insight into the art, culture, and religious practices of ancient India.Visitors can closely observe original sculptures and understand the symbolism and craftsmanship behind Khajuraho’s world-famous temples."
    },


    "38": {
      title: "State Museum of Tribal and Folk Art",
      subtitle: "A vibrant display of Madhya Pradesh’s tribal culture and traditions",
      desc:"The State Museum of Tribal and Folk Art showcases the colorful traditions, lifestyles, and artistic expressions of tribal communities of Madhya Pradesh. The museum features masks, paintings, tools, musical instruments, and everyday objects.It offers visitors a cultural experience beyond temples, highlighting the living heritage of the region."
    },


    "39": {
      title: "Light and Sound Show, Khajuraho",
      subtitle: "A visual storytelling experience of Khajuraho’s history",
      desc:"The Light and Sound Show at Khajuraho narrates the history, legends, and cultural significance of the temples through dramatic lighting, music, and narration. The temples glow beautifully under changing lights, creating a magical atmosphere.This show is an excellent way for visitors to understand Khajuraho’s heritage in an engaging and memorable manner."
    },


   

    "40": {
      title: "Khajuraho Dance Festival",
      subtitle: "A world-famous celebration of Indian classical dance",
      desc:"The Khajuraho Dance Festival is an annual cultural event showcasing classical Indian dance forms such as Bharatanatyam, Kathak, Odissi, Kuchipudi, and Mohiniyattam. Performed against the backdrop of illuminated temples, the festival creates a mesmerizing cultural experience.Artists from across India participate in this festival, making it a perfect blend of art, heritage, and tradition."
    },


    /*orcha*/


    "41": {
      title: "Orchha Fort Complex",
      subtitle: "A grand historical complex showcasing Bundela architecture and royal heritage",
      desc:"The Orchha Fort Complex is the heart of Orchha’s rich history and architectural beauty. Built by the Bundela rulers in the 16th century, this massive fort complex stands on the banks of the Betwa River. The complex includes palaces, temples, courtyards, and watchtowers that reflect the grandeur of medieval India.With its beautifully carved walls, arches, and domes, the Orchha Fort Complex offers visitors a glimpse into the royal lifestyle of the Bundela kings. The scenic surroundings and historical significance make it one of the most important attractions in Orchha."
    },

    "42": {
      title: "Jehangir Mahal",
      subtitle: "A magnificent palace built to welcome Mughal Emperor Jahangir",
      desc:"Jehangir Mahal is the most iconic structure within the Orchha Fort Complex. It was built by Raja Bir Singh Deo to commemorate the visit of Mughal Emperor Jahangir. The palace beautifully blends Mughal and Rajput architectural styles, featuring grand gateways, balconies, and elegant domes.From the top of the palace, visitors can enjoy breathtaking views of Orchha town and the Betwa River. Jehangir Mahal stands as a symbol of political alliance and architectural excellence."
    },

    "43": {
      title: "Raja Mahal, Orchha",
      subtitle: "The royal residence adorned with murals and traditional paintings",
      desc:"Raja Mahal is one of the oldest palaces in Orchha and served as the residence of the Bundela kings. The palace is known for its beautifully painted walls and ceilings, depicting religious themes, royal life, and mythological stories.The palace’s simple exterior contrasts with its richly decorated interiors. Its multiple levels and terraces offer panoramic views of the surrounding landscape, making it a must-visit historical site."
    },

     "44": {
      title: "Ram Raja Temple",
      subtitle: "The only temple in India where Lord Ram is worshipped as a king",
      desc:"Ram Raja Temple is one of the most unique and sacred temples in India. Originally built as a palace, it later became a temple where Lord Ram is worshipped in the form of a king. He is offered royal honors, including a guard of honor by the state police.The temple attracts thousands of devotees daily who come to seek blessings and experience its unique traditions. The blend of devotion, history, and royal customs makes Ram Raja Temple truly special."
    },


     "45": {
      title: "Chaturbhuj Temple",
      subtitle: "A towering temple dedicated to Lord Vishnu with stunning architecture",
      desc:"Chaturbhuj Temple is a grand temple dedicated to Lord Vishnu and is known for its towering structure and massive pillars. Built on a high platform, the temple offers spectacular views of Orchha and the Betwa River.The temple’s unique design combines temple and fort architecture, giving it a majestic appearance. Its calm and spiritual environment attracts both devotees and history lovers."
    },


     "46": {
      title: "Laxmi Narayan Temple",
      subtitle: "A rare blend of temple and fort architecture with historic murals",
      desc:"Laxmi Narayan Temple is one of the most distinctive monuments in Orchha. Dedicated to Goddess Lakshmi, the temple also resembles a fort due to its defensive architectural elements. Inside, the walls feature rare murals depicting mythological scenes and historical events.The temple is an excellent example of Bundela art and culture. Its elevated position provides panoramic views of the surrounding countryside."
    },


     "47": {
      title: "Cenotaphs (Chhatris) of Orchha",
      subtitle: "Royal memorials of Bundela rulers along the Betwa River",
      desc:"The Cenotaphs, locally known as Chhatris, are royal memorials built in honor of the Bundela kings and queens. Located along the banks of the Betwa River, these elegant structures feature domes, pillars, and detailed carvings.At sunset, the chhatris create a magical reflection on the river, making it one of the most picturesque spots in Orchha. They represent both architectural beauty and historical remembrance."
    },


     "48": {
      title: "Betwa River, Orchha",
      subtitle: "A serene river adding natural beauty to Orchhas historic landscape",
      desc:"The Betwa River flows gently alongside Orchha, enhancing the towns natural charm and peaceful atmosphere. The river plays an important role in the towns history and daily life.Visitors can enjoy river walks, boating, and scenic views, especially during sunrise and sunset. The Betwa River perfectly complements Orchha’s heritage monuments."
    },


     "49": {
      title: "Phool Bagh, Orchha",
      subtitle: "A royal garden designed for relaxation and recreation",
      desc:"Phool Bagh is a beautifully designed garden that once served as a leisure retreat for the Bundela rulers. It features fountains, water channels, and an underground cooling system that reflects advanced engineering of its time.The garden offers a peaceful environment for visitors to relax and enjoy the greenery. It is an excellent example of royal landscaping and design."
    },


     "50": {
      title: "Sound and Light Show, Orchha",
      subtitle: "A dramatic narration of Orchhas royal history",
      desc:"The Sound and Light Show at Orchha brings the town’s glorious past to life through music, lighting, and storytelling. The show highlights the stories of Bundela kings, important historical events, and architectural achievements.Set against the backdrop of Orchhas monuments, the show offers an engaging and memorable way to learn about the towns heritage."
    },

/*mandhu*/
     "51": {
      title: "Jahaz Mahal",
      subtitle: "A floating palace built between two lakes in Mandu",
      desc:"Jahaz Mahal, also known as the Ship Palace, is one of the most iconic monuments of Mandu. Built between Munj Talao and Kapur Talao, the palace appears like a ship floating on water. It was constructed by Sultan Ghiyas-ud-din Khilji as a pleasure palace for royal women. The palace features long corridors, open terraces, balconies, and water channels that reflect the luxurious lifestyle of medieval rulers. Jahaz Mahal looks especially beautiful during the monsoon season when the surrounding lakes are full."
    },


     "52": {
      title: "Hindola Mahal",
      subtitle: "The “Swinging Palace” known for its sloping walls",
      desc:"Hindola Mahal is an impressive structure known for its inward-sloping walls, which give it the appearance of a swinging palace. Built during the Malwa Sultanate period, it served as a royal audience hall. The palace showcases a blend of strength and simplicity with massive stone walls and elegant arches. It reflects Mandu’s importance as a center of administration and culture."
    },


     "53": {
      title: "Rani Roopmati Pavilion",
      subtitle: "A romantic hilltop pavilion overlooking the Narmada Valley",
      desc:"Rani Roopmati Pavilion is a beautiful hilltop structure associated with the legendary love story of Queen Roopmati and Sultan Baz Bahadur. Built as a lookout pavilion, it offers breathtaking views of the Narmada River and surrounding hills. The open design allows cool breezes, making it a peaceful retreat. The pavilion symbolizes love, music, and poetry of medieval India."
      
    },


     "54": {
      title: "Baz Bahadur Palace",
      subtitle: "The royal palace of Mandus last independent ruler",
      desc:"Baz Bahadur Palace was the residence of Sultan Baz Bahadur, the last independent ruler of Malwa. Built in Afghan architectural style, the palace includes spacious courtyards, halls, and balconies. Located near Rani Roopmati Pavilion, the palace is closely connected to Mandus romantic and cultural history. It offers scenic views of Mandu’s ruins and natural landscape."
    },


     "55": {
      title: "Jami Masjid, Mandu",
      subtitle: "A grand mosque inspired by Syrian Islamic architecture",
      desc:"Jami Masjid is one of the largest mosques in Mandu, inspired by the Great Mosque of Damascus. Built in the 15th century, it features a vast courtyard, domes, and arched colonnades. The mosque served as a major religious and social center during the Malwa Sultanate and reflects the grandeur of Islamic architecture."
    },


     "56": {
      title: "Hoshang Shahs Tomb",
      subtitle: "India’s earliest marble mausoleum and architectural masterpiece",
      desc:"Hoshang Shah’s Tomb is considered one of the earliest marble buildings in India and is believed to have inspired the Taj Mahal. Built in the 15th century, the tomb is known for its symmetrical design, marble dome, and finely carved walls. It stands as a remarkable example of Indo-Islamic architecture."
    },


     "57": {
      title: "Ashrafi Mahal",
      subtitle: "A historic madrasa and royal complex in ruins",
      desc:"Ashrafi Mahal was originally built as an Islamic school and later became part of a royal complex. Though now in ruins, it once stood as an important center of education and culture. The structure highlights Mandu’s role as a medieval learning hub."
    },


     "58": {
      title: "Rewa Kund",
      subtitle: "A sacred water reservoir linked to Rani Roopmati",
      desc:"Rewa Kund is a historic water tank built by Sultan Baz Bahadur to supply water to Rani Roopmati Pavilion. It is associated with devotion to the Narmada River and holds both religious and historical significance."
    },


     "59": {
      title: "Nilkanth Palace",
      subtitle: "A former royal resort now housing a Shiva temple",
      desc:"Nilkanth Palace was originally a pleasure resort of the Malwa rulers and later converted into a Mughal hunting lodge. The palace blends Afghan and Mughal architectural styles and is surrounded by forests. Today, it houses a Shiva temple, adding spiritual significance to its historical charm."
    },


     "60": {
      title: "Echo Point & Sunset Point",
      subtitle: "Natural viewpoints offering sound echoes and scenic sunsets",
      desc:"Echo Point and Sunset Point are popular natural viewpoints in Mandu. Echo Point is known for sound reflections, while Sunset Point offers breathtaking views of the sun setting over the Vindhya ranges. These spots are perfect for photography and peaceful nature experiences."
    },



     "61": {
      title: "Champa Baoli",
      subtitle: "A historic stepwell with elegant arches",
      desc:"Champa Baoli is a beautifully designed stepwell believed to be named after Champa Bai, a paramour of Sultan Baz Bahadur. The baoli features intricate arches and corridors and served as a water source and cooling retreat. It reflects advanced water management systems of medieval India."
    },
/*khana natonal park*/

     "62": {
      title: "Kanha Meadow",
      subtitle: "Vast grassland rich in wildlife",
      desc:"Kanha Meadow is a vast open grassland that forms the heart of Kanha National Park. It provides an ideal habitat for deer, barasingha, and other herbivores, making it a prime wildlife-viewing area. The scenic beauty of the meadow is unmatched, especially during sunrise."
    },

    
     "63": {
      title: "Bamni Dadar",
      subtitle: "Famous sunset viewpoint of Kanha",
      desc:"Bamni Dadar, also known as Sunset Point of Kanha, offers panoramic views of forests and grasslands. It is a popular stop during safaris and is famous for stunning sunsets and occasional wildlife sightings."
    },



     "64": {
      title: "Mukki Zone",
      subtitle: "A prime tiger-sighting zone",
      desc:"Mukki Zone is one of the richest wildlife zones in Kanha, known for high chances of tiger sightings. The zone features dense forests, water bodies, and open meadows, making it ideal for wildlife photography."
    },


     "65": {
      title: "Kisli Zone",
      subtitle: "The oldest zone of Kanha National Park",
      desc:"Kisli Zone is the oldest and most scenic zone of Kanha National Park. It includes Kanha Meadow and several water bodies, offering excellent opportunities to spot deer, birds, and predators."
    },

     "66": {
      title: "Khatia Gate",
      subtitle: "Main entrance to Kanha National Park",
      desc:"Khatia Gate is the main entrance to Kanha National Park. It provides access to Kisli and Kanha zones and is surrounded by forests and tourist facilities."
    },


     "67": {
      title: "Shravan Tal",
      subtitle: "A calm water body for wildlife viewing",
      desc:"Shravan Tal is a peaceful water body inside Kanha National Park. It attracts various animals and birds, especially during summer, making it an important wildlife observation spot."
    },


     "68": {
      title: "Banjar River",
      subtitle: "Lifeline river of Kanha ecosystem",
      desc:"Banjar River flows through Kanha National Park and supports its rich ecosystem. The riverbanks are ideal locations for spotting wildlife, especially during early mornings."
    },


     "69": {
      title: "Kanjiya Lake",
      subtitle: "Scenic lake near Kanha Museum",
      desc:"Kanjiya Lake is a large artificial lake near the Kanha Museum. It offers boating facilities and is surrounded by forested landscapes, making it a relaxing spot for visitors."
    },
/*sachi stupa*/

     "70": {
      title: "Great Stupa (Stupa No. 1)",
      subtitle: "The oldest Buddhist stupa in India",
      desc:"The Great Stupa at Sanchi is one of the oldest stone structures in India, originally commissioned by Emperor Ashoka in the 3rd century BCE. It symbolizes Buddhist teachings and enlightenment and is a UNESCO World Heritage Site."
    },
     "71": {
      title: "Great Stupa (Stupa No. 2)",
      subtitle: "A smaller stupa with rich carvings",
      desc:"Stupa No. 2 is smaller than the Great Stupa but equally significant. It features detailed carvings depicting Buddhist symbols and early artistic traditions."
    },


     "72": {
      title: "Ashoka Pillar",
      subtitle: "A symbol of Ashoka’s devotion to Buddhism",
      desc:"The Ashoka Pillar at Sanchi is a finely polished sandstone pillar erected by Emperor Ashoka. It reflects his commitment to Buddhism and moral governance."
    },



     "73": {
      title: " Eastern Gateways",
      subtitle: "Decorated gateways narrating Buddha’s life",
      desc:"The four gateways (Toranas) of the Great Stupa are richly carved with scenes from the life of Buddha, Jataka tales, and symbols of Buddhist philosophy. Each gateway represents a different direction and artistic excellence of ancient India."
    },


     "74": {
      title: "Northern Gateways",
      subtitle: "Decorated gateways narrating Buddha’s life",
      desc:"The four gateways (Toranas) of the Great Stupa are richly carved with scenes from the life of Buddha, Jataka tales, and symbols of Buddhist philosophy. Each gateway represents a different direction and artistic excellence of ancient India."
    },



     "75": {
      title: " Southern Gateways",
      subtitle: "Decorated gateways narrating Buddha’s life",
      desc:"The four gateways (Toranas) of the Great Stupa are richly carved with scenes from the life of Buddha, Jataka tales, and symbols of Buddhist philosophy. Each gateway represents a different direction and artistic excellence of ancient India."
    },




     "76": {
      title: " Western Gateways",
      subtitle: "Decorated gateways narrating Buddha’s life",
      desc:"The four gateways (Toranas) of the Great Stupa are richly carved with scenes from the life of Buddha, Jataka tales, and symbols of Buddhist philosophy. Each gateway represents a different direction and artistic excellence of ancient India."
    },



     "77": {
      title: "Buddhist Monastery",
      subtitle: "Residence of ancient Buddhist monks",
      desc:"The Buddhist Monastery at Sanchi served as a residence for monks and a center of learning. The ruins reflect monastic life and discipline during ancient times."
    },



     "78": {
      title: "Sanchi Archaeological Museum",
      subtitle: "Preserving Sanchi’s ancient heritage",
      desc:"Sanchi Archaeological Museum houses sculptures, relics, and artifacts excavated from the Sanchi site. The museum helps visitors understand the historical, artistic, and religious significance of Sanchi."
    },



     "79": {
      title: "Narmada Udgam Kund",
      subtitle: "The sacred origin point of the holy River Narmada",
      desc:"Narmada Udgam Kund is the most sacred place in Amarkantak, believed to be the exact origin point of the holy River Narmada. Surrounded by temples and lush greenery, the kund holds immense religious significance for Hindu devotees. Pilgrims take holy dips here and offer prayers before beginning the Narmada Parikrama. The peaceful atmosphere and spiritual energy make it one of the most revered sites in central India."
    },



     "80": {
      title: "Sonmuda",
      subtitle: "The origin point of the Son River with breathtaking views",
      desc:"Sonmuda is a scenic viewpoint and the origin place of the Son River. Located at the edge of the Maikal hills, it offers stunning panoramic views of deep valleys and dense forests. The calm environment and cool breeze make it a perfect spot for nature lovers and photographers. Sonmuda also has religious importance and attracts visitors seeking peace and natural beauty."
    },
      
    
    "81": {
      title: "Kapildhara Waterfall",
      subtitle: "A powerful waterfall formed by the Narmada River",
      desc:"Kapildhara Waterfall is one of the most famous waterfalls in Amarkantak, created by the holy River Narmada as it descends from the plateau. Surrounded by thick forests, the waterfall looks majestic during the monsoon season. It is named after Sage Kapil and holds spiritual significance along with natural charm. The sound of flowing water and scenic surroundings make it a popular tourist attraction."
    },


     "82": {
      title: "Dudhdhara Waterfall",
      subtitle: "A milky-white cascade of the Narmada River",
      desc:"Dudhdhara Waterfall is located near Kapildhara and gets its name from the frothy white appearance of the flowing water, resembling milk. The waterfall flows over rocky terrain and offers a mesmerizing sight, especially after rainfall. It is an ideal place for nature photography and peaceful relaxation amidst greenery."
    },



     "83": {
      title: "Mai Ki Bagiya",
      subtitle: "A serene garden and spiritual retreat in Amarkantak",
      desc:"Mai Ki Bagiya is a peaceful garden area believed to be associated with the goddess Narmada. Surrounded by forests and small temples, the place offers a calm and spiritual environment. Visitors come here to meditate, relax, and enjoy the natural beauty. It is considered an important stop during religious visits to Amarkantak."
    },



     "84": {
      title: "Kamakandal Kund",
      subtitle: "A sacred pond linked to ancient legends",
      desc:"Kamakandal Kund is a holy water tank associated with mythological stories related to sages and divine powers. The kund is surrounded by trees and rocky formations, creating a peaceful setting. Devotees believe that bathing in this kund brings spiritual purity and blessings. It is a quiet and less crowded place, ideal for contemplation."
    },



     "85": {
      title: "Shri Yantra Temple",
      subtitle: "A unique temple dedicated to cosmic energy and spirituality",
      desc:"The Shri Yantra Temple in Amarkantak is a unique spiritual site based on sacred geometric patterns known as the Shri Yantra. The temple symbolizes universal energy, balance, and meditation. Visitors experience a sense of calm and positivity here. The architectural design and spiritual atmosphere make it a special attraction for seekers of inner peace."
    },



     "86": {
      title: "Kalachuri Temples",
      subtitle: "Ancient temples reflecting Kalachuri-era architecture",
      desc:"The Kalachuri Temples are a group of ancient shrines built during the Kalachuri dynasty. These temples are dedicated mainly to Lord Shiva and showcase beautiful stone carvings and simple yet powerful architecture. They reflect the historical and cultural heritage of Amarkantak and attract history lovers and devotees alike."
    },



     "87": {
      title: "Kabir Chabutra",
      subtitle: "A sacred spot associated with Saint Kabir",
      desc:"Kabir Chabutra is a spiritually important place believed to be visited by Saint Kabir during his travels. The site represents his teachings of unity, simplicity, and devotion beyond religious boundaries. Surrounded by nature, Kabir Chabutra offers a peaceful atmosphere for reflection and meditation."
    },



     "88": {
      title: "Ramghat",
      subtitle: "A sacred bathing ghat on the Mandakini River",
      desc:"Ramghat is one of the most revered places in Chitrakoot, located on the banks of the holy Mandakini River. It is believed that Lord Rama, Goddess Sita, and Lord Lakshman spent time here during their exile. Devotees gather at Ramghat to take holy dips, perform rituals, and attend the mesmerizing evening aarti. The peaceful surroundings and spiritual atmosphere make Ramghat the heart of Chitrakoot’s religious life."
    },



     "89": {
      title: "Kamadgiri Parikrama",
      subtitle: "A sacred circumambulation path around Kamadgiri Hill",
      desc:"Kamadgiri Parikrama is a holy path encircling Kamadgiri Hill, considered the most sacred spot in Chitrakoot. According to belief, Lord Rama resided on this hill during his exile. Devotees perform the parikrama with faith, believing it fulfills wishes and brings spiritual blessings. The path is lined with temples, ashrams, and scenic views, offering both spiritual and natural beauty."
    },



     "90": {
      title: "Hanuman Dhara",
      subtitle: "A hilltop shrine with a natural water stream",
      desc:"Hanuman Dhara is a famous temple dedicated to Lord Hanuman, situated on a hilltop in Chitrakoot. A continuous stream of water flows over the idol of Hanuman, believed to have cooled him after the burning of Lanka. Visitors climb a series of steps to reach the temple and enjoy panoramic views of the surrounding landscape. The site combines devotion, adventure, and natural beauty."
    },



     "91": {
      title: "Sati Anusuya Ashram",
      subtitle: "An ancient hermitage of devotion and meditation",
      desc:"Sati Anusuya Ashram is a peaceful and sacred place associated with Sage Atri and his wife, Sati Anusuya. It is believed that Goddess Anusuya performed intense penance here, turning the Trimurti into infants. Surrounded by forests and water streams, the ashram offers a serene environment ideal for meditation and spiritual reflection."
    },



     "92": {
      title: "Gupt Godavari",
      subtitle: "A mystical cave temple with an underground river",
      desc:"Gupt Godavari is a fascinating cave system where a narrow stream of water flows through natural rock formations. According to legends, Lord Rama and Lakshman held court here during their exile. Inside the caves, visitors can see natural formations resembling divine structures. The place is known for its mysterious ambiance and spiritual significance."
    },



     "93": {
      title: "Bharat Milap Mandir",
      subtitle: "The sacred site of reunion between Lord Rama and Bharat",
      desc:"Bharat Milap Mandir marks the holy place where Lord Rama met his brother Bharat during exile. The temple symbolizes love, devotion, and sacrifice. Footprint impressions believed to belong to the four brothers are worshipped here. The peaceful setting enhances the emotional and spiritual importance of the site."
    },



     "94": {
      title: "Janki Kund",
      subtitle: "A serene bathing place of Goddess Sita",
      desc:"Janki Kund is a quiet and sacred spot on the banks of the Mandakini River. It is believed that Goddess Sita used this place for bathing during her stay in Chitrakoot. The clear water and calm surroundings create a soothing spiritual experience for devotees and visitors."
    },



     "95": {
      title: "Mandakini River",
      subtitle: "The lifeline river of Chitrakoot’s spiritual landscape",
      desc:"The Mandakini River flows gently through Chitrakoot and is deeply associated with the Ramayana. It provides water to the region and adds natural beauty to the pilgrimage sites. Ghats along the river are used for rituals, meditation, and evening aartis, making it a central element of Chitrakoot’s spiritual life."
    },



     "96": {
      title: "Spatik Shila",
      subtitle: "A sacred rock associated with Goddess Sita",
      desc:"Spatik Shila is a holy stone believed to bear the footprints of Goddess Sita. According to legend, Jayant transformed into a crow and was punished here by Lord Rama. The site is revered for its mythological significance and tranquil riverside location."
    },



     "97": {
      title: "Janaki Kund",
      subtitle: "A peaceful riverbank spot linked to Goddess Sita",
      desc:"Janaki Kund is another sacred location associated with Goddess Sita, often visited for its serene environment and religious importance. The calm waters of the Mandakini and surrounding greenery make it an ideal place for prayer and meditation."
    },



     "98": {
      title: "Gwalior Fort",
      subtitle: "One of the most magnificent hilltop forts of India",
      desc:"Gwalior Fort is a majestic hilltop fortress that dominates the city skyline and is considered one of the finest forts in India. With a history spanning over a thousand years, the fort has witnessed the rule of several dynasties including the Tomars, Mughals, and Marathas. The massive sandstone walls, intricate carvings, temples, and palaces inside the fort complex reflect its strategic importance and architectural brilliance. Often called the “Gibraltar of India,” Gwalior Fort is a symbol of strength, heritage, and royal grandeur."
    },



     "99": {
      title: "Man Singh Palace",
      subtitle: "A colorful royal palace known for its blue tile façade",
      desc:"Man Singh Palace is the most striking structure inside Gwalior Fort, built by Raja Man Singh Tomar. The palace is famous for its vibrant blue ceramic tiles decorated with yellow duck motifs. Inside, it features spacious courtyards, royal chambers, and beautifully designed balconies. The palace reflects the luxurious lifestyle of the Tomar rulers and showcases a unique blend of Rajput and medieval architecture."
    },



     "100": {
      title: "Saas Bahu Temple",
      subtitle: "Twin temples known for detailed carvings and elegance",
      desc:"Saas Bahu Temple is a group of two Hindu temples dedicated to Lord Vishnu, despite the popular name suggesting familial relations. Built in the 11th century, these temples are admired for their detailed stone carvings, graceful pillars, and artistic ceilings. The temples stand as fine examples of medieval temple architecture and are an important religious and historical attraction in Gwalior."
    },



   "101": {
      title: "Teli Ka Mandir",
      subtitle: "A unique blend of Dravidian and Nagara temple styles",
      desc:"Teli Ka Mandir is the tallest temple inside Gwalior Fort and stands out due to its unusual architectural design. Unlike traditional temples, it has no idol inside and features a fusion of North Indian Nagara and South Indian Dravidian styles. Built in the 9th century, the temple is admired for its massive structure and detailed carvings, making it a significant historical landmark."
    },


     "102": {
      title: "Gujari Mahal",
      subtitle: "A palace built for Queen Mrignayani, now a museum",
      desc:"Gujari Mahal was constructed by Raja Man Singh Tomar for his queen Mrignayani. Designed with an advanced water supply system, the palace reflects thoughtful medieval engineering. Today, it houses the State Archaeological Museum, displaying ancient sculptures, inscriptions, and artifacts that showcase the rich cultural heritage of the region."
    },



     "103": {
      title: "Jai Vilas Palace",
      subtitle: "A grand palace showcasing European-style luxury",
      desc:"Jai Vilas Palace is a magnificent royal residence built by Maharaja Jayajirao Scindia in the 19th century. Designed in European architectural style, the palace is famous for its massive chandeliers, ornate furniture, and luxurious interiors. A portion of the palace has been converted into a museum, offering visitors a glimpse into the opulent lifestyle of the Scindia dynasty."
    },



     "104": {
      title: "Sun Temple, Gwalior",
      subtitle: "A modern temple inspired by the Konark Sun Temple",
      desc:"The Sun Temple in Gwalior is a beautifully designed modern temple dedicated to the Sun God. Built using red sandstone and white marble, it is inspired by the famous Konark Sun Temple of Odisha. The peaceful surroundings and elegant architecture make it a popular spiritual and photography spot."
    },



     "105": {
      title: "Tomb of Tansen",
      subtitle: "Final resting place of India’s legendary classical musician",
      desc:"The Tomb of Tansen is dedicated to the great musician Mian Tansen, one of the nine gems of Emperor Akbar’s court. Located near the tomb of his teacher Muhammad Ghaus, this site is a center of classical music heritage. The annual Tansen Music Festival attracts renowned artists and music lovers from across the country."
    },



     "106": {
      title: "Gopachal Jain Parvat",
      subtitle: "A sacred Jain site with rock-cut Tirthankara idols",
      desc:"Gopachal Jain Parvat is a significant Jain pilgrimage site located at the foothills of Gwalior Fort. It is known for its massive rock-cut statues of Jain Tirthankaras carved into sandstone cliffs. These ancient sculptures reflect Jain spiritual values and artistic excellence, making it an important religious and historical attraction."
    },



     "107": {
      title: "Italian Garden (Phool Bagh)",
      subtitle: "A beautifully landscaped garden in European style",
      desc:"Italian Garden, also known as Phool Bagh, is a well-maintained public garden designed in European style. Featuring symmetrical lawns, fountains, and walking paths, the garden offers a refreshing escape from the city’s hustle. It is a popular spot for leisure, relaxation, and family outings in Gwalior."
    },


     "108": {
      title: "Rajwada Palace",
      subtitle: "The historic royal residence of the Holkar dynasty",
      desc:"Rajwada Palace is a magnificent seven-storey structure located in the heart of Indore. Built by Malhar Rao Holkar over two centuries ago, the palace reflects a unique blend of Maratha, Mughal, and French architectural styles. The front façade is made of stone while the rear structure is wooden, showcasing traditional craftsmanship. Rajwada stands as a symbol of Indore’s royal heritage and vibrant history."
    },


     "109": {
      title: "Lal Bagh Palace",
      subtitle: "A grand palace showcasing royal luxury and European elegance",
      desc:"Lal Bagh Palace is one of the finest examples of European-style architecture in India. Spread over a vast area, the palace was built by the Holkar rulers and features ornate interiors, Italian marble flooring, grand chandeliers, and rich furniture. Today, it serves as a museum displaying royal artifacts, offering visitors a glimpse into the opulent lifestyle of Indore’s former rulers."
    },


     "110": {
      title: "Khajrana Ganesh Mandir",
      subtitle: "A highly revered temple dedicated to Lord Ganesha",
      desc:"Khajrana Ganesh Mandir is one of the most important religious sites in Indore. Originally built by Rani Ahilyabai Holkar, the temple is believed to fulfill the wishes of devotees. Thousands of visitors visit the temple daily, especially during festivals like Ganesh Chaturthi. The peaceful environment and strong spiritual energy make it a must-visit place."
    },



     "111": {
      title: "Annapurna Temple",
      subtitle: "A sacred temple symbolizing nourishment and prosperity",
      desc:"Annapurna Temple is dedicated to Goddess Annapurna, the deity of food and nourishment. The temple’s architecture is inspired by South Indian style, featuring beautifully carved gates and pillars. Devotees visit the temple to seek blessings for prosperity, good health, and abundance. The serene atmosphere makes it a popular spiritual destination."
    },



     "112": {
      title: "Chhappan Dukan",
      subtitle: "Indore’s famous food street and cultural hotspot",
      desc:"Chhappan Dukan, meaning “56 Shops,” is a lively food street famous for Indore’s street food culture. From poha-jalebi to chaat, samosas, and sweets, the area offers a wide variety of local flavors. It is a popular hangout spot for food lovers and tourists, reflecting the vibrant lifestyle of the city."
    },




     "113": {
      title: "Patalpani Waterfall",
      subtitle: "A scenic waterfall surrounded by lush greenery",
      desc:"Patalpani Waterfall is a beautiful natural attraction located near Indore. It becomes especially impressive during the monsoon season when water flows in full force. Surrounded by hills and forests, the waterfall is a favorite spot for picnics, photography, and nature lovers seeking a refreshing escape."
    },



     "114": {
      title: "Ralamandal Wildlife Sanctuary",
      subtitle: "A peaceful wildlife retreat near Indore",
      desc:"Ralamandal Wildlife Sanctuary is one of the oldest sanctuaries in Madhya Pradesh. Located on a hilltop, it offers panoramic views of Indore city along with rich flora and fauna. The sanctuary is ideal for nature walks, bird watching, and wildlife enthusiasts looking for a calm natural environment."
    },



     "115": {
      title: "Gandhi Hall",
      subtitle: "A historic building inspired by Indo-Gothic architecture",
      desc:"Gandhi Hall, formerly known as King Edward Hall, is an iconic landmark of Indore. Built during the British era, the building features Indo-Gothic architectural style with a large clock tower. Today, it is used for exhibitions, cultural events, and public gatherings."
    },



     "116": {
      title: "Central Museum, Indore",
      subtitle: "A treasure house of Indore’s historical artifacts",
      desc:"The Central Museum of Indore houses a rich collection of sculptures, coins, inscriptions, and ancient artifacts. The museum offers valuable insights into the region’s history, culture, and art. It is an ideal place for history lovers and students to explore Indore’s past."
    },


     "117": {
      title: "Madan Mahal Fort",
      subtitle: "A historic hilltop fort built by the Gond rulers",
      desc:"Madan Mahal Fort is an ancient fort situated on a rocky hill in Jabalpur. Built by the Gond ruler Raja Madan Shah, the fort served as a strategic military outpost and royal residence. Though small in size, the fort offers panoramic views of the surrounding city and countryside. Its simple yet strong structure reflects the military architecture of the Gond dynasty and stands as a symbol of regional history."
    },


     "118": {
      title: "Rani Durgavati Museum",
      subtitle: "A museum dedicated to the brave Gond queen",
      desc:"Rani Durgavati Museum is dedicated to Queen Rani Durgavati, one of the most courageous rulers of central India. The museum displays ancient sculptures, inscriptions, coins, weapons, and tribal artifacts that highlight the cultural and historical heritage of the Gond kingdom. It is an important educational and cultural center for understanding the region’s past."
    },


     "119": {
      title: "Balancing Rocks",
      subtitle: "A natural geological wonder of Jabalpur",
      desc:"The Balancing Rocks of Jabalpur are a fascinating natural phenomenon where massive stone boulders appear perfectly balanced on each other. Despite their size, the rocks have remained stable for centuries and attract visitors due to their mysterious appearance. This site is popular among geology enthusiasts, photographers, and nature lovers."
    },



     "120": {
      title: "Bargi Dam",
      subtitle: "A scenic dam built on the Narmada River",
      desc:"Bargi Dam is a large multipurpose dam constructed on the holy Narmada River. It plays an important role in irrigation and hydroelectric power generation. The area around the dam is known for its natural beauty, boating activities, and peaceful environment. Sunset views from Bargi Dam are especially popular among tourists."
    },



     "121": {
      title: "Gwarighat",
      subtitle: "A sacred ghat famous for Narmada Aarti",
      desc:"Gwarighat is one of the most important and sacred ghats on the Narmada River in Jabalpur. Devotees gather here to take holy dips and perform rituals. The evening Narmada Aarti at Gwarighat attracts a large number of visitors and creates a deeply spiritual and serene atmosphere."
    },



     "122": {
      title: "Tilwara Ghat",
      subtitle: "A historic ghat linked to Mahatma Gandhi",
      desc:"Tilwara Ghat holds great historical significance as the place where the ashes of Mahatma Gandhi were immersed in the Narmada River. It is a peaceful riverside location with steps leading to the water, ideal for meditation and quiet reflection. The ghat represents both spiritual devotion and national heritage."
    },



     "123": {
      title: "Upper Lake (Bhojtal)",
      subtitle: "The lifeline and largest lake of Bhopal",
      desc:"Upper Lake, also known as Bhojtal, is the largest and most beautiful lake in Bhopal. Built by Raja Bhoj in the 11th century, the lake serves as a major source of drinking water for the city. Surrounded by greenery and hills, Bhojtal offers boating, sunset views, and peaceful surroundings. It is a favorite spot for nature lovers, photographers, and visitors seeking calmness amidst the city."
    },



     "124": {
      title: "Lower Lake",
      subtitle: "A serene lake complementing Bhopal’s historic landscape",
      desc:"Lower Lake lies adjacent to the Upper Lake and together they form the famous Bhoj Wetland. Constructed in the late 18th century, the lake adds charm to the old city area. The calm waters reflect nearby buildings and mosques, creating a scenic urban landscape. It is an important ecological zone and a peaceful sightseeing spot."
    },



     "125": {
      title: "Van Vihar National Park",
      subtitle: "A unique wildlife park within city limits",
      desc:"Van Vihar National Park is a protected area located beside the Upper Lake. Unlike traditional zoos, animals here live in natural habitats with open enclosures. The park is home to tigers, leopards, deer, birds, and reptiles. Visitors can explore the park by walking, cycling, or driving, making it an ideal destination for nature and wildlife enthusiasts."
    },



     "126": {
      title: "Taj-ul-Masajid",
      subtitle: "One of the largest mosques in India",
      desc:"Taj-ul-Masajid is an architectural marvel and among the largest mosques in India. Built using pink sandstone and white marble, the mosque features massive domes, towering minarets, and a spacious courtyard. It reflects the grandeur of Islamic architecture and serves as an important religious and cultural center in Bhopal."
    },



     "127": {
      title: "Bharat Bhavan",
      subtitle: "A premier center for art, culture, and creativity",
      desc:"Bharat Bhavan is a renowned multi-arts complex dedicated to promoting Indian art and culture. It houses galleries, libraries, workshops, and an open-air theatre. The complex showcases tribal art, contemporary paintings, literature, music, and theatre performances, making it a cultural hub of Bhopal."
    },



     "128": {
      title: "Indira Gandhi Rashtriya Manav Sangrahalaya",
      subtitle: "A national museum of anthropology and living cultures",
      desc:"This open-air museum presents the lifestyle, traditions, and housing patterns of various tribal and rural communities of India. Spread over a large area near Upper Lake, the museum offers an immersive experience through life-size exhibits and cultural displays. It is an educational and cultural treasure of Bhopal."
    },



     "129": {
      title: "Shaukat Mahal",
      subtitle: "A rare blend of Indo-Islamic and European architecture",
      desc:"Shaukat Mahal is a unique architectural structure reflecting a fusion of European and Mughal styles. Built during the reign of the Begums of Bhopal, the palace stands out for its elegant arches, balconies, and pastel colors. It is an important heritage landmark in the old city."
    },



     "130": {
      title: "Sadar Manzil",
      subtitle: "A former royal hall for public ceremonies",
      desc:"Sadar Manzil was once used as a royal audience hall and durbar by the Nawabs of Bhopal. The building features Indo-Saracenic architecture and served as a venue for state functions and celebrations. It represents the administrative and cultural life of historic Bhopal."
    },


     "131": {
      title: "Birla Mandir, Bhopal",
      subtitle: "A hilltop temple offering spiritual peace and city views",
      desc:"Birla Mandir is a beautiful temple dedicated to Goddess Lakshmi and Lord Vishnu. Located on a hill, it offers panoramic views of Bhopal city and its lakes. The white marble structure, peaceful atmosphere, and spiritual ambiance attract devotees and tourists alike."
    },



     "132": {
      title: "State Museum of Madhya Pradesh",
      subtitle: "A rich repository of art, history, and archaeology",
      desc:"The State Museum in Bhopal houses an extensive collection of sculptures, coins, manuscripts, paintings, and archaeological artifacts from different periods. It provides deep insights into the cultural and historical heritage of Madhya Pradesh and is a must-visit for history enthusiasts."
    },


     "133": {
      title: "",
      subtitle: "",
      desc:""
    },



     "134": {
      title: "",
      subtitle: "",
      desc:""
    },


     "135": {
      title: "",
      subtitle: "",
      desc:""
    },



     "136": {
      title: "",
      subtitle: "",
      desc:""
    },



     "137": {
      title: "",
      subtitle: "",
      desc:""
    },



     "138": {
      title: "",
      subtitle: "",
      desc:""
    },



     "139": {
      title: "",
      subtitle: "",
      desc:""
    },



     "140": {
      title: "",
      subtitle: "",
      desc:""
    },



     "141": {
      title: "",
      subtitle: "",
      desc:""
    },



     "142": {
      title: "",
      subtitle: "",
      desc:""
    },



     "143": {
      title: "",
      subtitle: "",
      desc:""
    },



     "144": {
      title: "",
      subtitle: "",
      desc:""
    },



     "145": {
      title: "",
      subtitle: "",
      desc:""
    },



     "146": {
      title: "",
      subtitle: "",
      desc:""
    },



     "147": {
      title: "",
      subtitle: "",
      desc:""
    },



     "148": {
      title: "",
      subtitle: "",
      desc:""
    },



     "149": {
      title: "",
      subtitle: "",
      desc:""
    },



     "150": {
      title: "",
      subtitle: "",
      desc:""
    },


     "151": {
      title: "",
      subtitle: "",
      desc:""
    },


     "152": {
      title: "",
      subtitle: "",
      desc:""
    },



    
















































  };

  const info = infoData[id];

  if (!info) return <p className="p-5">Information not found</p>;

   return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      
      {/* Card */}
      <div
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="bg-black/60 p-8 sm:p-12">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4
            bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
            text-transparent bg-clip-text">
            {info.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-center text-lg sm:text-xl text-yellow-200 font-semibold mb-6">
            {info.subtitle}
          </h2>

          {/* Description */}
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed text-center">
            {info.desc}
          </p>

        </div>
      </div>
    </div>
  );

}