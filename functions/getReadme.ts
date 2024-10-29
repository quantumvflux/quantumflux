export const getReadme = async (owner: string, repo: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `README for ${owner}/${repo} not found, loading local version.`
      );
      return await fetchLocalReadme();
    }

    return await response.text();
  } catch (error) {
    console.error("Error fetching README:", error);
    return await fetchLocalReadme();
  }
};

const fetchLocalReadme = async () => {
  const response = await fetch("/assets/default-readme.md");
  if (!response.ok) {
    throw new Error("Failed to load local README");
  }
  return await response.text();
};
