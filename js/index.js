let button = document.querySelector('#enviar')
let campos = document.querySelectorAll('.input')
let textoCampoObrigatorio = document.querySelectorAll('.campo-obrigatorio')



button.addEventListener('click', ()=> {
    let  contador = 0
    campos.forEach (function(item, index){

        if(item.value === '' ){  
        item.classList.add('campo-vazio');
        textoCampoObrigatorio[index].classList.add('mostrar-campo-obrigatorio')
        
        }else{
            item.classList.remove('campo-vazio');
            textoCampoObrigatorio[index].classList.remove('mostrar-campo-obrigatorio')  
            contador++
        } 

        if(contador === campos.length){
            campos.forEach (function(item){
                item.classList.add('campo-preenchido');
            })  
        }  
    })
})
