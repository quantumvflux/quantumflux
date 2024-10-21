import { getReadme } from "@/app/functions/getReadme";
import { useEffect, useState } from "react";

type UseReadmeResult = {
  readme: string | null;
  error: string | null;
  loading: boolean;
};

export const useReadme = (
  owner: string,
  repo: string,
  localReadmePath?: string
): UseReadmeResult => {
  const [readme, setReadme] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocalReadme = async () => {
      try {
        const response = await fetch(localReadmePath!);
        if (!response.ok) throw new Error("Local README not found");
        const data = await response.text();
        setReadme(data);
      } catch (err) {
        setError("Failed to load local README");
      } finally {
        setLoading(false);
      }
    };

    const fetchRemoteReadme = async () => {
      try {
        const data = await getReadme(owner, repo);
        setReadme(data);
      } catch (err) {
        setError("Failed to load remote README");
      } finally {
        setLoading(false);
      }
    };

    if (localReadmePath) {
      fetchLocalReadme();
    } else {
      fetchRemoteReadme();
    }
  }, [owner, repo, localReadmePath]);

  return { readme, error, loading };
};
