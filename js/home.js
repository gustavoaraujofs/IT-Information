//Animações das imagens das notícias do home
var a = window.document.getElementById('img-ifood')
var b = window.document.getElementById('img-IA')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
b.addEventListener('mouseenter', entrar1)
b.addEventListener('mouseout', sair1)

function entrar(){      
    a.style.filter = 'contrast(40%)'
}

function sair(){       
    a.style.filter = 'contrast(100%)'
}

function entrar1(){   
    b.style.filter = 'contrast(40%)'
}

function sair1(){      
    b.style.filter = 'contrast(100%)'
}

//Botão de voltar ao topo
var botao = window.document.getElementById('botao-img')
botao.addEventListener('click', voltarTopo)

function voltarTopo(){
    window.scrollTo(0, 0)
}

//cookies

const cookieCard = document.querySelector(".cookies-card")
const cookieButton = document.querySelector(".btn")
const cookieButtonCancel = document.querySelector(".btnCancel")

cookieButtonCancel.addEventListener("click", function(){
    cookieCard.style.display = 'none';
})

cookieButton.addEventListener("click", function(){
    cookieCard.style.display = 'none';
    localStorage.setItem("cookieAccepted", "true")
})

setTimeout( function(){
    if(localStorage.getItem("cookieAccepted")){
        cookieCard.style.display = 'none';
    }
})