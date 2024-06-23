import { IconType } from "react-icons";

export type IconProviderProps = {
    Icon: IconType,
    iconColor: string,
}

export type SkillsCardProps = {
    key: number,
    title: string,
    icon: IconType
}

export type ExperienceProps = {
    id: number,
    jobTitle: string,
    company: string,
    from: string,
    to: string,
    work: string[]
}

export interface ExperiencesCardProps {
    experience: ExperienceProps;
  }
  