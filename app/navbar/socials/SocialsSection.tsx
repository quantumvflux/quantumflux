import { PiGithubLogoDuotone, PiDiscordLogoDuotone, PiLinkedinLogoDuotone, PiSpotifyLogoDuotone } from "react-icons/pi";

import React from 'react'
import { SocialItem } from "./socialesItem/SocialItem";

export const SocialsSection = () => {

    const items = [
        {
            icon: <PiGithubLogoDuotone />,
            url: "https://github.com"
        },
        {
            icon: <PiDiscordLogoDuotone />,
            url: "https://github.com"
        },
        {
            icon: <PiLinkedinLogoDuotone />,
            url: "https://github.com"
        },
        {
            icon: <PiSpotifyLogoDuotone />,
            url: "https://github.com"
        }
    ]

    return (
        <div className="hidden sm:flex gap-4 items-center ">
            {items.map(item => (
                <SocialItem url={item.url}>
                    {item.icon}
                </SocialItem>
            ))}
        </div>
    )
}
