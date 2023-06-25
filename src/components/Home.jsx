import Header from "./Header";
import Video from "./Video";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-full">
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
      <div className="md:absolute top-[49%] right-5">
        <Video />
      </div>
      <div className="">

      </div>

    </div>
  );
};

export default Home;
