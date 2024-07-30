const express = require('express'); // Importa o framework Express para criar o servidor web.
const bodyParser = require('body-parser'); // Middleware para analisar o corpo das requisições HTTP.
const mongoose = require('mongoose'); // Biblioteca para conectar e interagir com o MongoDB.
const bcrypt = require('bcryptjs'); // Biblioteca para hash e verificação de senhas.
const cors = require('cors'); // Middleware para permitir requisições de outros domínios.

const app = express(); // Cria uma instância do express.

mongoose.connect('mongodb://localhost:27017/bankWalves'); // Conecta ao banco de dados MongoDB.

app.use(cors()); // Permite requisições de outros domínios.
app.use(bodyParser.urlencoded({ extended: true })); // Configura o body-parser para analisar dados URL-encoded.
app.use(bodyParser.json()); // Configura o body-parser para analisar dados JSON.

const UserSchema = new mongoose.Schema({ // Define o esquema de dados para usuários.
    username: String, // Campo username do tipo string.
    password: String, // Campo password do tipo string (será armazenado como hash).
});

const User = mongoose.model('User', UserSchema); // Cria o modelo User baseado no esquema definido.

app.post('/register', async (req, res) => { // Define a rota POST para registro de usuários.
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Gera o hash da senha com um fator de custo 10.

    const newUser = new User({ // Cria uma nova instância do modelo User.
        username: username, // Define o campo username.
        password: hashedPassword, // Define o campo password com o hash gerado.
    });

    newUser.save() // Salva o novo usuário no banco de dados.
        .then(() => res.status(201).send('Registrado com sucesso!')) // Responde com sucesso.
        .catch(err => res.status(500).send('Erro ao registrar!')); // Responde em caso de falha.
});

app.listen(3001, () => { // Inicia o servidor na porta 3001.
    console.log('Servidor rodando na porta 3001'); // Loga no console que o servidor está rodando.
});
