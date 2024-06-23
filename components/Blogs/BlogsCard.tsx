import dateParser from "@/utils/dateParser";

export default function BlogsCard({article}) {
    const thumbnail = (article['description'] as any).toString().match(/<img[^>]+src="([^">]+)"/)[1];
    return (
        <a href={article?.guid} target="_blank" className="hover:bg-custom-yellow hover:text-black flex flex-col justify-between border border-gray-500 rounded-md p-2 w-72 h-72">
            <img src={thumbnail} alt={article.title} className="rounded-md" />
            <div className="">
                <h1 className="font-semibold">{article.title}</h1>
                <div className="flex justify-between items-center p-2">
                    <img src={'https://avatars.githubusercontent.com/u/108517094'} alt="vignesh-murugan" className="rounded-full w-10 h-10" />
                    <div className="text-sm">
                        <p>{article?.author}</p>
                        <p>{dateParser(article?.pubDate)}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}