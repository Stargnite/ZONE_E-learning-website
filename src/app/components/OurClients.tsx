import Image from "next/image";
import Spotify from "@/images/Spotify.svg";
import Slack from "@/images/Slack.svg";
import Netflix from "@/images/Netflix.svg";
import Heroku from "@/images/Heroku.svg";
import Vimeo from "@/images/Vimeo.svg";
import Airbnb from "@/images/Airbnb.svg";


import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})


const OurClients = () => {
  return (
    <div className="text-center">
      <h1 className={`text-2xl md:text-5xl font-extrabold text-gray-900 my-5 md:my-10 ${barlow.className}`}>
        We Work With
      </h1>
      <p className="text-gray-400 text-sm md:text-xl">
        Quisque aliquet, libero consequat elementum convallis.
      </p>
      <div className="mt-14 items-center justify-center flex flex-wrap">
        <Image src={Spotify} alt="" className="m-7" />
        <Image src={Slack} alt="" className="m-7" />
        <Image src={Netflix} alt="" className="m-7" />
        <Image src={Heroku} alt="" className="m-7" />
        <Image src={Vimeo} alt="" className="m-7" />
        <Image src={Airbnb} alt="" className="m-7" />
      </div>
    </div>
  );
};

export default OurClients;
