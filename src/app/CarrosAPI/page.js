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
           
        <div>
    
        {cars.map((car) => {
                return console.log(car.img), <img src={cars.img} alt="Carros" width={300} height={300}></img>
            })}
        
        </div>


        <div>

            {cars.map((car) => {
                return <p>{car.nome}: {car.descricao}: {car.preco}</p>
            })}
        </div>

    
        </div>
    )
}

