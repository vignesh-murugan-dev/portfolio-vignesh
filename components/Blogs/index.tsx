import Link from "next/link";
import BlogsCard from "./BlogsCard";
import { ArticlesProps } from "@/types";

async function getData() {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vignesh_murugan');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
     
    return res.json()
}

export default async function Blogs() {
    const data = await getData();
    const articles = data?.items.slice(0,3);
    return (
        <div  id="blogs" className="mt-10 md:mt-24">
            <h1 className="uppercase text-center text-xl md:text-2xl font-bold my-4 text-custom-yellow underline">Blogs</h1>
            <div className="font-medium md:text-lg text-center">
                <p>I have been writing tech articles since 2023, here are my latest 3 articles...</p>
                <p>You can check <Link href={'https://medium.com/@vignesh_murugan'} target="_blank" className="underline text-custom-yellow">more at my Medium page</Link> as well.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mt-10">
                {
                    articles?.map((article: ArticlesProps, index: number) => {
                        return <div key={index}>
                            <BlogsCard article={article} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}