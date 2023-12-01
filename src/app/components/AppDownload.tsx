import React from "react";
import Image from "next/image";
import qrCode from "@/images/qrcode.svg";
import mobileApp from "@/images/mobileApp.svg";
import AppleStoreBtn from "@/images/AppleStoreBtn.svg";
import GoogleStoreBtn from "@/images/GoogleStoreBtn.svg";

import { Barlow } from 'next/font/google'
 
const barlow = Barlow({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})


const AppDownload = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-7 py-7 md:px-24 md:py-24">
      <div className="md:text-start text-center w-full md:w-6/12 mb-7 md:mb-0">
        <h1 className={`text-2xl md:text-3xl font-extrabold mb-7 text-gray-900 ${barlow.className}`}>
          Download App
        </h1>
        <p className="text-gray-500 md:pr-24 mb-16">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Phasellus leo dolor, tempus non, auctor et, hendrerit
          quis, nisi.
        </p>
        <div className="border-gray-100 mr-0 md:mr-20 lg:mr-40 p-7 border rounded-lg">
          <div className="flex items-center lg:px-5 pb-10 border-b-2">
            <Image src={qrCode} alt="" className=" mr-3 md:mr-10 w-56" />
            <p className="text-sm text-start font-bold">Scan QR code to install on your device</p>
          </div>
          <div className="buttons flex justify-center mt-7 items-center text-center flex-col lg:flex-row">
            <button className=" mb-3 lg:mb-0 lg:mr-5">
              <Image src={AppleStoreBtn} alt="" />
            </button>
            <button className="lg:ml-5">
              <Image src={GoogleStoreBtn} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image src={mobileApp} alt="" className="" />
      </div>
    </div>
  );
};

export default AppDownload;
