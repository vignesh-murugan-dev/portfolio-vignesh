import { ExperiencesCardProps } from "@/types";

export default function ExperiencesCard({experience}: ExperiencesCardProps) {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold">{experience?.jobTitle}, </h1>
                    <h1>{experience?.company}</h1>
                </div>
                <div>
                    <p>{experience?.from} - {experience.to}</p>
                </div>
            </div>
        </>
    )
}