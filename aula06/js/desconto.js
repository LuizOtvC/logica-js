const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
    const preco = Number(document.querySelector("#preco").value)
    const desconto = Number(document.querySelector("#desconto").value)
    const descont = desconto / 100
    const descontoFinal = preco * descont
    const resultado = preco - (preco * descont)
    saida.textContent = "o desconto foi de " + descontoFinal + "R$ e o valor final é de " + resultado.toFixed(1)
    }