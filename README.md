# Descrição da API de Comentários

## Tecnologias Utilizadas
- **Node.js**: Plataforma backend para construir a lógica da API.
- **Express.js**: Framework para criação de rotas e controle das requisições HTTP.
- **Mongoose (ou outro ORM)**: Para modelar os dados e facilitar a interação com o MongoDB.
- **MongoDB**: Banco de dados NoSQL para armazenar os comentários enviados pelo formulário.

## Modelo de Dados (Schema)
A API deve conter um modelo de comentário com os seguintes campos:

  # comment
- `name`: Nome do usuário (string, obrigatório).
- `githubUser`: Nome de usuário no GitHub (string, opcional).
- `email`: Endereço de email (string, obrigatório).
- `comment`: Texto do comentário (string, obrigatório).
- `createdAt`: Data de criação do comentário (gerada automaticamente).
  # inscribes
- `name`: Nome do usuário (string, obrigatório).
- `email`: Endereço de email (string, obrigatório).
- `performance`: Área de Atuação (string, obrigatório).
- `experience`: Senioridade (string, obrigatório).
- `workexperience`: Possuo experência (Boolean, opcional).
- `comment`: Texto do comentário (string, obrigatório).
- `createdAt`: Data de criação do comentário (gerada automaticamente).

## Rotas da API

### 1. POST `/api/comments`
Rota para receber e armazenar os dados do formulário de comentário no banco de dados.

- **Dados de Entrada (Body)**:
  - `name`: string
  - `githubUser`: string (opcional)
  - `email`: string
  - `comment`: string

- **Resposta**:
  - Status 201 (Created) em caso de sucesso, com os dados do comentário salvo.
  - Status 400 (Bad Request) em caso de erro de validação dos dados.

### 2. GET `/api/comments`
Rota para buscar e retornar todos os comentários armazenados no banco de dados.

- **Resposta**:
  - Status 200 (OK) com um array de objetos contendo os comentários.
  - Cada objeto conterá:
    - `name`
    - `githubUser`
    - `email`
    - `comment`
    - `createdAt`

### 3. POST `/api/inscribe`
Rota para receber e armazenar os dados do formulário de novos participantes no banco de dados.

- **Dados de Entrada (Body)**:
  - `name`: string
  - `email`: string
  - `performance`: string
  - `experience`: string
  - `workexperience`: Boolean (opcional)
  - `comment`: string

- **Resposta**:
  - Status 201 (Created) em caso de sucesso, com os dados do comentário salvo.
  - Status 400 (Bad Request) em caso de erro de validação dos dados.

### 4. GET `/api/inscribe`
Rota para buscar e retornar todos os participantes armazenados no banco de dados.

- **Resposta**:
  - Status 200 (OK) com um array de objetos contendo os comentários.
  - Cada objeto conterá:
    - `name`
    - `email`
    - `performance`
    - `experience`
    - `workexperience`
    - `comment`
    - `createdAt`

## Validação e Segurança

### Validação
- Verificar se os campos `name`, `email` e `comment` estão presentes e são strings.
- Validar o formato do campo `email` para garantir que seja um email válido.

### Segurança
- Sanitizar o input para evitar ataques XSS (cross-site scripting).
- Implementar proteção contra spam e DDoS, como limitar a taxa de requisições (`rate limiting`).

## Fluxo do Frontend

### Envio de Comentário (POST)
No frontend, ao submeter o formulário, os dados serão enviados para a rota `/api/comments` via uma requisição POST (usando `fetch`, `axios`, ou outra ferramenta).

### Exibição dos Comentários (GET)
O frontend vai consumir a rota `/api/comments` para renderizar os comentários recebidos em uma lista ou seção de feedback na página.

## Respostas da API

### Sucesso
- **201** (Created): Retorna os dados enviados com uma mensagem de sucesso, como `"Comentário enviado com sucesso"`.
- **200** (OK): Retorna os dados buscados com sucesso.

### Erros
- **400** (Bad Request): Quando há erro de validação de entrada, retorna uma mensagem como `"Erro ao salvar o comentário"`.
- **500** (Internal Server Error): Caso haja erro no servidor.

## UI do Formulário de Comentário
Aqui está um exemplo da interface do formulário de comentário que enviará os dados para a API:

![Modelo de Formulário](https://i.imgur.com/r0sH2tX.jpg)

## Considerações Finais
- Separar a lógica da API em controladores, modelos e middlewares.
- Incluir testes para garantir que a API funcione conforme o esperado.
- Adotar práticas de versionamento de API para facilitar a evolução do projeto.


## Contribuintes
Obrigado a todos os que contribuíram para este projeto! 💪

| Nome             | GitHub                                         | Função         |
|------------------|------------------------------------------------|----------------|
| Dinho Silva      | [Ver Perfil](https://github.com/dinhoSilwa) | Back-end  |
| Ludimar Padilha  | [Ver Perfil](https://github.com/LudimarPadilha)  | Back-end       |
