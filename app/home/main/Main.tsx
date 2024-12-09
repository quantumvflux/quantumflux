import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";

export const Main = () => {
  return (
    <div>
      <Section>
        <Heading text="about:" />
        <p className="text-xl">
          Hi, everyone! I&apos;m Marcos, a software developer from Argentina and
          I create custom digital marketing solutions and software designed to
          meet the unique needs of your business or personal brand.
          <br /> My love for technology, video games, music production and
          economics inspires my creativity and problem-solving skills giving me
          the superpower of always being open to new ideas and perspectives,
          which helps me tackle projects from different angles and deliver
          fresh, innovative solutions.
        </p>
      </Section>
    </div>
  );
};
