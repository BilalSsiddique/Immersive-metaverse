import Header from "./Header";
import Video from "./Video";

const Home = () => {
  return (
    <div className="flex relative flex-col h-screen w-full">
      {/* Header */}
      <Header />
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
      <div className="md:absolute top-[40%] right-5">
        <Video />
      </div>
      {/* Heading */}
      <div className="absolute left-60 bottom-20">
        <img src="/heading.svg" alt="" width={700} height={600} />
      </div>
      {/* Bottom Text */}
      <div className="flex   items-center  gap-5">
        <img src="/textIcon.svg" alt="" width={34} height={34}/>
        <p className="opacity-70 leading-7 ">UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO <br/>CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.</p>
      </div>



    </div>
  );
};

export default Home;
