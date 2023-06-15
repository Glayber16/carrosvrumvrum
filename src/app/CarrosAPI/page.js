import styles from "../styles/Carros.module.css"
export default async function CarrosAPI(){

const response = await fetch("https://apitrainees.herokuapp.com/carros")
const data = await response.json()

const car = data
    return (
       <>

       <h1>Carros:</h1>
       <ul className={styles.listcar}>
        {data.map((data) => (
            <li key={data.id}>{data.nome}</li>
            
        ))}

        {data.map((data) => (
            <li key={data.id}>{data.img}</li>
        ))}
        </ul>
       </>
        
    )
    
}
