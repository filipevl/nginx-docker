# Desafio Full Cycle - Nginx como Proxy Reverso

Este projeto demonstra a utilização do Nginx como proxy reverso para uma aplicação Node.js que interage com um banco de dados MySQL. O fluxo é simples: quando um usuário acessa o Nginx, ele faz uma chamada para a aplicação Node.js, que por sua vez adiciona um registro na tabela `people` do banco de dados MySQL e retorna uma lista de nomes cadastrados junto com uma mensagem.

## Estrutura do Projeto

- **Nginx**: Servidor web que atua como proxy reverso.
- **Node.js**: Aplicação que gerencia as operações de registro e consulta no banco de dados.
- **MySQL**: Banco de dados relacional que armazena os nomes cadastrados.

## Requisitos

- Docker
- Docker Compose

## Instruções para execução

1. Clone o repositório:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Execute o Docker Compose:

   ```sh
   docker-compose up -d
   ```

3. Acesse a aplicação no navegador:

   ```
   http://localhost:8080
   ```

## Detalhes da Implementação

### Docker Compose

O arquivo `docker-compose.yml` define os serviços necessários:

- **app**: Serviço para a aplicação Node.js.
- **nginx**: Serviço para o servidor Nginx.
- **db**: Serviço para o banco de dados MySQL.

### Aplicação Node.js

A aplicação Node.js é responsável por:

- Conectar ao banco de dados MySQL.
- Adicionar um novo nome na tabela `people` a cada requisição.
- Retornar uma mensagem HTML com a lista de nomes cadastrados.

### Nginx

O Nginx atua como proxy reverso, redirecionando as requisições para a aplicação Node.js.

## Estrutura dos Arquivos

```
.
├── docker-compose.yml
├── app
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── nginx
│   └── default.conf
└── README.md
```

## Conclusão

Com este setup, o Nginx atua como proxy reverso para a aplicação Node.js, que interage com um banco de dados MySQL. Basta rodar `docker-compose up -d` para ter o ambiente funcionando. Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Este README deve cobrir todos os aspectos necessários para configurar e rodar seu projeto. Se precisar de mais alguma coisa, estou à disposição!