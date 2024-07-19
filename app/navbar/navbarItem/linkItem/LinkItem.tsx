import Link from "next/link"

interface Props {
    linkTitle: string;
    url: string;
}

export const LinkItem = ({ linkTitle, url }: Props) => {
    return (
        <Link className="font-medium text-xl hover:font-bold transition-all" href={url}>/{linkTitle}</Link>
    )
}
