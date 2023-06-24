import styles from "../styles/Servicos.module.css"
export default function Servicos(){
    return(
    <div>
        <div className={styles.serv}>
            <div className={styles.servi}>
            <h1>Serviços</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>  Aperiam, obcaecati maxime. Quod accusamus, dolorem iusto ducimus</p> 
            <p>  eveniet deserunt aliquam voluptatem iste quis recusandae vel commodi o</p>
            <p>  fficia iure nisi porro dicta!</p>
           </div>
          
        </div>
         <div className={styles.carphoto}> 
            <img src="carban.png" alt="carro de lado"/>
            </div>
        </div>
    )
}