import { Main } from "@/app/home/main/Main";
import { SkillSection } from "@/app/home/skills/SkillSection";
import { JobsSection } from "./home/jobs/JobsSection";
import { WorksSection } from "./home/works/WorksSection";
import { ContactSection } from "./home/contact/ContactSection";
import { ProductsSection } from "./home/products/ProductsSection";

const page = () => {
  return (
    <>
      <Main />
      <JobsSection />
      <ProductsSection />
      <WorksSection />
      <SkillSection />
      <ContactSection />
    </>
  );
};

export default page;
