"use client";
import ReadmeViewer from "@/app/components/ReadmeViewer";
import { usePathname } from "next/navigation";
import { projectData } from "@/app/consts/projectData";
import { sanitizeString } from "@/helpers/sanitizeString";
import Link from "next/link";

export const ReadmeSection = () => {
  const pathname = usePathname();
  const repo = pathname.split("/")[2];

  const project = projectData.find(
    (project) => sanitizeString(project.name).toLocaleLowerCase() === repo
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="font-medium text-xl">
      {!project && (
        <div className="flex gap-4 text-2xl font-semibold">
          <Link href={"/"} className="hover:underline">
            Github repo
          </Link>
          <Link href={"/"} className="hover:underline">
            Web page
          </Link>
        </div>
      )}
      <ReadmeViewer owner="quantumvflux" repo={repo} project={project} />
    </div>
  );
};
