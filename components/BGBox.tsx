"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import AboutCard from "./AboutCard";

export function BackgroundBoxes() {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate- z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <AboutCard />
        </div>
    );
}
