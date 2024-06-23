import Link from "next/link";

export default function ThingsIDoCard() {
  return (
    <div className="bg-[#d0a63c] mt-16 md:mt-0 border border-black p-3 rounded-md shadow-xl text-md md:text-xl space-y-4 text-custom-yellow">
        <p className="text-black text-center underline font-bold text-xl md:text-2xl">Things I do</p>
      <p className="font-bold text-black">
        Codes: <span className="font-normal">JavaScript, TypeScript, Java, Python</span>
      </p>
      <p className="font-bold text-black">
        Leads:{" "}
        <span className="font-normal">
          Organizer & Speaker at{" "}
          <Link href={"https://jslovers.com"} target="_blank" className="underline">JSLovers</Link>, Chennai chapter
        </span>
      </p>
      <p className="font-bold text-black">
        Likes: <span className="font-normal ">Coffee, Community, Memes</span>
      </p>
      <p className="font-bold text-black">
        Pastime: <span className="font-normal ">Calligraphy, Books</span>
      </p>
    </div>
  );
}
