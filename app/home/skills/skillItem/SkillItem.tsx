interface Props {
    name: string
    children: React.ReactNode
}

export const SkillItem = ({ name, children }: Props) => {
    return (
        <div className="flex items-center gap-1 bg-base text-white w-fit py-1 px-2 text-sm rounded-md">
            {children}
            {name}
        </div>
    )
}
