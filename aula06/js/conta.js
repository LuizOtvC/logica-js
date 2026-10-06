const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
    const valor = Number(document.querySelector("#valor").value)
    const pessoas = Number(document.querySelector("#pessoas").value)
    const taxaServico = valor * (10 / 100)
    const valorAPagar = valor + taxaServico
    const resultado = valorAPagar / pessoas
    saida.textContent = "de um valor de " + valor + "R$, e com " + pessoas + " pessoas, a taxa sobre o valor foi de " + taxaServico + " o valor total ficou de " + valorAPagar + "R$, o que são " + resultado + "R$ para cada pessoa"
    }