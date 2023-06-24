import styles from "../styles/Banner.module.css"
import Image from "next/image"

export default function Banner(){

    return(
        <div className={styles.banner}> 
            <h1>Encontre aqui o carro dos seus sonhos</h1>
            <h1>Encontre a solução dos seus problemas</h1>
            <p>Carros para suprir todas as suas necessesidades e desejos</p>
            <img src="/catwo.png" alt="foto do carro" className={styles.carpic}/>
        </div>
    )
}