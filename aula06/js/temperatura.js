const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
    const C = Number(document.querySelector("#celsius").value)
    const F = C * 9 / 5 + 32
    saida.textContent = "Fahrenheit: " + F.toFixed(1)
    }