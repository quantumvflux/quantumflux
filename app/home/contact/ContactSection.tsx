import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";
import { contactData } from "@/consts/data";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <Section>
      <Heading text="my socials:" />
      <div className="flex flex-col justify-center items-center gap-4 text-white text-2xl">
        {contactData.map(({ name, link, color }) => (
          <Link
            key={name}
            className="w-64 h-12 flex justify-center items-center hover:scale-[1.04] transition-transform ease-in-out duration-300 font-plex text-xl"
            target="_blank"
            href={link}
            style={{
              backgroundColor: color,
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </Section>
  );
};
