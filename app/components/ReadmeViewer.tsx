import ReactMarkdown from "react-markdown";
import { useReadme } from "@/hooks/useReadme";
import { IProject } from "../../consts/projectData";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "./readmeViewer.css";

type ReadmeViewerProps = {
  project: IProject;
  owner: string;
  repo: string;
};

const ReadmeViewer: React.FC<ReadmeViewerProps> = ({
  project,
  owner,
  repo,
}) => {
  const { readme, error, loading } = useReadme(owner, repo, project.readme);

  if (loading) {
    return <div>doing some black magic...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    >
      {readme}
    </ReactMarkdown>
  );
};

export default ReadmeViewer;
