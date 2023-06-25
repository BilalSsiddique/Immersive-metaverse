import Header from "./Header";
import Video from "./Video";

const Home = () => {
  return (
    <div className="flex relative flex-col  w-full h-screen">
      {/* Header */}
      <Header />
      {/* Left Menu */}
      <div className="flex absolute top-32 flex-col gap-2 mt-20 justify-start w-fit  ">
        <div className="flex justify-start gap-2 items-center  w-fit  pr-14 ">
          <img src="/lineIcon.svg" alt="" />
          <p>MAP</p>
        </div>
        <div className="flex justify-start gap-2 items-center  w-fit  pr-14 ">
          <img src="/lineIcon.svg" alt="" />
          <p>MISSIONS</p>
        </div>
        <div className="flex justify-start gap-2 items-center  w-fit  pr-14 ">
          <img src="/lineIcon.svg" alt="" />
          <p>CHARACTERS</p>
        </div>
        <div className="flex justify-start gap-2 items-center  w-fit  pr-14 ">
          <img src="/lineIcon.svg" alt="" />
          <p>LOADOUTS</p>
        </div>
        <div className="flex justify-start gap-2 items-center  w-fit  pr-14 ">
          <img src="/lineIcon.svg" alt="" />
          <p>EVENTS</p>
        </div>
      </div>
      {/* background image */}
      <div className=" flex place-content-center w-full">
        <img src="/background-image.svg" className="relative h-screen" />
        <img
          src="/round-screen-1.svg"
          className="flex justify-center mix-blend-multiply left-0 right-0 mx-auto w-[1062px] h-full   blur-[0px]    absolute"
          alt=""
        />
        <img
          src="/round-screen-1.svg"
          className="flex justify-center  left-0 right-0 mx-auto w-[10%] h-full shadown-inner  blur-[65px]    absolute"
          alt=""
        />
        <img
          src="/round-screen-2.svg"
          className="flex justify-center  left-0 right-0 mx-auto w-[10%] h-full shadown-inner  blur-[10px]    absolute"
          alt=""
        />
        <img
          src="/round-screen-1.svg"
          className="flex justify-center  left-0 right-0 mx-auto w-[12%] h-full shadown-inner  blur-[20px]    absolute"
          alt=""
        />
      </div>
      {/* Video */}
      <div className="md:absolute top-[53%] right-0">
        <Video />
      </div>
      {/* Heading */}
      <div className="absolute top-[68%] left-44 bottom-20">
        <img src="/heading.svg" alt="" width={600} height={600} />
      </div>
      {/* Bottom Text */}
      <div className="flex  ml-5 items-center  gap-5">
        <img src="/textIcon.svg" alt="" width={34} height={34}/>
        <p className="opacity-70 leading-7 ">UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO <br/>CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.</p>
      </div>
    </div>
  );
};

export default Home;
