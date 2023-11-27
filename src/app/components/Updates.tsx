import Img1 from "@/images/featuredImg1.png";
import Img2 from "@/images/featuredImg2.png";
import Img3 from "@/images/featuredImg3.png";
import Image from "next/image";
import star from "@/images/star.svg";
import ProfilePic from "@/images/profilePic.png";
import ClockIcon from "@/images/ClockIcon.svg";
import LevelIcon from "@/images/LevelIcon.svg";

const Updates = () => {
  return (
    <div className="md:mx-24 my-10">
      <div className="md:flex px-10 md:px-0 justify-between items-center mb-20">
        <div className="text-2xl text-center  md:text-3xl text-gray-800 font-bold">
          Latest Posts
        </div>

        <div className="flex items-center hidden md:block">
          <div className="">View All</div>
        </div>
      </div>

      <div className="cards flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div
          className="card flex flex-row md:flex-col overflow-hidden w-auto md:w-80
                        shadow md:self-start mx-5 md:mx-0 md:ml-0 md:pb-5 mb-5 md:mb-auto"
        >
          <Image
            src={Img1}
            alt=""
            className="w-32 h-32 md:w-auto md:h-auto rounded-2xl md:pb-5"
          />
          <div className="flex px-3 items-center md:items-start">
            <div className="date text-center pr-10 mt-1 hidden md:block">
              <p className="text-sm mb-5">Jul</p>
              <h1 className="font-bold text-2xl">12</h1>
            </div>
            <div className="">
              <h1 className="font-bold mb-3 text-md md:text-lg">
                The 7 Best Things About Event
              </h1>
              <p className="text-gray-500 text-sm mb-3 hidden md:block">
                Moment in the life of any aspiring astronomer of that it is time
                to.
              </p>

              <div className="hidden md:flex">
                <Image src={ProfilePic} alt="" className="mr-3" />
                <div className="">
                  <h2>Arlene McCoy</h2>
                  <p className="text-gray-500">8 min read</p>
                </div>
              </div>
              <div className="md:hidden flex text-gray-500 items-center text-sm">
                <div className="">May 29, 2017</div>
                <div className="rounded-full mx-2 w-1 h-1 bg-gray-500"></div>
                <p className="text-gray-500">8 min read</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card flex flex-row md:flex-col overflow-hidden w-auto md:w-80
                        shadow md:self-start mx-5 md:mx-0 md:ml-0 md:pb-5 mb-5 md:mb-auto"
        >
          <Image
            src={Img1}
            alt=""
            className="w-32 h-32 md:w-auto md:h-auto rounded-2xl md:pb-5"
          />
          <div className="flex px-3 items-center md:items-start">
            <div className="date text-center pr-10 mt-1 hidden md:block">
              <p className="text-sm mb-5">Jul</p>
              <h1 className="font-bold text-2xl">12</h1>
            </div>
            <div className="">
              <h1 className="font-bold mb-3 text-md md:text-lg">
                The 7 Best Things About Event
              </h1>
              <p className="text-gray-500 text-sm mb-3 hidden md:block">
                Moment in the life of any aspiring astronomer of that it is time
                to.
              </p>

              <div className="hidden md:flex">
                <Image src={ProfilePic} alt="" className="mr-3" />
                <div className="">
                  <h2>Arlene McCoy</h2>
                  <p className="text-gray-500">8 min read</p>
                </div>
              </div>
              <div className="md:hidden flex text-gray-500 items-center text-sm">
                <div className="">May 29, 2017</div>
                <div className="rounded-full mx-2 w-1 h-1 bg-gray-500"></div>
                <p className="text-gray-500">8 min read</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card flex flex-row md:flex-col overflow-hidden w-auto md:w-80
                        shadow md:self-start mx-5 md:mx-0 md:ml-0 md:pb-5 mb-5 md:mb-auto"
        >
          <Image
            src={Img1}
            alt=""
            className="w-32 h-32 md:w-auto md:h-auto rounded-2xl md:pb-5"
          />
          <div className="flex px-3 items-center md:items-start">
            <div className="date text-center pr-10 mt-1 hidden md:block">
              <p className="text-sm mb-5">Jul</p>
              <h1 className="font-bold text-2xl">12</h1>
            </div>
            <div className="">
              <h1 className="font-bold mb-3 text-md md:text-lg">
                The 7 Best Things About Event
              </h1>
              <p className="text-gray-500 text-sm mb-3 hidden md:block">
                Moment in the life of any aspiring astronomer of that it is time
                to.
              </p>

              <div className="hidden md:flex">
                <Image src={ProfilePic} alt="" className="mr-3" />
                <div className="">
                  <h2>Arlene McCoy</h2>
                  <p className="text-gray-500">8 min read</p>
                </div>
              </div>
              <div className="md:hidden flex text-gray-500 items-center text-sm">
                <div className="">May 29, 2017</div>
                <div className="rounded-full mx-2 w-1 h-1 bg-gray-500"></div>
                <p className="text-gray-500">8 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center md:hidden justify-center w-full mt-5 text-center">
          <h2 className="text-primary self-center font-bold">View All</h2>
        </div>
    </div>
  );
};

export default Updates;
