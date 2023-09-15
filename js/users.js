export function Users( {listaAnimais,users}){
    function CreateUser(name,username,password){
        this.name = name
        this.username = username
        this.password = password
        
        this.identifier = createIdentifier()
        
        
        function CreateAnimal(){
            this.nameAnimal = nameAnimal
            this.race = race
            this.age = age 
            this.animalID = this.animalID 
        }
        
    }
    
    function createIdentifier(){
        let duplicata = false
        let codigoID
        while (duplicata == false){
            duplicata = true
            codigoID = Math.round(Math.random()*11)+1
            console.log(listaAnimais.length)
            for(let i = 0; i < users.length; i++){
                if (Number(users[i].identifier ) == codigoID){
                    duplicata = false
                    console.log('achou')
                }
            }
            for(let i = 0; i < listaAnimais.length; i++){
                if (Number(listaAnimais[i].identifier ) == codigoID){
                    duplicata = false
                    console.log('achou')
                }
            }   
                
        }
        
        return String(codigoID).padStart(2,0)
            
    }

    return {
        CreateUser
    }
}