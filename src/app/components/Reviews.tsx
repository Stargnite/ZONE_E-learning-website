import Quote from "@/images/Quote.svg";
import Image from "next/image";
import ProfilePic from "@/images/profilePic.png"
import HighlightedProfilePic from "@/images/highlightedProfile.png"

const Reviews = () => {
  return (
    <div className="px-7 md:px-24 py-24 bg-gray-200">
      <h1 className="text-center font-extrabold text-gray-900 text-xl md:text-3xl">
        What Our Students Say
      </h1>
      <div className="flex my-6 md:my-12 items-center justify-center">
        <Image src={Quote} alt="" className="opacity-90" />
      </div>

      <div className="flex justify-around items-center">
        <div className="hidden md:flex">arr</div>
        <div className="comment">
            <p className="text-center px-2 md:px-40 lg:px-52 mb-10">
              Amazing experience i love it a lot. Thanks to the team that dreams
              come true, great! I appreciate there attitude and approach. Truly
              professionals!
            </p>
			<div className="flex justify-center items-center ">
				<Image src={ProfilePic} alt="" className="h-10 mr-5 opacity-90 hidden md:flex" />
				<Image src={ProfilePic} alt="" className="h-10 mr-5 ml-5 md:ml-0  opacity-90" />
				<Image src={HighlightedProfilePic} alt="" className="mr-5" />
				<Image src={ProfilePic} alt="" className="h-10 mr-5 opacity-90" />
				<Image src={ProfilePic} alt="" className="h-10 opacity-90 hidden md:flex" />
				{/* For responsive highlighted image, make make width & height 24 (w-24, h-24) */}
			</div>
			<div className="text-center pt-7">
				<h2 className="font-bold">Robert Fox</h2>
				<p className="text-gray-500">Designer</p>
			</div>
        </div>
        <div className="hidden md:flex">arr</div>
      </div>
    </div>
  );
};

export default Reviews;
