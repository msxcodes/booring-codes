"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MoveRight, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  des: string;
  icon: any;
  link?: string;
}

const ServiceCard = ({ title, des, icon, link }: CardProps) => {
  const route = useRouter();

  return (
    <Card
      onClick={() => route.push("#")}
      className="dark:bg-slate-900 scroll-smooth dark:shadow-slate-950 dark:border-slate-600 py-4 rounded-[20px] pt-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 active:scale-90"
    >
      <CardContent className="flex justify-center gap-1 items-center flex-col ">
        {icon}
        <span className="font-semibold text-xl mt-2">{title}</span>
        <p className=" text-xs opacity-50 text-center">{des} </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="flex items-center text-xs font-medium text-primary gap-1 hover:underline cursor-pointer">
          View Details{" "}
          <span>
            <MoveRight size={14} />
          </span>{" "}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
