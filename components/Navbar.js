import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* <img src="/logo.png" alt="logo" /> */}
                <Image src={`/logo.png`} alt="logo" width={128} height={71}></Image>
            </div>
            <Link href={`/`}><a>Home</a></Link>
            <Link href={`/about`}><a>About</a></Link>
            <Link href={`/waz`}><a>Listing</a></Link>
        </nav>
    );
}

export default Navbar;