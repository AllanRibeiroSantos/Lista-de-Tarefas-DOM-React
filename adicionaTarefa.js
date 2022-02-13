const conteudoFormulario_inputText = document.querySelector('[data-formulario_textForm]');
const conteudoFormulario_botaoForm = document.querySelector('[data-formulario_botaoForm]');
const conteudo_elementoPai = document.querySelector('[data-conteudo]');

conteudo_elementoPai.onclick = function (event) {
    const formulario_aviso = document.querySelector('.conteudo__formulario--aviso');

    if (event.target == conteudoFormulario_botaoForm) {
        // Elementos pai deve ser declarado aqui, caso contrário quando o botão de Apagar Lista for acionado o documento não conseguirá identificar o novo elemento (.conteudo__tarefas) criado dinamicamente.
        const tarefas_elementoPai = document.querySelector('.conteudo__tarefas');

        if (conteudoFormulario_inputText.value) {
            const divisaoCriada_tarefa = document.createElement('div');

            divisaoCriada_tarefa.classList.add('listaDeTarefas');
            tarefas_elementoPai.appendChild(divisaoCriada_tarefa);

            divisaoCriada_tarefa.innerHTML = `
                <p class="listaDeTarefas__tarefa">${conteudoFormulario_inputText.value}</p>
                <button class="listaDeTarefas__tarefa--botao listaDeTarefas__tarefa--botaoDoneBG botao"  >
                    <span class="material-icons-outlined" data-tarefa_botaoDone>done</span>
                </button>
                <button class="listaDeTarefas__tarefa--botao listaDeTarefas__tarefa--botaoCloseBG botao">
                    <span class="material-icons-outlined" data-tarefa_botaoClose>close</span>
                </button>
            `;

            conteudoFormulario_inputText.value = ""; // Após clicar no botão, o campo de form é esvaziado

            // Remove aviso de erro
            if(formulario_aviso) {
                formulario_aviso.remove();
            }

        // Adiciona mensagem de erro caso o campo esteja vazio
        }else if (!formulario_aviso){
            const formularioTitulo_elementoPai = document.querySelector('[data-formulario_titulo]');
            const conteudoCriado_aviso = document.createElement('p');

            conteudoCriado_aviso.classList.add('conteudo__formulario--aviso');
            conteudoCriado_aviso.textContent = 'Tarefa não foi definida. Escreva algo no campo de texto.';

            formularioTitulo_elementoPai.appendChild(conteudoCriado_aviso);
        }
    }
}
