"use client"

import { IconContext, IconType } from "react-icons";
import { SkillsCardProps } from "@/types";

export default function SkillsCard({key, title, icon}: SkillsCardProps) {
    const ItemIcon = icon;
    return (
        <div key={key} className="border border-gray-500 rounded-md flex justify-center md:justify-normal items-center space-x-3 font-semibold p-2 hover:bg-custom-yellow">
            <IconContext.Provider value={{ color: "white", size: '2em' }}>
                <div>
                    <ItemIcon />
                </div>
            </IconContext.Provider>
            <span className="hidden md:block">{title}</span>
        </div>
    )
}