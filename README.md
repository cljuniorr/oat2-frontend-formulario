### Projeto de Cadastro de Usuários com Validação (Sem Acessos)

Este projeto é uma demonstração de um formulário de cadastro de usuários moderno e responsivo, implementado com **Bootstrap 5**, **HTML Semântico**, **CSS customizado** e **JavaScript funcional** para validação em *front-end*.

### Funcionalidades Chave

* **Design Responsivo:** Utiliza o **Grid System** do Bootstrap 5.
* **Labels Flutuantes:** Implementação de campos com *labels* flutuantes e *placeholders* explicativos.
* **Validação Visual:** Feedback imediato de campos obrigatórios, validação de e-mail (Regex) e confirmação de senha.
* **LGPD-Friendly (Teste de Cadastro):** Não utiliza `QueryString` para dados sensíveis. Os dados são processados via JS e o teste de cadastro é feito exibindo as informações (incluindo senha) de forma segura no **Console**.
* **Modal de Confirmação:** Exibe um resumo dos dados antes da submissão final.
* **Estilo Moderno:** CSS personalizado com foco em cores vivas (verde e azul) inspirado na paleta visual da DIO.

### Estrutura do Projeto

| Arquivo | Propósito |
| :--- | :--- |
| `index.html` | Estrutura principal, HTML Semântico e componentes Bootstrap (incluindo Modals). |
| `style.css` | Estilização personalizada para o design moderno e visual vibrante. |
| `script.js` | Lógica de validação do formulário, coleta de dados, controle de Modals e simulação de cadastro (teste LGPD). |

### Como Executar o Teste de Cadastro

1. Abra o arquivo `index.html` no seu navegador.
2. Abra as **Ferramentas do Desenvolvedor** (`F12`).
3. Vá para a aba **Console**.
4. Preencha o formulário e clique em **Cadastrar**.
5. No modal de confirmação, clique em **Confirmar Cadastro**.

Os dados, incluindo o e-mail e a senha (para teste de processamento), serão exibidos no **Console**, confirmando a correta captura e o fluxo de segurança do *front-end*.
