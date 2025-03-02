
import Link from "next/link";
import Image from "next/image";


const Header = () => {

    return (

        <header>
            <div className="header__container">

                <div className="header__logo text-center">
                    <Image src='/logo.jpg' alt="Logo Website" width={200} height={100} />

                </div>
                <div className="header__nav">

                    <ul>
                        <li><Link href="./" title="Home">Home</Link> </li>
                        <li><Link href='./about' title="About">About</Link></li>
                        <li><Link href='./services'>Services</Link></li>
                        <li><Link href='./portfolio'>Portfolio</Link></li>
                        <li><Link href='./contact'>Contact</Link></li>
                    </ul>

                </div>
            </div>
        </header>

    )

}

export default Header;