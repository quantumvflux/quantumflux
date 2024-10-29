"use client";
import ReadmeViewer from "@/app/components/ReadmeViewer";
import { usePathname } from "next/navigation";
import { projectData } from "@/consts/projectData";
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

  const { readme, link } = project;

  return (
    <div className="font-medium text-xl">
      <div className="flex items-center gap-2">
        {!readme && (
          <>
            <Link
              href={`https://github.com/quantumvflux/${project.name.toLowerCase()}`}
              className="hover:underline text-2xl font-semibold"
              target="_blank"
            >
              Github repo
            </Link>
          </>
        )}
        <Link
          href={link}
          target="_blank"
          className="hover:underline flex gap-4 text-2xl font-semibold"
        >
          Web page
        </Link>
      </div>
      <ReadmeViewer owner="quantumvflux" repo={repo} project={project} />
    </div>
  );
};
