export function Eventos({
    elementos,
    funcoes
    }){
    
    function pesquisarPet(){

    }
    
    function entrarLogin(){
        elementos.sendLogon.addEventListener('click',(event)=>{
            event.preventDefault()
            console.log(elementos.inputPassword.value,elementos.inputUsername.value)
            const positionUser = funcoes.verifyLogin(elementos.inputPassword.value,elementos.inputUsername.value)
            positionUser ? funcoes.freeAccess(positionUser) : funcoes.deniedAccess()
           
        })

    }

    function botaoParaAbrirMenu(){
        elementos.buttonToOpenMenu.addEventListener('click', function(){
            document.querySelector('.buttons-links').classList.toggle('closed')
            document.querySelector('.buttons-links').classList.toggle('open')
            funcoes.toggleOpenButtonMenu()
        })
    }
    
    function fazerLogout(){
        elementos.logoutButton.addEventListener('click', ()=>{
            window.location.reload()
        })
    }
    
    return {
        fazerLogout,
        entrarLogin,
        botaoParaAbrirMenu
    }
}