interface Props {
    text: string
}

export const Heading = ({ text }: Props) => {
    return (
        <h3 className="text-3xl mb-8 font-bold text-black">
            {text}
            <span className="animate-[ping_0.7s_linear_infinite]">_</span>
        </h3>
    )
}
