import { IJobz } from "@/app/interfaces/interfaces"
import Image from "next/image"
import Link from "next/link"

export const JobItem = ({ image, description, name }: IJobz) => {
    return (
        <Link href={"/"}>
            <div className="bg-white w-64 flex rounded-md p-4 gap-4 shadow-sm hover:saturate-200">
                <Image src={image} height={100} width={100} alt={name} className="rounded-md" />
                <div>
                    <p className="font-semibold text-xl">{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}
