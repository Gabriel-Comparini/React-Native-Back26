<h3 align="center">App CRUD com React Native + JSON Server</h3>

<div align="center">

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

</div>

---

## 🧐 Sobre <a name="sobre"></a>

Este projeto é uma aplicação simples de CRUD (Create, Read, Update, Delete) desenvolvida utilizando React Native em conjunto com o JSON Server como backend fake.

O objetivo do projeto é simular operações básicas de um sistema de usuários, permitindo criar, listar, filtrar, atualizar e deletar dados armazenados em um arquivo `.json` local. É ideal para fins de estudo, testes de integração frontend-backend e prototipagem rápida.

---

## 🏁 Começando <a name="começando"></a>

Estas instruções permitem que você obtenha uma cópia do projeto e o execute localmente para desenvolvimento e testes.

### Pré-requisitos

Você precisa ter instalado:

* Node.js
* npm ou yarn
* JSON Server
* Ambiente React Native configurado (Expo ou CLI)

Para instalar o JSON Server globalmente:

```
npm install -g json-server
```

---

### Instalação

1. Clone o repositório:

```
git clone https://github.com/Gabriel-Comparini/React-Native-Back26.git
```

2. Acesse a pasta do projeto:

```bash
cd React-Native-Back26
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o JSON Server:

```bash
npx json-server --watch database.json --port 8888
```

5. Inicie o Ngrok e vincule ao backend:

```bash
npx ngrok@latest http 8888 
```

6. Inicie o projeto:

```bash
npx expo start
```


## 🎈 Uso <a name="uso"></a>

A aplicação permite:

* ➕ Criar usuários
* 📋 Listar todos os usuários
* 🔍 Filtrar usuários por nome
* ✏️ Atualizar informações de usuários
* ❌ Deletar usuários

Os dados são armazenados localmente no arquivo `database.json`, simulando um banco de dados simples.

---

## ⛏️ Tecnologias <a name="tecnologias"></a>

* JSON Server - Banco de dados fake
* Node.js - Ambiente de execução
* React Native - Interface mobile
* TypeScript - Linguagem

---

## 📽️ Vídeo do mini-projeto <a name="video"></a>

(colocar o vídeo)

---

## ✍️ Autores <a name="autores"></a>

* Gabriel Comparini - Desenvolvimento

---

## 🎉 Agradecimentos <a name="agradecimentos"></a>

* Comunidade open source
* Documentação do JSON Server
* Inspiração em projetos CRUD simples

---
