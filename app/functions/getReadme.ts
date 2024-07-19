export const getReadme = async (owner: string, repo: string) => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
        headers: {
            Accept: 'application/vnd.github.v3.raw'
        }
    })
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = response.text()
    return data
}