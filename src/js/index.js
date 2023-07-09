/*
    O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

        OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
            passo 1 -pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles
            passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouser
            passo 3 - verificar se j-a existe um personagem selecionado, se sim, devemos remover a seleção dele

        OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descição do personagem grande 
            passo 1 - pegar o elemento do personagem grande pra adicionar as informações dele 
            passo 2 - alterar a imagem do persongem grande 
            passo 3 - alterar o nome do personagem grande
            passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 -pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');
console.log(personagens);

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouser

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavion: 'smooth'});
        }

        // passo 3 - verificar se j-a existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descição do personagem grande 
        
        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações dele 
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})
function alterarDescricaoPersonagemSelecionado(personagem) {
    const personagemGrandeDescricao = document.getElementById('descricao-personagem');
    personagemGrandeDescricao.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const personagemGrandeTexto = document.getElementById('nome-personagem');
    personagemGrandeTexto.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const personagemGrandeImagem = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do persongem grande 
    const idPersonagem = personagem.attributes.id.value;
    personagemGrandeImagem.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
    console.log(idPersonagem);
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

