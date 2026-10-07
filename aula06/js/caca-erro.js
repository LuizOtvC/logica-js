    const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
botao.onclick = () => {
const n1 = Number(document.querySelector("#nota1").value)
const n2 = Number(document.querySelector("#nota2").value)
const n3 = Number(document.querySelector("#nota3").value)
const media = (n1 + n2 + n3) / 3
saida.textContent = "Média: " + media
    }


    /* 1 - não calculava, calcula esta errado, é calcular no querySelector
    2 -  o resultado não batia com a conta, faltou () para dar prioridade para o n1 + n2 + n3
    3 - numeros não somam, faltou colocar Number antes dos document.QuerySelector, nos n1, n2 e n3
    */
