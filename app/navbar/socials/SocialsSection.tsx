import { PiGithubLogoDuotone, PiDiscordLogoDuotone, PiLinkedinLogoDuotone, PiSpotifyLogoDuotone } from "react-icons/pi";

import React from 'react'
import { SocialItem } from "./socialesItem/SocialItem";

export const SocialsSection = () => {

    const items = [
        {
            icon: <PiGithubLogoDuotone />,
            url: "https://github.com/quantumvflux"
        },
        {
            icon: <PiDiscordLogoDuotone />,
            url: "https://discord.com/channels/quantumflux"
        },
        {
            icon: <PiLinkedinLogoDuotone />,
            url: "https://www.linkedin.com/in/marcos-baravalle/"
        },
        {
            icon: <PiSpotifyLogoDuotone />,
            url: "https://open.spotify.com/user/marcosfloyd73?si=9919237ba1b84b3e&nd=1&dlsi=339a3957bb644568"
        }
    ]

    return (
        <div className="hidden sm:flex gap-4 items-center ">
            {items.map(item => (
                <SocialItem key={item.url} url={item.url}>
                    {item.icon}
                </SocialItem>
            ))}
        </div>
    )
}
