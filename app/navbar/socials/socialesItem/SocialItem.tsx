import Link from "next/link"

interface Props {
    children: React.ReactNode
    url: string
}
export const SocialItem = ({ children, url }: Props) => {
    return (
        <div className="hover:bg-slate-400 rounded-lg p-1 transition-colors">
            <Link href={url} target="_blank">
                {children}
            </Link>
        </div>
    )
}
