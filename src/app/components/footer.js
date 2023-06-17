import Image from "next/image"
import styles from "../styles/Footer.module.css"
export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.pedal}>

            <h1>Entre em contato conosco por meio de nossas midias sociais: </h1>
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

            <div className={styles.canto}>
                <h1>About Us</h1>
                <h1>Services</h1>
            </div>
        </div>
    )
}