import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import Image from "next/image";
export default function Navbar() {
    return(
        <div className={styles.navbar}>
            
            <Image src={"/car.png"} alt="logo de um carro" width={100} height={100}></Image>
        <div className={styles.links}> 
            <Link href="/">
               <h1>  Home</h1>
            </Link>
           
           
        <Link href="/CarrosAPI">
            <h1>Carros </h1>
        </Link>
            </div>
        </div>
    )
}