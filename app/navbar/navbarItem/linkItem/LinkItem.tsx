import Link from "next/link";

interface Props {
  data: string;
}

export const LinkItem = ({ data }: Props) => {
  const formattedData = data === "/" ? "/home" : data;
  return (
    <Link
      className="font-medium text-xl hover:font-bold transition-all"
      href={data}
    >
      {formattedData}
    </Link>
  );
};
