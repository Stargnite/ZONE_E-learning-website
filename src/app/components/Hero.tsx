import Image from "next/image";
import HeroImg from "@/images/HeroImage.svg";
import Playicon from "@/images/Playicon.svg";

const Hero = () => {
  return (
    <div className="md:flex justify-between px-20 p-10">
      <div className="items-center">
        <div className="text-3xl  md:text-5xl text-center md:pt-16 text-gray-900 align-center font-bold md:text-start md:max-w-sm leading-tight">
          Free <span className="text-gray-400">Online</span>{" "}
          <span className="underline text-primary">Courses</span> From The
          Experts
        </div>
        <p className="text-gray-400 mt-5 text-center md:w-96 md:text-start">
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
          sapien, quis venenatis ante odio sit amet eros.{" "}
        </p>

        <div className="flex justify-center mt-7 md:justify-start">
          <button className="bg-primary text-xs md:text-base text-white p-3 rounded-md mr-7">
            Ready Start
          </button>
          <button className="font-bold self-center text-xs md:text-base">Watch Video</button>
        </div>

        <div className="flex mt-10 justify-between text-center md:text-start">
          <div className="mr-5">
            <h1 className="font-bold text-sm md:text-2xl text-gray-800">14k+</h1>
            <p className="text-gray-400 md:text-base text-xs">Learners</p>
          </div>
          <div className="mr-5">
            <h1 className="font-bold text-sm md:text-2xl text-gray-800">1,05k+</h1>
            <p className="text-gray-400 md:text-base text-xs">Courses</p>
          </div>
          <div className="">
            <h1 className="font-bold text-sm md:text-2xl text-gray-800">59k+</h1>
            <p className="text-gray-400 md:text-base text-xs">Graduates</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
