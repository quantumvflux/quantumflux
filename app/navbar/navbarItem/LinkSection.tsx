import { LinkItem } from "./linkItem/LinkItem";
import { urls } from "../../consts/data";

export const LinkSection = () => {
  return (
    <div className="flex justify-center sm:justify-start w-full sm:w-auto gap-4 text-sm">
      {urls.map((url) => (
        <LinkItem key={url.data} data={url.data} />
      ))}
    </div>
  );
};
