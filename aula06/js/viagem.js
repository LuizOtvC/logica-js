const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
const distancia = Number(document.querySelector("#distancia").value)
const consumo = Number(document.querySelector("#consumo").value)
const litro = Number(document.querySelector("#preco").value)

const litrosGastos = distancia / consumo
  const custoIda = litrosGastos * preco
  const custoIdaEVolta = custoIda * 2

saida.textContent = "Serão gastos " + litrosGastos.toFixed(1) + " litros de combustível."
}

/* retornou infitity, pois não é possivel dividir por 0 */
