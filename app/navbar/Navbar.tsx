import { LinkSection } from "./navbarItem/LinkSection"
import { SocialsSection } from "./socials/SocialsSection"

export const Navbar = () => {
    return (
        <div className="w-11/12 h-10 m-auto mt-4 rounded-lg text-[#4c4f69] bg-[#ccd0da] flex items-center justify-between px-4 fixed left-0 right-0 z-20 backdrop-blur-sm opacity-80 hover:opacity-100 transition-all">
            <LinkSection />
            <SocialsSection />
        </div>
    )
}
