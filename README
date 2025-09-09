# AngularJS Login + Home com Dados da API

Projeto em **AngularJS** de login e home que exibe dados da API real em uma tabela.  
O projeto utiliza **TailwindCSS** para estilização.

---

## 💻 Funcionalidades

1. Tela de login:
   - Usuário: `admin`
   - Senha: `1234`
2. Após login válido, exibe mensagem de boas-vindas: **“Seja Bem-Vindo!”**  
3. Requisição **GET** para a API: `https://api.appselsyn.com.br/keek/rest/v1/integracao/posicao?apikey=<CHAVE>`  
4. Exibição dos dados em uma tabela com colunas:
   - ID
   - Rastreável (Sim/Não)
   - Tipo
   - Latitude / Longitude
   - Velocidade
   - Ignição (Sim/Não)
   - Odômetro / Horímetro
   - Data/Hora (formato brasileiro: dd/MM/yyyy HH:mm)
5. Ordenação de colunas (asc/desc) ao clicar no cabeçalho  
6. Mensagens de **loading** e **erro** durante a requisição  

---


## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (necessário para rodar o proxy local)
- Live Server no VSCode ou qualquer servidor web estático
- Navegador moderno

---

## 🚀 Como Rodar

1. Abra o projeto no **VSCode**
2. Instale a extensão **Live Server**
3. Abra a pasta `proxy` no terminal e rode:
   ```bash
   cd proxy
   npm install
   node server.js
   ```
   O terminal deve mostrar: `Proxy rodando em http://localhost:3000`
4. Em outro terminal, clique com o botão direito em `index.html` → **Open with Live Server**
5. Tela de login será exibida
6. Use as credenciais:
   - Usuário: `admin`
   - Senha: `1234`
7. Após login, a página Home será exibida com os dados da API

---

## 📦 Git e .gitignore

O projeto já inclui um arquivo `.gitignore` para evitar o versionamento de dependências e arquivos desnecessários.

---

## 🛠 Tecnologias

- AngularJS 1.x  
- TailwindCSS  
- JavaScript (ES6+)  
- HTML / CSS  

---

## 🔧 Observações

- A requisição da API pode apresentar **CORS ou limites de requisição** (`Too Many Requests`) dependendo do servidor  
- Para desenvolvimento local, pode ser necessário usar **proxy** ou ferramentas como [CORS Anywhere](https://cors-anywhere.herokuapp.com/)  
- Colunas da tabela são ordenáveis clicando nos cabeçalhos  

---

Atenciosamente
William Cramer
