import { IJobz } from "@/app/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

export const JobItem = ({ image, description, name }: IJobz) => {
  return (
    <div className="bg-white w-64 flex rounded-md p-4 gap-4 shadow-sm hover:saturate-200">
      <div className="relative h-20 w-20 overflow-hidden rounded-md ">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <p className="font-semibold text-xl">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
