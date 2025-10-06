import { IJobz } from "@/interfaces/interfaces";
import Image from "next/image";

export const JobItem = ({ image, description, name }: IJobz) => {
  return (
    <div className="bg-white w-64 flex rounded-md p-4 gap-4 shadow-sm hover:saturate-200">
      <div className="relative h-20 w-20 overflow-hidden rounded-md ">
        <Image
          src={image}
          alt={name}
          fill
          sizes="5rem"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <p className="font-semibold text-2xl font-vt">{name}</p>

        <p className="text-sm font-plex">{description}</p>
      </div>
    </div>
  );
};
