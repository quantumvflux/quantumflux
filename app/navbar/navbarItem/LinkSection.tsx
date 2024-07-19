import { LinkItem } from "./linkItem/LinkItem"

export const LinkSection = () => {
    return (
        <div className="flex justify-center sm:justify-start w-full sm:w-auto gap-4 text-sm">
            <LinkItem url="/" linkTitle="home" />
            <LinkItem url="/projects" linkTitle="projects" />
            <LinkItem url="/socials" linkTitle="socials" />
            <LinkItem url="/" linkTitle="extra" />
        </div>
    )
}
