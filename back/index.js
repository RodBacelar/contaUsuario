require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const JWT = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Server Online");
});

// Criação de Usuário
app.post("/createUser", async (req, res) => {
    const {username, email, senha} = req.body;
    const usersPath = path.join(__dirname, '.', 'db', 'users.json');
    const usersDB = JSON.parse(fs.readFileSync(usersPath, {encoding: 'utf8', flag: "r"}));

    // Verificação de Email
    for (let user of usersDB) {
        if (user.email === email) {
            return res.status(409).send("Email já Cadastrado. Faça Login!");
        }
    }

    // Gerar ID
    const id = usersDB.length + 1;

    // Gerar Senha Criptografada
    const salt = await bcrypt.genSalt(10);
    const senhaCrypt = await bcrypt.hash(senha, salt);

    // Gerar novo User
    const user = {
        "id": id,
        "username": username,
        "email": email,
        "senha": senhaCrypt
    }

    // Salvar novo User no BD
    usersDB.push(user);
    fs.writeFileSync(usersPath, JSON.stringify(usersDB, null, 2));
    res.send(`Usuario criado com sucesso.`);
});

// Autenticação de Usuário
app.post('/login', async (req, res) => {
    const {emailLogin, senhaLogin} = req.body;
    const usersPath = path.join(__dirname, '.', 'db', 'users.json');
    const usersDB = JSON.parse(fs.readFileSync(usersPath, {encoding: 'utf8', flag: "r"}));

    // Validação de Email
    for (let user of usersDB) {
        if (user.email === emailLogin) {

            // Validação de Senha
            const senhaValid = await bcrypt.compare(senhaLogin, user.senha);
            if (senhaValid) {
                const token = JWT.sign(user, process.env.TOKEN);

                return res.json({"token": token});
            }
            return res.status(422).send("Senha incorreta");
        }
    }
    return res.status(409).send("Email não encontrado. Crie uma conta!");
});

// Rotas Privadas
app.get('/inicio', verificaToken, (req, res) => {
    return res.send('<h1>Pagina Inicial</h1>');
})

// Função Autenticadora
function verificaToken(req, res, next) {
    const authHeaders = req.headers['authorization'];

    const token = authHeaders && authHeaders.split(' ')[1];

    if (token == 'null') {
        return res.status(401).send('Acesso Negado');
    }


    JWT.verify(token, process.env.TOKEN, (err) => {
        if (err) return res.status(403).send('Token Inválido/ Expirado');
        next();
    })

}