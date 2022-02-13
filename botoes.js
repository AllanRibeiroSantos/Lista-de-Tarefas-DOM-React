// BOTÃO TAREFA CONCLUÍDA
conteudo_elementoPai.addEventListener('click', function(event){

    const elementoTarefa = document.querySelectorAll('.listaDeTarefas__tarefa');
    const botaoConcluido = document.querySelectorAll('[data-tarefa_botaoDone]');

    for (let contador = 0; contador < botaoConcluido.length; contador++){
        if (event.target == botaoConcluido[contador]) {
            elementoTarefa[contador].classList.add('listaDeTarefas__tarefa--riscado');
            botaoConcluido[contador].classList.add('listaDeTarefas__tarefa--botaoRiscadoCorConcluido');
        }
    }
})

// BOTÃO EXCLUSÃO DE TAREFA
conteudo_elementoPai.addEventListener('click', function(event){

    // Essas duas variáveis devem ser declaradas dentro deste bloco, ou o navegador irá dizer que ambos são NULL por não ter sido criadas ainda
    // O .botaoClose afeta apenas no span, caso eu clique no button o efeito não funciona, talvez eu tenha que mudar o HTML para ele ser apenas um button... tenho que pensar
    const elementoTarefa = document.querySelectorAll('.listaDeTarefas');
    const botaoDeleta = document.querySelectorAll('[data-tarefa_botaoClose]');

    for (let contador = 0; contador < botaoDeleta.length; contador++){
        if (event.target == botaoDeleta[contador]) {
            elementoTarefa[contador].remove();
        }
    }
})

// BOTÃO APAGAR LISTA
const apagarLista = document.querySelector('input[value="Apagar lista"]');

apagarLista.addEventListener('click', function(){
    const tarefas_elementoPai = document.querySelector('.conteudo__tarefas');
    tarefas_elementoPai.remove();

    const tarefas_elementoPai_dinamico = document.querySelector('.conteudo__tarefas');

    if (!tarefas_elementoPai_dinamico) {
        const tarefas_elementoPai_criado = document.createElement('div');
        tarefas_elementoPai_criado.classList.add('conteudo__tarefas');
        conteudo_elementoPai.appendChild(tarefas_elementoPai_criado);
    }    
})
