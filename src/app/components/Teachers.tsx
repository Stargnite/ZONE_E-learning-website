import Teacher1 from "@/images/teacher1.png";
import Teacher2 from "@/images/teacher2.png";
import Teacher3 from "@/images/teacher3.png";
import Teacher4 from "@/images/teacher4.png";
import Image from "next/image";

import { Barlow } from 'next/font/google'
 
const barlow = Barlow({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})


const Teachers = () => {
  return (
    <div className="pt-16 my-10 px-4 nd:px-24">
      <div className="text-center mb-28">
        <h1 className={`font-extrabold text-gray-900 text-2xl md:text-3xl mb-5 ${barlow.className}`}>
          Meet Our Teachers
        </h1>
        <p className="text-gray-400 px-2 lg:px-96">
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
      </div>

      <div className="cards flex flex-col items-center md:flex-row md:justify-around">
        <div className="card border border-b-0 rounded-xl text-center w-60 h-auto md:w-1/6 overflow-hidden md:h-72 mb-4 shadow-md">
          <h2 className="font-bold text-xl mt-5">Eleanor Pena</h2>
          <div className="text-gray-500 mb-12">UI Designer</div>
          <div className="origin-top-right skew-y-3">
            <Image src={Teacher1} alt="" />
          </div>
        </div>

        <div className="card border border-b-0 rounded-xl text-center w-60 h-auto md:w-1/6 overflow-hidden md:h-72 mb-4 shadow-md">
          <h2 className="font-bold text-xl mt-5">Kathryn Murphy</h2>
          <div className="text-gray-500 mb-12">HR Manager</div>
          <div className="origin-top-right skew-y-3">
            <Image src={Teacher2} alt="" />
          </div>
        </div>

        <div className="card border border-b-0 rounded-xl text-center w-60 h-auto md:w-1/6 overflow-hidden md:h-72 mb-4 shadow-md">
          <h2 className="font-bold text-xl mt-5">Dianne Russell</h2>
          <div className="text-gray-500 mb-12">Leader</div>
          <div className="origin-top-right skew-y-3">
            <Image src={Teacher3} alt="" />
          </div>
        </div>

        <div className="card border border-b-0 rounded-xl text-center w-60 h-auto md:w-1/6 overflow-hidden md:h-72 mb-4 shadow-md">
          <h2 className="font-bold text-xl mt-5">Esther Howard</h2>
          <div className="text-gray-500 mb-12">Project Manager</div>
          <div className="origin-top-right skew-y-3">
            <Image src={Teacher4} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-auto mt-10 md:mt-20">
        <button className="text-sm border border-gray-400 rounded-md p-2 font-bold hover:shadow-lg">
          View all Teachers
        </button>
      </div>
    </div>
  );
};

export default Teachers;
