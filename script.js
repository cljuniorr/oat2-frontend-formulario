(function () {
    'use strict'

    // 1. Definição de Variáveis (DOM e Bootstrap)
    const form = document.getElementById('cadastroForm');
    const confirmacaoModal = new bootstrap.Modal(document.getElementById('confirmacaoModal'));
    const sucessoModal = new bootstrap.Modal(document.getElementById('sucessoModal'));
    const resumoDadosList = document.getElementById('resumoDados');
    const btnConfirmarCadastro = document.getElementById('btnConfirmarCadastro');

    let dadosColetados = {}; // Objeto para armazenar temporariamente os dados antes da confirmação

    // 2. Listener para o Submit do Formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão
        event.stopPropagation();

        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        const confirmarSenhaInput = document.getElementById('confirmarSenha');
        let formIsValid = true;

        // **Validação de Confirmação de Senha**
        if (senha !== confirmarSenha) {
            confirmarSenhaInput.classList.add('is-invalid');
            document.getElementById('feedbackConfirmarSenha').textContent = 'As senhas não conferem.';
            formIsValid = false;
        } else {
            confirmarSenhaInput.classList.remove('is-invalid');
            confirmarSenhaInput.classList.add('is-valid');
        }

        // **Validação Padrão do Bootstrap/HTML5 (Campos obrigatórios e Regex de Email)**
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            formIsValid = false;
        } else {
            form.classList.add('was-validated');
        }

        // 3. Processamento e Abertura do Modal (Apenas se todas as validações passarem)
        if (formIsValid && form.checkValidity()) {

            // Coleta dos dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const interesses = Array.from(document.querySelectorAll('.interesse-checkbox:checked'))
                .map(cb => cb.value)
                .join(', ') || 'Nenhum Selecionado';

            // Armazenamento dos dados para o teste (LGPD: Senha mantida, mas não exposta no HTML)
            dadosColetados = {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone || 'Não Informado',
                interesses: interesses
            };

            // Monta o resumo no Modal
            resumoDadosList.innerHTML = `
                <li class="list-group-item"><strong>Nome:</strong> ${dadosColetados.nome}</li>
                <li class="list-group-item"><strong>E-mail:</strong> ${dadosColetados.email}</li>
                <li class="list-group-item"><strong>Telefone:</strong> ${dadosColetados.telefone}</li>
                <li class="list-group-item"><strong>Interesses:</strong> ${dadosColetados.interesses}</li>
                <li class="list-group-item bg-warning text-dark"><strong>Senha:</strong> ***************** (Não exibida por segurança - LGPD)</li>
            `;

            // Abre o Modal de Confirmação
            confirmacaoModal.show();
        }

    }, false);

    // 4. Listener para o botão de Confirmação do Modal
    btnConfirmarCadastro.addEventListener('click', function () {

        // **TESTE DE CADASTRO / LGPD**
        // Simula o processamento seguro de dados (ex: envio para API ou hash de senha)
        console.log('--- TESTE DE CADASTRO (LGPD - Simulação) ---');
        console.log('Dados do Usuário Processados:');
        console.log(`Email: ${dadosColetados.email}`);
        console.log(`Senha (Hash Simulada): ${dadosColetados.senha.length > 0 ? '********' : 'N/A'}`);
        console.log(`Outros Dados: `, dadosColetados);
        console.log('---------------------------------------------');

        // 1. Fecha o Modal de Confirmação
        confirmacaoModal.hide();

        // 2. Exibe o Modal de Sucesso
        sucessoModal.show();

        // 3. Limpa o formulário para um novo cadastro
        form.reset();
        form.classList.remove('was-validated');
    });
})();