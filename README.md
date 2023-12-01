# Conta de Usuario
 Tela de Login e Cadastro de Usuário
    a. Tela de Login com campos Email/Senha
    b. Tela de Cadastro com os campos Usuário/Emal/Senha/Confirmação Senhai
    c. Tela de Login/Cadastro possui as seguintes validações com Yup
        i. Campo vazio => Todos os campos
        ii. Checar email válido => Campo e-mail
        iii. Chegar Senha/Confirmação Senha com no mínimo 4 dígitos => Campo Senha

 Rotas Privadas
    a. A aplicação não poderá ser acessada caso o login não tenha sucesso, de forma que
    se o(a) usuário(a) tentar acessar diretamente “forçando” a rota, haverá um erro.
