interface Props {
  children: React.ReactNode;
}
export const Section = ({ children }: Props) => {
  return (
    <div className="bg-surface-0 w-11/12 sm:w-3/4 md:w-1/2 xl:w-[40%] max-w-[1000px] m-auto mb-16 rounded-lg p-8 bg-opacity-90">
      {children}
    </div>
  );
};
