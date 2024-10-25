import { LinkItem } from "./linkItem/LinkItem";
import { urls } from "../../consts/data";

export const LinkSection = () => {
  return (
    <div className="flex justify-center sm:justify-start w-full sm:w-auto gap-4 text-sm">
      {urls.map(({ data }) => (
        <LinkItem key={data} data={data} />
      ))}
    </div>
  );
};
