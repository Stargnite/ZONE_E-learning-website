import Image from "next/image";
import TypingPic from "@/images/typing.png";

const WhyCourse = () => {
  return (
    <div className="py-24 px-5 md:px-20">
      <div className="text-primary text-xl">Nullam accumsan lorem in dui.</div>
      <div className="flex mt-10 items-center">
        <div
          className="mr-24 hidden lg:block"
        >
          <Image
            src={TypingPic}
            alt=""
            // width={466}
            // height={621}
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl font-bold text-gray-700">
            Phasellus gravida semper nisi. <br /> Vestibulum rutrum, mi
          </h1>
          <p className="text-gray-500 max-w-prose mt-12">
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos hymenaeos.
          </p>
          <div className="flex flex-col md:flex-row mt-20 justify-between">
            <div className="pr-5">
              <div className="border-primary border-2 w-10 my-7"></div>
              <p className="text-gray-500 max-w-sm">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis{" "}
              </p>
            </div>
            <div className="">
              <div className="border-primary border-2 w-10 my-7"></div>
              <p className="text-gray-500 max-w-sm">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis{" "}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCourse;
