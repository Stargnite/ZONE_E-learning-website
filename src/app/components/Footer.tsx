import Image from "next/image";
import Logo from "@/images/Logo.svg";

const Footer = () => {
  return (
    <div className="pt-40 pb-5 px-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  mb-16">
        <div className="max-w-xs flex flex-col items-center md:items-start">
          <Image src={Logo} alt="" className="mb-7 self-center" />
          <p className="text-gray-500 mb-5 text-center md:text-start">
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </p>
          <div className="socials flex justify-between">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div className="mb-5 md:mb-0 text-center">
          <div className="flex mb-5">
            <div className="icon"></div>
            <p>info@example.com</p>
          </div>
          <div className="flex">
            <div className="icon"></div>
            <p>655 Schaefer Dale</p>
          </div>
        </div>

        <form
          action=""
          method="post"
          name="registerForm"
          className="bg-gray-200 flex max-h-12 p-1 rounded-md"
        >
          <input
            type="email"
            placeholder="Email address"
            className="focus:outline-none bg-gray-200"
          />
          <button className="p-3 bg-primary flex items-center text-center text-white rounded-md">
            Register
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row text-center md:text-start md:justify-between text-gray-500">
        <div className="flex pb-5">
          <div className="">&copy;</div>
          <p>2021. All rights reserved</p>
        </div>
        <nav className="flex list-none">
          <li className="mr-7">Help center</li>
          <li>Terms of service</li>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
