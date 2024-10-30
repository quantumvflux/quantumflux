import Image from "next/image";
import profile from "@/public/assets/profile-1.jpg";
import { isDialogPlayingAtom, isGameCompleteAtom } from "@/state/store";
import { useAtom } from "jotai";

export const Hero = () => {
  const [_isDialogPlaying, setIsDialogPlaying] = useAtom(isDialogPlayingAtom);
  const [isGameComplete] = useAtom(isGameCompleteAtom);

  const handleClick = () => {
    setIsDialogPlaying(true);
  };

  const gameCompleteStyles = "absolute bottom-0 right-0 text-6xl";

  return (
    <div className="w-full flex justify-center items-center py-32">
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          className="rounded-full h-64 w-64 relative border-4 border-[#f5bde6] hover:cursor-pointer hover:scale-105 transition-all"
          onClick={handleClick}
        >
          <Image
            src={profile}
            alt="Profile"
            fill
            className="object-cover rounded-full"
            priority
          />
          <div className={isGameComplete ? gameCompleteStyles : "hidden"}>
            🐱
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-2xl text-[#f5bde6] text-center">
          <h1 className="font-bold text-6xl">quantum flux</h1>
          <p className="text-lg">(or just quantum)</p>
          <h2 className="mt-6">Software developer</h2>
        </div>
      </div>
    </div>
  );
};
