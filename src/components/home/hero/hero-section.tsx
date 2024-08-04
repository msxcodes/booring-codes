import Image from "next/image";
import React from "react";
import HeroBanner from "../../../../public/hero-banner.jpg";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative h-[70vh]">
      <div className="size-full flex justify-center items-center">
        <div className="flex items-center flex-col z-50 gap-4">
          <h2 className="text-6xl text-gray-800 font-extrabold  text-center">
            <span className="bg-gradient-to-tr bg-clip-text text-transparent from-blue-700 to-sky-300">
              Automate{" "}
            </span>
            Your Workflows <br /> And Scale Delivery Your IT Problems, <br />{" "}
            Our Expert Solutions
          </h2>
          <p className="text-center text-base max-w-screen-lg font-medium opacity-60">
            Transform your business processes with our cloud-based software.
            Automate workflows, improve efficiency, and reduce errors. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Totam commodi
            sequi, sint temporibus aspernatur modi perferendis
          </p>
          <div className="flex gap-4 mt-2">
            <Button
              variant={"ghost"}
              className="active:scale-90 transition-all duration-75"
            >
              Free Trial
            </Button>
            <Button className="bg-gradient-to-tr from-blue-700 to-sky-300 active:scale-90 transition-all duration-75">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={HeroBanner}
        alt=""
        className="size-full object-cover absolute top-0 left-0 opacity-70"
      />
      <div className="absolute bottom-0 left-0 h-[100px] bg-gradient-to-b from-[rgba(4,21,45,0)] to-white w-full "></div>
    </div>
  );
}
