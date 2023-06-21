import Image from "next/image"
import styles from "../styles/Footer.module.css"
import Link from "next/link"
export default function Footer(){
    return(
        <div className={styles.footer}>
            
            <div>
            <h1>Entre em contato conosco: </h1>
            <a href="https://www.instagram.com" target="_blank">
                <img src="/instagram.png" alt="icon do instagram" width={50} height={50} />
            </a>
            <a href="https://twitter.com/home" target="_blank">
                <img src="/twitter.png" alt="icon do twitter" width={50} height={50} />
            </a>
            <a href=" https://wa.me/<>" target="_blank">
                <img src="/whatsapp.png" alt="icon do zap" width={50} height={50} />
            </a> 
            </div>

            <div className={styles.caricon}>
                <Image src={"/car.png"} alt="logo de um carro" width={100} height={100}>

                </Image>
            </div>

            <div className={styles.canto}>
                <Link href="/Funcionamento"> 
                    <h1>About us</h1>
                </Link>
                
                <Link href="/Servicos">
                <h1>Services </h1>
                </Link>

            </div>   
            
        </div>
    )
}