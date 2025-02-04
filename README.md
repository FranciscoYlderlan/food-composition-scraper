<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="logo-do-projeto">
</p>
<p align="center">
    <h1 align="center">FOOD-COMPOSITION-SCRAPER</h1>
</p>
<p align="center">
    <em>🥗 Food Composition Scraper é um projeto de web scraping para extrair dados sobre alimentos e suas composições. Usa ReactJS ⚛️, NextJS 🚀, TailwindCSS 💨, Shadcn/UI 🎨, TypeScript 🔤, e Zod 🧩 no frontend. No backend, utiliza C# 💻, .NET Core 6 🖥️, Html Agility Pack 🧑‍💻, Entity Framework 📦 e PostgreSQL 🗃️.</em>
</p>
<p align="center">
	<em>Desenvolvido com as ferramentas e tecnologias abaixo.</em>
</p>
<p align="center">
<img src="https://img.shields.io/badge/ReactJS-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="ReactJS">
<img src="https://img.shields.io/badge/NextJS-000000.svg?style=flat-square&logo=Next.js&logoColor=white" alt="NextJS">
<img src="https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=flat-square&logo=Tailwind%20CSS&logoColor=white" alt="TailwindCSS">
<img src="https://img.shields.io/badge/Shadcn/UI-FFFFFF.svg?style=flat-square&logo=shadcnui&logoColor=black" alt="Shadcn/UI">
<img src="https://img.shields.io/badge/TanStack-FF4154.svg?style=flat-square&logo=TanStack&logoColor=white" alt="TanStack">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/pnpm-F69220.svg?style=flat-square&logo=pnpm&logoColor=fff" alt="pnpm">
<img src="https://img.shields.io/badge/Zod-3178C6.svg?style=flat-square&logo=Zod&logoColor=white" alt="Zod">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black" alt="Prettier">
<img src="https://img.shields.io/badge/C%23-239120.svg?style=flat-square&logo=C%20Sharp&logoColor=white" alt="C#">
<img src="https://img.shields.io/badge/.NET%208-512BD4.svg?style=flat-square&logo=.NET&logoColor=white" alt=".NET 8">
<img src="https://img.shields.io/badge/Html%20Agility%20Pack-00599C.svg?style=flat-square&logo=HTML5&logoColor=white" alt="Html Agility Pack">
<img src="https://img.shields.io/badge/Entity%20Framework-512BD4.svg?style=flat-square&logo=.NET&logoColor=white" alt="Entity Framework">
<img src="https://img.shields.io/badge/PostgreSQL-336791.svg?style=flat-square&logo=PostgreSQL&logoColor=white" alt="PostgreSQL">
<img src="https://img.shields.io/badge/FakeItEasy-000000.svg?style=flat-square&logo=FakeItEasy&logoColor=white" alt="FakeItEasy">
<img src="https://img.shields.io/badge/xUnit.net-5A2D91.svg?style=flat-square&logo=xUnit&logoColor=white" alt="xUnit.net">

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

| Arquivo                     | Descrição                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------|
| `FoodItemController.cs`     | Controlador responsável por gerenciar as requisições para busca de informações sobre alimentos.             |
| `WebScrapingService.cs`     | Serviço encarregado de realizar o **web scraping** das informações nutricionais de alimentos.               |
| `FoodItemService.cs`        | Serviço que processa os dados de alimentos e retorna as informações armazenadas no banco de dados.          |
| `ComponentService.cs`       | Serviço que processa os dados dos componentes alimentares e retorna as informações do banco de dados.       |
| `AppDbContext.cs`           | Classe que gerencia a conexão com o banco de dados **PostgreSQL** utilizando **Entity Framework**.          |
| `DatabaseSeeder.cs`         | Responsável por popular o banco de dados com dados de alimentos extraídos, caso esteja vazio (lote de 100). |
| `PagedFoodItemsResponse.cs` | Define o formato de resposta para a listagem paginada de alimentos.                                         |
| `Component.cs`              | Entidade que representa os componentes dos alimentos.                                                       |
| `FoodItem.cs`               | Entidade que representa os alimentos.                                                                       |
| `Program.cs`                | Arquivo principal de inicialização da aplicação.                                                            |
| `FoodItemControllerTest.cs` | Arquivo destinado à realização de testes dos serviços relacionados a alimentos.                             |
| `docker-compose.yml`        | Arquivo de configuração para rodar o **PostgreSQL** em um container Docker.                                 |

### 🎨 **Frontend**

