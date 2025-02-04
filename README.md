<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="logo-do-projeto">
</p>
<p align="center">
    <h1 align="center">FOOD-COMPOSITION-SCRAPER</h1>
</p>
<p align="center">
    <em><code>► INSERIR TEXTO AQUI</code></em>
</p>
<p align="center">
	<em>Desenvolvido com as ferramentas e tecnologias abaixo.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON">
</p>

---

## 📌 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Módulos](#-módulos)
- [Começando](#-começando)
  - [Instalação](#-instalação)
  - [Uso](#-uso)
  - [Testes](#-testes)
- [Roadmap do Projeto](#-roadmap-do-projeto)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Agradecimentos](#-agradecimentos)

---

## 📌 Visão Geral

🥗 **Food Composition Scraper** é um projeto de **web scraping** para extrair informações nutricionais de alimentos.

🔹 **Frontend**: ReactJS ⚛️, NextJS 🚀, TailwindCSS 💨, Shadcn/UI 🎨, TypeScript 🔤, Zod 🧩.  
🔹 **Backend**: C# 💻, .NET Core 6 🖥️, Html Agility Pack 🧑‍💻, Entity Framework 📦, PostgreSQL 🗃️.

---

## 🚀 Funcionalidades

✅ Extração de dados nutricionais via Web Scraping.  
✅ API REST para consultar alimentos e suas propriedades.  
✅ Interface web para exibir os dados extraídos.  
✅ Filtros e paginação para listar os alimentos.  
✅ Suporte a banco de dados **PostgreSQL**.

---

## 📂 Estrutura do Repositório

```sh
food-composition-scraper/
├── README.md
├── backend.test/
│   │   ├── Controllers/
│   │   │   └── FoodItemController.cs
├── backend/
│   ├── src/
│   │   ├── Controllers/
│   │   │   └── FoodItemController.cs
│   │   ├── Data/
│   │   │   ├── AppDbContext.cs
│   │   │   └── DatabaseSeeder.cs
│   │   ├── Services/
│   │   │   ├── WebScrapingService.cs
│   │   │   ├── FoodItemService.cs
│   │   ├── Models/
│   │   │   ├── FoodItem.cs
│   │   │   ├── Component.cs
│   │   ├── Services/
│   │   │   ├── ComponentService.cs
│   │   │   ├── FoodItemService.cs
│   │   │   └── WebScrapingService.cs
│   │   ├── Dtos/
│   │   │   ├── PagedFoodItemsResponse.cs
│   │   │   └── Pagination.cs
│   ├── backend.sln
│   ├── docker-compose.yml
│   ├── appsettings.json
│   └── Program.cs
├── frontend/
│   ├── .vs/
│   |   ├── extensions.json
│   |   └── settings.json
│   ├── src/
│   │   ├── app/
│   │	│   ├── (home)/
│   │   │   │   ├── details/
|   │   │   │   │   ├── [code]/
|   |   │   │   │   │   └── page.tsx
|   |   │   │   │   └── component-table.tsx
|   |   │   │   ├── food-item-table-container.tsx
|   |   │   │   ├── food-item-table.tsx
|   |   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── skeletons/
│   │   │   │   └── table-skeleton.tsx
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── table.tsx
│   │   │   ├── header.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── search.tsx
│   │   │   └── pagination.tsx
│   │   ├── services/
│   │   │   ├── get-food-items.ts
│   │   │   └── get-components.ts
│   │   ├── constants/
│   │   │   └── @food-item.ts	
│   │   ├── env/
│   │   │   └── index.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── lib/
│   │   │   └── utils.tsx
│   │   │   ├── models/
│   │   │   |   ├── schemas/
│   │   │   |   |   ├── zod/
│   │   │   |   |   |   ├── component-schema.ts
│   │   │   |   |   |   ├── food-item-schema.ts
│   │   │   |   |   |   └── pagination-schema.ts	
│   ├── eslint.config.ts
│   ├── environment.d.ts
│   ├── components.json
│   ├── .prettierrc
│   ├── .gitignore
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── .gitignore
|   └── .env.example
```

---

## 🔹 Módulos

### 📌 **Backend**

| Arquivo                     | Descrição                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `FoodItemController.cs`     | Controlador que gerencia requisições para buscar informações nutricionais.            |
| `WebScrapingService.cs`     | Serviço que realiza o **scraping** das informações nutricionais.                      |
| `FoodItemService.cs`        | Serviço que processa e retorna os dados do banco de dados.                            |
| `AppDbContext.cs`           | Classe que gerencia a conexão com o banco **PostgreSQL** usando **Entity Framework**. |
| `DatabaseSeeder.cs`         | Popula o banco de dados com alimentos de exemplo.                                     |
| `PagedFoodItemsResponse.cs` | Define o formato da resposta para listagem paginada de alimentos.                     |
| `docker-compose.yml`        | Configuração do **PostgreSQL** para rodar em container Docker.                        |

### 🎨 **Frontend**

| Arquivo              | Descrição                               |
| -------------------- | --------------------------------------- |
| `get-food-items.ts`  | Serviço que busca os alimentos via API. |
| `button.tsx`         | Componente reutilizável de **botão**.   |
| `table.tsx`          | Componente reutilizável de **tabela**.  |
| `next.config.ts`     | Configuração do **Next.js**.            |
| `tailwind.config.ts` | Configuração do **TailwindCSS**.        |

---

## ⚙️ Começando

### ✅ Requisitos

- **.NET Core 6**
- **Node.js 18+**
- **PostgreSQL**

### 📥 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/FranciscoYlderlan/food-composition-scraper
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd food-composition-scraper
   ```
3. Instale as dependências do backend:
   ```sh
   dotnet build
   ```
4. Instale as dependências do frontend:
   ```sh
   cd frontend && npm install
   ```

### ▶️ Uso

Rodando o **backend**:

```sh
dotnet run
```

Rodando o **frontend**:

```sh
cd frontend
npm run dev
```

---

## 🛤️ Roadmap do Projeto

- [x] Criar API para scraping e banco de dados.
- [x] Criar interface para visualização dos alimentos.
- [ ] Melhorar o design e adicionar **gráficos** interativos.
- [ ] Criar testes unitários para os serviços.

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. **Faça um fork** do repositório.
2. **Crie um branch** para suas alterações.
3. **Faça um commit** descritivo.
4. **Crie um Pull Request**.

---

## 📜 Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/).

---

## 🙌 Agradecimentos

Agradecimentos a todas as tecnologias envolvidas e à comunidade open-source!

[**Voltar ao topo**](#-visão-geral)

```

```
