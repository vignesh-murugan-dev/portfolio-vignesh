
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface Data {
  id: number;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  image: string;
}

export function ThreeDCard({ key, data }: {key: number, data : Data}) {
  return (
    <CardContainer className="inter-var rounded-lg bg-gradient-to-r from-slate-800 to-yellow-600 " key={key}>
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white dark:text-white"
        >
          {data?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {data?.description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={data?.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as={Link}
            href={data?.liveLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live link
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as={Link}
            href={data?.githubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
