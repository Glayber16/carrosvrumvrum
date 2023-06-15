import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return(
        <ul className={styles.Navbar}>
            <li>
            <Link href="/">
                Home
            </Link>
            </li>

            <li><Link href="/CarrosAPI">
                Carros
                </Link>
            </li>
        </ul>
    )
}