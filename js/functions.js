export function Functions({
    elementos,
    users,
    }){

    function freeAccess(i){
        elementos.telaLogin.classList.add('hide')
        elementos.telaMenu.classList.remove('hide')
        elementos.screenMenuSpan.innerText = `${users[i].name}`
        elementos.screenMenuSpan.style.background = 'rgb(99, 102, 151)'
        elementos.screenMenuSpan.style.color = 'rgb(255,255,255)'
        setTimeout(()=>{
            elementos.buttonToMenu.classList.add('open')
        }   ,2000)
    }
        
    function deniedAccess(){
        setTimeout(elementos.alertError.classList.add('alertado'), 2000)
        setTimeout(() => {
            elementos.alertError.classList.add('desalertado')
        }, 2000);
        setTimeout(()=>{removeClassAlert()}, 2000)
        console.log('negado')
    }

    function removeClassAlert(){
        elementos.alertError.classList.remove('desalertado')
        elementos.alertError.classList.remove('alertado')
        
    }
    
    function verifyLogin(username, password){
        username = String(elementos.inputUsername.value)
        password = String(elementos.inputPassword.value)
        for(let i =0; i < users.length; i++){
            if(users[i].username == username && users[i].password == password) 
            return i      
        }
        return false
    }

    function toggleOpenButtonMenu(){
        if(!elementos.imgOpenned){
            elementos.imgFromButtonOpenMenu.style.transform = 'rotate(270deg)'
            elementos.imgOpenned = true
        }
        else{
            elementos.imgOpenned= false
            elementos.imgFromButtonOpenMenu.style.transform = 'rotate(180deg)'
        }
    }
    return {    
    toggleOpenButtonMenu,
    deniedAccess,
    freeAccess,
    removeClassAlert,
    verifyLogin,
    }

}