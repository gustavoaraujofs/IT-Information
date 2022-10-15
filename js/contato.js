var btn = document.getElementById("botao")
btn.addEventListener("click", fn)
var botao = window.document.getElementById('botao-img')
botao.addEventListener('click', voltarTopo)

//funcão de enviar o formulario para o email
function fn(){
    btn.onsubmit()
    window.alert("Obrigado pelo contato")
}

//função de voltar ao topo
function voltarTopo(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}

