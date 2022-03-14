/*
quando clicar no pokemon ocultar o outro na listagem

1- listagem
2- cartao pokemon

crir 2 var para os elementos na tela

remover a classe aberto(display block)

evento de clique(2)

id para cada pokemon para identificar qual cartao mostrar

remover a classe ativo na listagem
*/

const listagem = document.querySelectorAll('.pokemon')
const cartaoPokemon = document.querySelectorAll('.cartao_pokemon') 

//evento de clique
listagem.forEach(pokemon => {
    pokemon.addEventListener('click',() => {
        
        //remover a classe aberto(display block)
       
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //id para cada pokemon para identificar qual cartao mostrar
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao_' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        //remover a classe ativo na listagem

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo na listagem

         const pokemonselecionadonaLista = document.getElementById(idPokemonSelecionado)
         pokemonselecionadonaLista.classList.add('ativo')

    })
})