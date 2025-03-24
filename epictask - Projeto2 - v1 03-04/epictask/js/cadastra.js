document.querySelector("#botao-cadastrar").addEventListener("click", () => { /* () => {} isso e um atalho p criar uma funçao sem nome */

    console.log("clicou no botão")

    const form = document.querySelector("form") /*recebe tds as funçoes q esta no form.html e joga p uma variavel*/

    /*criando obj c as variaveis dentro */
    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    /*agr pegar as informaçoes a parte desse obj e joga p uma variavel*/
    const titulo = form.titulo.value
    const descricao = form.descricao.value
    const pontos = form.pontos.value

    validar(tarefa)
    console.log(tarefa)

    console.log(titulo, descricao, pontos)
})

function validar(tarefa) {
    limparErros()

    if (tarefa.titulo === "") {
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "o Titulo e obrigatorio"
    }

    if (tarefa.descricao === "") {
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "descriçao obrigatoriao"
    }
}

function limparErros() {
    document.querySelector("#titulo").classList.remove("is-error")
    document.querySelector("#titulo-erro").innerText = ""

    document.querySelector("#descricao").classList.remove("is-error")
    document.querySelector("#descricao-erro").innerText = ""
}
    
