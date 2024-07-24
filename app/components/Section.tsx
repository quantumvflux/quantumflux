interface Props {
    children: React.ReactNode
}
export const Section = ({ children }: Props) => {
    return (
        <div className="bg-surface-0 w-11/12 sm:w-3/4 md:w-1/2 m-auto mb-16 rounded-lg p-8 bg-opacity-80 hover:bg-opacity-100 transition-all">
            {children}
        </div>
    )
}
