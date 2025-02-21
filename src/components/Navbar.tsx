import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar flex items-center justify-between h-20 px-0 fixed top-0 w-full z-50">
            {/* logo */}
            <div>
                <Link href="/">
                    <Image src="/logo/arusai-light-logo-transparent.png" alt="Arusai Logo" width={250} height={150}/>
                </Link>
            </div>

            {/* nav links */}
            <div>
                <ul className="flex list-none gap-4">
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}