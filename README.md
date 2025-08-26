# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {


      # 🛡️ LeakAlert

      🔒 **Seu e-mail protegido!**

      Bem-vindo ao LeakAlert! Este projeto foi criado com carinho para ajudar pessoas a entenderem e simularem a detecção de vazamento de dados de e-mails. Aqui você encontra recursos de monitoramento, histórico e alertas, tudo pensado para quem quer aprender sobre segurança digital e boas práticas de desenvolvimento.

      ---

      ## 🚀 Funcionalidades

      - Cadastro de e-mails para monitoramento
      - Simulação de vazamentos em uma base fake
      - Painel de histórico de buscas
      - Alertas de possíveis vazamentos

      ---

      ## 🛠️ Tecnologias Utilizadas

      - React + Vite (frontend)
      - TypeScript
      - Git e GitHub para versionamento

      ---

      ## ▶️ Como rodar o projeto

      1. Clone o repositório:
         `git clone https://github.com/roger-inatel/Leak-Alert.git`
      2. Entre na pasta do frontend:
         `cd leakalert-frontend`
      3. Instale as dependências:
         `npm install`
      4. Rode o projeto:
         `npm run dev`

      ---

      ## 🖼️ Imagens/Demonstração

      Em breve você verá aqui prints do painel, cadastro e histórico. Cada detalhe será pensado para transmitir segurança e facilidade de uso.

      ---

      ## 📚 Aprendizados

      Este projeto é meu laboratório de aprendizado! Aqui estou praticando:
      - React moderno com Vite
      - Versionamento com Git e GitHub
      - Estruturação de projetos profissionais
      - Boas práticas de documentação
      - Segurança digital

      ---

      ## ✨ Futuras melhorias

      - Integração com APIs reais de vazamento
      - Autenticação de usuários
      - Deploy na AWS
      - UI/UX aprimorada

      ---

      ## 📬 Contato

      Se quiser trocar uma ideia, dar sugestões ou acompanhar meu progresso:
      - [LinkedIn](https://www.linkedin.com/in/seu-usuario)
      - Email: roger.pereira@ges.inatel.br

