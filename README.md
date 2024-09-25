# Projeto Full Stack com Laravel e React

Este projeto utiliza **Laravel** como backend e **React** como frontend, com um banco de dados **MySQL**. Abaixo estão as instruções para configurar e executar o projeto.

## Pré-requisitos

- Docker e Docker Compose instalados
- PHP 8+ instalado
- Composer instalado

## Passos para configuração

### 1. Subir o ambiente com Docker

O banco de dados MySQL é executado em um container Docker. Para iniciar o ambiente, basta rodar o seguinte comando:

```bash
docker-compose up -d
```

### 2. Instalar dependências do Laravel

No diretório do projeto, execute o comando abaixo para instalar todas as dependências necessárias do Laravel:

```bash
composer install
```
### 3. Configurar variáveis de ambiente

Crie o arquivo .env baseado no .env.example:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome_do_banco_de_dados
DB_USERNAME=root
DB_PASSWORD=sua_senha
```

### 4. Rodar as migrações do banco de dados
Com o ambiente configurado e o MySQL em execução, rode as migrações do banco de dados utilizando o comando abaixo:
    
```bash
php artisan migrate
```
Este comando criará as tabelas necessárias no banco de dados.

### 5. Instalar dependências do React
Se o projeto já inclui o frontend com React, navegue até o diretório do frontend e instale as dependências:

```bash
npm install
```

### 6. Executar o frontend
Para rodar o frontend em ambiente de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```
Isso irá iniciar o servidor de desenvolvimento do React.

### Outros comandos úteis

Iniciar o servidor do Laravel:

```bash
php artisan serve
```

Parar os containers do Docker:

```bash
docker-compose down
```
Rodar os testes do Laravel:

```bash
php artisan test
```
