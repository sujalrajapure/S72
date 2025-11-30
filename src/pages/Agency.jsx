import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Footer from "../components/Footer/Footer";


const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ];
  
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: "top top",
        end: window.innerHeight <= 1000 ? "top -175%" : "top -50%",
        pin:true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length - 1
          }
          
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })
  return (
    <>
    <div className="section1 py-1">
      <div ref={imageDivRef} className="absolute md:h-[20vw] md:w-[15vw] h-[40vw] w-[25vw] lg:rounded-2xl bg-[#D3FD50] rounded-lg top-40 left-[30vw] overflow-hidden">
        <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt='photo1' />
      </div>
      <div className="relative font-[font2]">
        <div className="lg:mt-[57vh] mt-[33vh]">
          <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
            SEVEN7Y
            <br />
            TWO
          </h1>
        </div>
        <div className="lg:pl-[40%] mt-20 px-5 font-[font2]">
          <h2 className="text-6xl text-bold">
           &emsp;&emsp;&emsp;&emsp;&emsp;We're inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner. A brand is a living thing, with
            values, a personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </h2>
        </div>
      </div>
    </div>
    <div className="section2 w-full min-h-screen font-[font2] px-[8vw] py-[8vh]">

  {/* Expertise Section */}
  <div className="flex gap-[10vw] mt-20">
    <div>
      <h1 className="text-xl mb-6">Expertise</h1>
    </div>

    <div className="flex flex-col pl-45 gap-1 text-xl">
      <p>Strategy</p>
      <p>Advertising</p>
      <p>Branding</p>
      <p>Design</p>
      <p>Content</p>
    </div>
  </div>

  {/* Bottom 3 Columns */}
  <div className="grid grid-cols-3 gap-[5vw] mt-[20vh] text-xl leading-relaxed">

    <div>
      <h3 className="font-semibold mb-3">Our Work_</h3>
      <p>
        Born in curiosity, raised by dedication and fed
        with a steady diet of creativity.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Our Creative_</h3>
      <p>
        Simmering in an environment where talent can come
        to a full boil. Encouraged to become the best versions
        of ourselves.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Our Culture_</h3>
      <p>
        We’re open to each other. Period. The team works
        together to create a space that makes us proud.
      </p>
    </div>

  </div>

</div>

   <div>
      <Footer/>
   </div>


    
    </>
  );
};

export default Agency;
