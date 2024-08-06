import React from "react";
import { Card } from "../../ui/card";
import ServiceCard from "./service-card";
import {
  Braces,
  ChartBarDecreasing,
  CloudOff,
  DatabaseBackup,
  GlobeLock,
  ScreenShare,
  ShieldCheck,
  TabletSmartphone,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="md:py-12">
      <div className="flex flex-col justify-center items-center gap-1 my-8 px-4 md:px-0">
        <h4 className="text-4xl font-bold ">Our Services</h4>
        <span className="max-w-screen-md text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        </span>
      </div>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-8 px-4 md:px-0">
          <ServiceCard
            title="UI/UX Design"
            des="We specialize in creating seamless and engaging digital experiences through our expertise in UI/UX design."
            icon={<ChartBarDecreasing size={32} />}
          />
          <ServiceCard
            title="Web Development"
            des="Our company specializes in delivering top-notch web development services tailored to meet your business needs."
            icon={<Braces size={32} />}
          />
          <ServiceCard
            title="App Development"
            des="We specialize in creating high-performance, user-friendly mobile and web applications tailored to your business needs."
            icon={<TabletSmartphone size={32} />}
          />
          <ServiceCard
            title="Cloud Services"
            des="We offers comprehensive cloud services designed to enhance your business efficiency and scalability."
            icon={<CloudOff size={32} />}
          />
          <ServiceCard
            title="Network Security"
            des="We offer comprehensive network security services designed to protect your organization's data from cyber threats."
            icon={<GlobeLock size={32} />}
          />
          <ServiceCard
            title="Database Management"
            des="We offers comprehensive database management services to ensure your data is organized and easily accessible."
            icon={<DatabaseBackup size={32} />}
          />
          <ServiceCard
            title="Cyber Security"
            des="We provide robust solutions including network security, data protection, threat detection, and incident response."
            icon={<ShieldCheck size={32} />}
          />
          <ServiceCard
            title="Help Desk"
            des="Our Help Desk services provide comprehensive support to ensure your IT systems run smoothly."
            icon={<ScreenShare size={32} />}
          />
        </div>
      </div>
    </div>
  );
}
