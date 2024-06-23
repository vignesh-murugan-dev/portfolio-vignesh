import Link from "next/link";

export default function Footer() {
    return(
        <div className="py-2 border-t border-gray-500">
            <p className="text-center text-sm">Made with ❤️ by <Link className="underline" href={'https://github.com/vignesh-murugan-dev'} target="_blank">Vignesh Murugan</Link></p>
        </div>
    )
}