| Arquivo                                       | Descrição                                                                                       |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `.vs/extensions.json`                         | Arquivo de configurações de extensões para o Visual Studio.                                     |
| `.vs/settings.json`                           | Configurações gerais do Visual Studio para o projeto.                                           |
| `src/app/home/details/[code]/page.tsx`        | Componente responsável pela renderização da página de detalhes de um item específico.           |
| `src/app/home/details/component-table.tsx`    | Componente que exibe uma tabela com informações detalhadas sobre os alimentos.                  |
| `src/app/home/food-item-table-container.tsx`  | Componente contêiner que gerencia a renderização de uma lista de alimentos.                     |
| `src/app/home/food-item-table.tsx`            | Componente responsável por exibir uma tabela de alimentos.                                      |
| `src/app/home/page.tsx`                       | Componente principal da página de "home", responsável por carregar o conteúdo inicial.          |
| `src/components/skeletons/table-skeleton.tsx` | Componente de esqueleto para exibir um carregamento de tabela enquanto os dados são carregados. |
| `src/components/ui/button.tsx`                | Componente de botão reutilizável da interface.                                                  |
| `src/components/ui/input.tsx`                 | Componente de campo de entrada reutilizável da interface.                                       |
| `src/components/ui/skeleton.tsx`              | Componente de esqueleto para carregar elementos enquanto o conteúdo está sendo carregado.       |
| `src/components/ui/table.tsx`                 | Componente de tabela reutilizável para exibição de dados tabulares.                             |
| `src/components/header.tsx`                   | Componente de cabeçalho da aplicação, provavelmente exibindo o título e navegação.              |
| `src/components/pagination.tsx`               | Componente de paginação para navegação entre várias páginas de resultados.                      |
| `src/components/search.tsx`                   | Componente de barra de pesquisa para filtrar os dados exibidos.                                 |
| `src/services/get-food-items.ts`              | Serviço responsável por buscar e retornar informações sobre alimentos.                          |
| `src/services/get-components.ts`              | Serviço que busca e retorna os componentes relacionados aos alimentos.                          |
| `src/constants/@food-item.ts`                 | Arquivo de constantes relacionadas a itens alimentares.                                         |
| `src/env/index.ts`                            | Arquivo de configuração de variáveis de ambiente para o projeto.                                |
| `src/lib/utils.ts`                            | Funções utilitárias gerais para uso em toda a aplicação.                                        |
| `src/lib/models/schemas/zod/component-schema.ts` | Definição do esquema de validação para os componentes usando Zod.                            |
| `src/lib/models/schemas/zod/food-item-schema.ts` | Definição do esquema de validação para os itens alimentares usando Zod.                      |
| `src/lib/models/schemas/zod/pagination-schema.ts` | Definição do esquema de validação para a paginação usando Zod.                              |
| `eslint.config.ts`                                | Arquivo de configuração do ESLint, utilizado para análise estática de código.               |
| `environment.d.ts`                                | Declarações de tipos relacionadas ao ambiente de execução do projeto.                       |
| `components.json`                                 | Arquivo que contém configurações ou informações sobre os componentes da aplicação.          |
| `.prettierrc`                                     | Arquivo de configuração do Prettier para formatação de código.                              |
| `.gitignore`                                      | Arquivo que especifica arquivos e diretórios que o Git deve ignorar.                        |
| `next.config.ts`                                  | Arquivo de configuração do Next.js, utilizado para customizar o comportamento da aplicação. |
| `tailwind.config.ts`                              | Arquivo de configuração do Tailwind CSS para customização de estilos.                       |
| `tsconfig.json`                                   | Arquivo de configuração do TypeScript para definir opções de compilação.                    |
| `package.json`                                    | Arquivo que gerencia as dependências e scripts do projeto Node.js.                          |
| `.gitignore`                                      | Arquivo que especifica arquivos e diretórios a serem ignorados pelo Git.                    |
| `.env.example`                                    | Exemplo de arquivo `.env` com variáveis de ambiente para configurar o projeto.              |


---

## ⚙️ Começando

### ✅ Requisitos

- **Visual Studio 22**
- **.NET Core 8 (Long Term Support Versions)**
- **Docker**
- **Node.js 23+**
- **pnpm**



### 📥 Instalação (Frontend)

1. Clone o repositório:
   ```sh
   git clone https://github.com/FranciscoYlderlan/food-composition-scraper
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd food-composition-scraper
   ```
3. Instale as dependências do frontend:
   ```sh
   cd frontend && pnpm i
   ```
4. Adicione o arquivo .env e configure as variáveis de ambiente:
   ```sh
   API_URL="http://localhost:5172/api/"
   ```


### 📥 Instalação (Backend)

1. Acesse projeto através da solução "backend.sln:
   
2. Instale o pacote dotnet-ef:
   ```sh
   dotnet tool install dotnet-ef ou dotnet tool install --global dotnet-ef 
   ```
3. Altere a dbConnection nos arquivos launchSettings.json e appSettings.json para testar local.

4. Executar as migrations:
   ```sh
   dotnet ef database update
   ```
5. Suba o banco de dados com o Docker Compose:
   ```sh
   docker compose up ou sudo docker compose up
   ```

### ▶️ Uso

Rodando o **backend**: (Ao ter conexão estabelecida o sistema irá identificar que o banco está vazio e iniciar a inserção a partir de batch (tamanho 100))

```sh
(via interface) ou dotnet run
```

Rodando o **frontend**:

```sh
cd frontend
pnpm run dev
```

---

## 🛤️ Roadmap do Projeto

- [x] Criar API para scraping e banco de dados.
- [x] Criar interface para visualização dos alimentos.
- [x] Criar testes unitários para os serviços.
- [ ] Utilizar o Redis para cache.
- [ ] Realizar refactory no backend.

---

## 🙌 Agradecimentos
- Agradeço a você, que está lendo esta documentação e ama programar como eu 👩‍💻👨‍💻. 
- Agradeço também à equipe TMJobs 🙏, foi um prazer imenso desenvolver esta aplicação. Enquanto trabalhava, estava com um sorriso de orelha a orelha 😄, então, muito obrigado pela oportunidade. Independentemente de qualquer coisa, sei que nossos futuros serão brilhantes ✨, porque pessoas como nós, que se incomodam profundamente com a inércia ⚡, têm o corpo pulsando por aprender, evoluir e enfrentar desafios 💪, continuam sorrindo quando eles surgem 😊. Que 2025 seja ainda melhor do que já começou! 🎉

[**Voltar ao topo**](#-visão-geral)

```

```
