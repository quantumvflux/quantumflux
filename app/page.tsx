import { Main } from "@/app/home/main/Main"
import { SkillSection } from "@/app/home/skills/SkillSection"
import { JobsSection } from "./home/jobs/JobsSection"

const page = () => {
  return (
    <>
      <Main />
      <SkillSection />
      <JobsSection />
    </>
  )
}

export default page