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
                return  <div key={car.nome}><h1 className={styles.namecar}>{car.nome}:</h1> 
                <div className={styles.imgcar}><Image src={car.img} alt={car.nome} width={475} height={300}></Image> </div>
                <h2 className={styles.descricar}>{car.descricao}:</h2> 
                <h1 className={styles.precar}>{car.preco} </h1>
                </div>
            })}
        </div>

    
        </div>
    )
}

