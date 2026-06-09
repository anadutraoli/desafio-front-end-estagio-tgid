# Desafio Técnico: Loja Virtual The Sims 4

Este repositório contém a minha resolução do desafio técnico para a vaga de **Estágio em Desenvolvimento Front-End**. O objetivo desse projeto era desenvolver uma aplicação de loja virtual em React que consuma uma API REST, simulada pelo arquivo `db.json` através da dependência JSON Server.

---

## Sobre o Projeto

A aplicação lista os produtos da franquia, permite a visualização individual de cada um e possui um carrinho de compras funcional, onde o usuário pode adicionar/remover itens e visualizar um resumo com o valor total antes de finalizar.

---

##  Funcionalidades Principais

* **Vitrine dinâmica com filtros:** A página inicial exibe os jogos e permite filtrar instantaneamente por "Expansões", "Pacotes de Jogo" ou "Todos", consultando e renderizando os dados do db.json.
* **Carrinho de compras global:** Sistema completo de carrinho gerenciado via Context API. Permite adicionar produtos, remover itens e calcula automaticamente o valor total da compra.
* **Página de Detalhes Dinâmica (Saiba Mais):** Rotas parametrizadas (via React Router) que buscam e exibem as informações completas e o pôster de um jogo específico com base na URL.

---

## 🛠️ Tecnologias Aplicadas

- **React** com **Vite** (Ambiente otimizado de alto desempenho)
- **React Router Dom** (Navegação baseada em histórico de rotas SPA)
- **Context API** (Gerenciamento de estado global)
- **Axios** (Abstração e consumo de requisições assíncronas com `async/await`)

---

## 💻 Como Rodar

### Pré-requisitos

**Pré-requisitos:** Certifique-se de ter o [Git](https://git-scm.com/) e o [Node.js (LTS)](https://nodejs.org/) instalados em sua máquina.

1. Instale o projeto localmente efetuando o clone do repositório:

```bash
# Clonar o repositório do desafio
git clone [https://github.com/anadutraoli/desafio-front-end-estagio-tgid.git](https://github.com/anadutraoli/desafio-front-end-estagio-tgid.git)

# Entrar no diretório
cd desafio-front-end-estagio-tgid

```

2. Instale todas as dependências de desenvolvimento necessárias:

```
npm install
```

3. Inicie a API Simulada (JSON Server):

```
npx json-server src/services/db.json

```

4. Inicialize a aplicação Front-End:
Abra um novo terminal (mantendo a API rodando em outro)

```
npm run dev
```

---
## Desenvolvido por

Desenvolvido por Ana Maria Dutra

Conecte-se comigo no [Linkedin](https://www.linkedin.com/in/anamariadutra/) para acompanhar outros projetos!
