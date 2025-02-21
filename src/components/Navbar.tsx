import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar flex items-center justify-between h-20 px-8 fixed top-0 w-full z-50 border-b-2 border-b-[--border-color]">
            {/* logo */}
            <div>
                <Link href="/">
                    <Image src="/logo/arusai-light-logo-transparent.png" alt="Arusai Logo" width={100} height={150}/>
                </Link>
            </div>

            {/* nav links */}
            <div>
                <ul className="flex list-none gap-7 text-lg font-semibold items-center">
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><button className="bg-red-950 py-1 px-4 rounded-md shadow-2xl shadow-red-800/50 font-bold text-md hover:shadow-red-900/50 hover:shadow-xl hover:bg-red-900"><Link href="/contact">Contact</Link></button></li>
                </ul>
            </div>
        </nav>
    )
}