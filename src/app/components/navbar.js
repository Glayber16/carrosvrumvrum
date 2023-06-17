import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return(
        <div className={styles.navbar}>
          
            <Link href="/">
               <h1>  Home</h1>
            </Link>
           
           
        <Link href="/CarrosAPI">
            <h1>Carros </h1>
        </Link>
            
        </div>
    )
}