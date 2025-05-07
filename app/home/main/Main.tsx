import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";

export const Main = () => {
  return (
    <div>
      <Section>
        <Heading text="about:" />
        <p className="text-2xl mb-6">
          Hi, everyone! I&apos;m Marcos, a software developer from Argentina and
          I create custom digital marketing solutions and software designed to
          meet the unique needs of your business or personal brand.
          <br /> My love for technology, video games, music production and
          economics inspires my creativity and problem-solving skills giving me
          the superpower of always being open to new ideas and perspectives,
          which helps me tackle projects from different angles and deliver
          fresh, innovative solutions.
        </p>
        <div className="flex gap-4">
          <a
            href="/assets/curriculum/Marcos_Baravalle_curriculum.pdf"
            download
            className="text-xl border-2 border-gray-500 px-4 py-1 bg-transparent hover:bg-gray-500 hover:text-white transition-colors"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-baravalle/"
            className="text-xl border-2 border-gray-500 px-4 py-1 bg-transparent hover:bg-gray-500 hover:text-white transition-colors"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
};
