const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
    const minutos = Number(document.querySelector("#minutos").value)
    const resultado = Math.floor(minutos/60)
    const minu = minutos % 60
    saida.textContent = "o tempo de " + minutos + " minutos equivale em horas : " + resultado + "h e " + minu + "min"
    }