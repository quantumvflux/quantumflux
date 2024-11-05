import { Main } from "@/app/home/main/Main";
import { SkillSection } from "@/app/home/skills/SkillSection";
import { JobsSection } from "./home/jobs/JobsSection";
import { Section } from "./components/Section";
import { Heading } from "./components/Heading";
import { projectData } from "@/consts/projectData";
import { ProjectCard } from "./projects/projectCard/ProjectCard";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Main />
      <JobsSection />
      <Section>
        <Heading text="my projects:" />
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {projectData.length > 0 ? (
            projectData.map(({ name, technologies, image, company }) => (
              <ProjectCard
                key={name}
                name={name}
                technologyNames={technologies}
                image={image}
                company={company}
              />
            ))
          ) : (
            <p className="font-semibold text-xl">
              its a lil dusty here for now...
            </p>
          )}
        </div>
      </Section>

      <SkillSection />

      <Section>
        <Heading text="my socials:" />
        <div className="flex flex-col justify-center items-center gap-4 text-white text-2xl">
          <Link
            className="w-64 h-12 flex justify-center items-center bg-[#dc8a78] hover:scale-110 transition-all"
            target="_blank"
            href="https://github.com/quantumvflux"
          >
            Github
          </Link>
          <Link
            className="w-64 h-12 flex justify-center items-center bg-[#179299] hover:scale-110 transition-all"
            target="_blank"
            href="https://discord.com/channels/quantumflux"
          >
            Discord
          </Link>
          <Link
            className="w-64 h-12 flex justify-center items-center bg-[#1e66f5] hover:scale-110 transition-all"
            target="_blank"
            href="https://www.linkedin.com/in/marcos-baravalle/"
          >
            LinkedIn
          </Link>
          <Link
            className="w-64 h-12 flex justify-center items-center bg-[#40a02b] hover:scale-110 transition-all"
            target="_blank"
            href="https://open.spotify.com/user/marcosfloyd73?si=9919237ba1b84b3e"
          >
            Spotify
          </Link>
        </div>
      </Section>
    </>
  );
};

export default page;
