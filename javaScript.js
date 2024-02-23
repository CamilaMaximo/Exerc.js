
let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [ ]


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,lista){
    if(lista){
        
    if(lista.indexOf(Number(n))  != -1){
        return true
    }else{
        return false
    }
    }
}
//f
function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        // codigo para adicionar na caixa 
        let Item = document.createElement('option')
        Item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(Item)
        res.innerHTML = ''

    }else{
        window.alert('Valor inválido ou já encontrado na lista ')
    }
    // para apagar e voltar o cursos 
    num.value = ''
    num.focus()
}



// parte do botão finalizar 

// nao pode funcionar sem numero dentro da caixa 
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar!')
    }else{
        //quantos tem
        let tot = valores.length
        //soma
        let soma = 0
        let media = 0
        //maior e menor
        let maior = valores[0]
        let menor = valores[0]


        for(let pos in valores){ // laço de percurso
            soma += valores[pos]

            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`



    }
}