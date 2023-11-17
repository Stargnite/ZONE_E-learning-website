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
    <div className=" md:mx-24 my-10">
      <div className="flex px-10 md:px-0 justify-between items-center mb-20">
        <div className="text-2xl md:text-3xl text-gray-800 font-bold">
          Latest Posts
        </div>

        <div className="arrows flex">
          <div className="pr-5">arr</div>
          <div className="">arr</div>
        </div>
      </div>

      <div className="cards flex md:justify-between items-center">
        <div className="card rounded-t-2xl overflow-hidden w-60 md:w-80 shadow md:self-start ml-10 md:ml-0  pb-5 mb-5">
          <Image src={Img1} alt="" className="rounded-t-2xl pb-5" />
          <div className="px-3">
            <div className="flex justify-between items-center">
              <h4 className="text-primary text-xs md:text-sm">MANAGMENT</h4>
              <div className="price font-bold text-lg md:text-xl">$39</div>
            </div>
            <h2 className="font-bold mt-6">
              Don&apos;t Waste Time! 7 Facts Until You Reach Your Event
            </h2>

            <div className="stats flex mt-5">
              <div className="flex mr-5">
                <Image src={star} alt="" />
                <div className="ml-1 flex items-center text-xs md:text-lg">
                  <span className="font-bold te">4.8</span>{" "}
                  <span className="text-gray-500">(1,089)</span>
                </div>
              </div>
              <div className="flex text-xs md:text-lg">
                <span className="font-bold">180k</span>
                <span>students</span>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <Image src={ProfilePic} alt="" className="mr-2" />
              <p>Bessie Cooper</p>
            </div>

            <div className="flex text-gray-500 mt-8">
              <div className="flex mr-10 text-xs md:text-base items-center">
                <Image src={ClockIcon} alt="" className="mr-1" />
                <p className="break-normal">100 hours</p>
              </div>
              <div className="flex text-xs items-center">
                <Image src={LevelIcon} alt="" className="mr-1" />
                <p>Beginner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-t-2xl overflow-hidden w-80 shadow pb-5 mb-5 hidden md:block">
          <Image src={Img2} alt="" className="rounded-t-2xl pb-5" />
          <div className="px-3">
            <div className="flex justify-between items-center">
              <h4 className="text-primary text-sm">MANAGMENT</h4>
              <div className="price font-bold text-xl">$99</div>
            </div>
            <h2 className="font-bold mt-6">
              The 7 Most Successful Event Companies In Region{" "}
            </h2>

            <div className="stats flex mt-5">
              <div className="flex mr-5">
                <Image src={star} alt="" />
                <div className="ml-1">
                  <span className="font-bold">4.8</span>{" "}
                  <span className="text-gray-500">(1,089)</span>
                </div>
              </div>
              <div className="">
                <span className="font-bold">180k</span> <span>students</span>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <Image src={ProfilePic} alt="" className="mr-2" />
              <p>Annette Black</p>
            </div>

            <div className="flex text-gray-500 mt-8">
              <div className="flex mr-10">
                <Image src={ClockIcon} alt="" className="mr-1" />
                <p>100 hours</p>
              </div>
              <div className="flex">
                <Image src={LevelIcon} alt="" className="mr-1" />
                <p>Beginner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-t-2xl overflow-hidden w-80 shadow pb-5 mb-5 hidden xl:block">
          <Image src={Img3} alt="" className="rounded-t-2xl pb-5" />
          <div className="px-3">
            <div className="flex justify-between items-center">
              <h4 className="text-primary text-sm">MANAGMENT</h4>
              <div className="price font-bold text-xl">$59</div>
            </div>
            <h2 className="font-bold mt-6">
              Think Your Event Is Safe? 7 Ways You Can Lose It Today
            </h2>

            <div className="stats flex mt-5">
              <div className="flex mr-5">
                <Image src={star} alt="" />
                <div className="ml-1">
                  <span className="font-bold">4.8</span>{" "}
                  <span className="text-gray-500">(1,089)</span>
                </div>
              </div>
              <div className="">
                <span className="font-bold">180k</span> <span>students</span>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <Image src={ProfilePic} alt="" className="mr-2" />
              <p>Brooklyn Simmons</p>
            </div>

            <div className="flex text-gray-500 mt-8">
              <div className="flex mr-10">
                <Image src={ClockIcon} alt="" className="mr-1" />
                <p>100 hours</p>
              </div>
              <div className="flex">
                <Image src={LevelIcon} alt="" className="mr-1" />
                <p>Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
