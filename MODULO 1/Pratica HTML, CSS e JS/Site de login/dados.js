

function startreg(){
    let email = document.querySelector('input#email')
    let senha = document.querySelector("input#password")
        if(email.value.includes('@') == false&& email.value.includes('.com') == false){
            alert("Email incorreto!")
            } else if(senha == 0 || senha == null){
                alert("Senha incorreta")
                } else {
                    sessionStorage.setItem('email', email.value)
                    sessionStorage.setItem("senha", senha.value)
                    window.location.href = 'site2.html'
                    }
}
function ultpag(){
    let email = sessionStorage.getItem('email')
    let senha = sessionStorage.getItem('senha')
    let emaild = document.querySelector('input#email1')
    let senhad = document.querySelector("input#senha1")
    let msg = document.querySelector("div#msg")
    

    if(email == emaild.value && senha == senhad.value){
        all = []
        window.location.href = 'proximo/p.html'
    } else {
        alert('dados incorretos')
    }
}