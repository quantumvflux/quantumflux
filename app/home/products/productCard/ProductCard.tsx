import Image from "next/image";

export const ProductCard = () => {
  return (
    <div className="flex flex-col items-center py-4 px-4 min-h-full w-72 opacity-100 transition-all bg-white rounded-md shadow-md ease-linear">
      <div className="h-64 w-64 relative">
        <Image
          src={"/assets/products/linkz/assets/links.png"}
          alt="Profile"
          fill
          className="rounded-md"
        />
      </div>
      <div className="mb-2 flex flex-col items-center">
        <p className="font-bold text-2xl">LinkWorld</p>
        <p>
          at <span className="font-bold">Abstract</span>
        </p>
      </div>
      <div className="flex justify-start gap-1 flex-wrap">Launching soon!</div>
    </div>
  );
};
