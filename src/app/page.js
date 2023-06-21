import Funcionamento from "./Funcionamento/page"
import Servicos from "./Servicos/page"
import Cardi from "./Cardi/page"
export default function Home() {

  return (
    <main>
    <Servicos></Servicos>
    <Funcionamento></Funcionamento>
    <Cardi> <img src="car.png" alt="" /></Cardi>
    </main>
  )
}
