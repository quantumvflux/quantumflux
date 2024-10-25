import { Section } from "@/app/components/Section";
import { ReadmeSection } from "./readmeSection/ReadmeSection";

const page = () => {
  return (
    <Section>
      <hr className="border-t-2 border-text mt-4 mb-2" />
      <ReadmeSection />
    </Section>
  );
};

export default page;
