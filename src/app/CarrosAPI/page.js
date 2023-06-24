'use client'
import styles from "../styles/Carros.module.css"
import Image from "next/image"




const getCarsData = async () => {
    const response = await fetch("https://apitrainees.herokuapp.com/carros")
    return response.json()
}

export default async function CarrosAPI(){
    const cars = await getCarsData()
    return (
        
        <div className={styles.listcar}> 
         
        <div className={styles.allcar}>

            {cars.map((car) => {
                return <div key={car.nome} className={styles.card}><h1 className={styles.namecar}>{car.nome}:</h1> 
       <div className={styles.imgcar}> <Image src={car.img} alt={car.nome} width={350} height={250}></Image> </div>
                <p className={styles.descricar}>{car.descricao}</p> 
                <h1 className={styles.precar}>{car.preco} </h1>
                <button className={styles.box} onClick={console.log()}>
                    <p className={styles.textbutton}>Compre Agora</p>
                </button>
                </div>
            })}
        </div>

    
        </div>
    )
}

