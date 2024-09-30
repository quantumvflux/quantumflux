import { LinkItem } from "./linkItem/LinkItem";

export const LinkSection = () => {
  return (
    <div className="flex justify-center sm:justify-start w-full sm:w-auto gap-4 text-sm">
      <LinkItem data="/" />
      <LinkItem data="/projects" />
      <LinkItem data="/socials" />
      <LinkItem data="/extra" />
    </div>
  );
};
