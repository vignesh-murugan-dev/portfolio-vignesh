import { experiences } from "@/config/experienceList"
import ExperiencesCard from "./ExperiencesCard"

export default function Experiences() {
    return (
        <div className="mt-10 md:mt-24">
            <h1 className="uppercase text-center text-xl md:text-2xl font-bold my-4 text-custom-yellow underline">Experiences</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="col-start-2 row-start-1 border p-2 rounded-md hover:bg-custom-yellow hover:text-black"><ExperiencesCard experience={experiences[0]} /></div>
                <div className="col-start-1 row-start-2 border p-2 rounded-md hover:bg-custom-yellow hover:text-black"><ExperiencesCard experience={experiences[1]} /></div>
            </div>
        </div>
    )
}