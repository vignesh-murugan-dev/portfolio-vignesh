"use client"

import { SkillList } from "@/config/skillList";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  const skills = SkillList;
  return (
    <div id="skills" className="mt-10 md:mt-24">
      <h1 className="uppercase text-center text-xl md:text-2xl font-bold my-4 text-custom-yellow underline">
        Skills
      </h1>
      <div className="grid grid-cols-3 w-1/2 gap-4 mx-auto">
        {SkillList?.map((item) => (
          <SkillsCard key={item.id} title={item.title} icon={item.Icon} />
        ))}
      </div>
    </div>
  );
}
