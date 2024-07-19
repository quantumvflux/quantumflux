import React, { useEffect, useState } from 'react';
import { getReadme } from '../functions/getReadme';
import ReactMarkdown from 'react-markdown';

type ReadmeViewerProps = {
    owner: string;
    repo: string;
};

const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ owner, repo }) => {
    const [readme, setReadme] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getReadme("quantumvflux", repo);
                setReadme(data);
            } catch (err) {
                setError('Failed to load README');
            }
        };

        getData();
    }, [owner, repo]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!readme) {
        return <div>doing some black magic...</div>;
    }

    return <ReactMarkdown>{readme}</ReactMarkdown>;
};

export default ReadmeViewer;
