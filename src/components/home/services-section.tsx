import React from "react";
import { Card } from "../ui/card";
import ServiceCard from "./services/service-card";
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
    <div className="py-12">
      <div className="flex flex-col justify-center items-center gap-1 my-8">
        <h4 className="text-4xl font-bold ">Our Services</h4>
        <span className="max-w-screen-md text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        </span>
      </div>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-8">
          <ServiceCard
            title="UI/UX Design"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<ChartBarDecreasing size={32} />}
          />
          <ServiceCard
            title="Web Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<Braces size={32} />}
          />
          <ServiceCard
            title="App Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<TabletSmartphone size={32} />}
          />
          <ServiceCard
            title="Cloud Services"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<CloudOff size={32} />}
          />
          <ServiceCard
            title="Network Security"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<GlobeLock size={32} />}
          />
          <ServiceCard
            title="Database Management"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<DatabaseBackup size={32} />}
          />
          <ServiceCard
            title="Cyber Security"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<ShieldCheck size={32} />}
          />
          <ServiceCard
            title="Help Desk"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad repellendus cum quaerat, vitae alias."
            icon={<ScreenShare size={32} />}
          />
        </div>
      </div>
    </div>
  );
}
