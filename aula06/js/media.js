const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
// 1. ler
const n1 = Number(document.querySelector("#nota1").value)
const n2 = Number(document.querySelector("#nota2").value)
// 2. calcular
const media = (n1 + n2) / 2
// 3. mostrar
saida.textContent = "Média: " + media.toFixed(1)
}

/* deu 11.5, pois ele interpretou 2 e 3 como um numero junto, ent ele fez 23 / 2 ao invez de 2 + 3 / 2 */