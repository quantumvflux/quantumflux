import Image from "next/image"
import { getRandomPfp } from "@/app/consts/data"

export const Hero = () => {
    const pfp = getRandomPfp()

    return (
        <div className="w-full flex justify-center items-center py-32">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="rounded-full overflow-hidden h-64 w-64 relative border-4 border-[#f5bde6] ">
                    <Image src={pfp.imageUrl} alt="Profile" fill className="object-cover" priority />
                </div>
                <div className="flex flex-col items-center gap-4 text-2xl text-[#f5bde6] text-center">
                    <h1 className="font-bold text-6xl ">Marcos Baravalle</h1>
                    <h2>Software engineer</h2>
                </div>
            </div>
        </div>
    )
}
