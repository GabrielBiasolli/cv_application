# CV Builder

[English](README.md) | **Português**

Um app em React para montar um currículo: preencha seus dados pessoais, sua experiência profissional e sua formação, e veja tudo reunido em um currículo pronto.

## Sobre o projeto

O [The Odin Project](https://www.theodinproject.com/) é um currículo open source de desenvolvimento web. O módulo de React propõe um projeto chamado [CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application), e esta é a minha versão dele. Ela vai além do que o enunciado pede: várias entradas por seção, edição e exclusão de cada entrada e uma tela separada de visualização do currículo.

Meu objetivo foi aplicar React do jeito que ele seria usado no trabalho real: componentes pequenos, uma única fonte de verdade para o estado, lógica compartilhada em vez de copiada e código que continua legível conforme cresce.

## Funcionalidades

- **Três seções**: informações gerais (nome, e-mail, telefone), experiência profissional (empresa, cargo, datas) e formação (instituição, curso, datas).
- **Adicionar, editar e excluir entradas**: experiência e formação aceitam quantas entradas forem necessárias.
- **Enviar ou editar cada seção**: enviar uma seção a trava, e você pode destravá-la para fazer alterações.
- **Visualização do currículo**: depois que as três seções são enviadas, o botão **Done** mostra o currículo completo. **Go Back** volta para os formulários sem perder os dados.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) para o servidor de desenvolvimento e o build
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) para lint

## Como rodar

É preciso ter o [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/GabrielBiasolli/cv_application.git
cd cv_application/cv-project
npm install
npm run dev
```

Depois abra o endereço que o Vite mostrar (normalmente http://localhost:5173).

| Comando           | O que faz                                          |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build`   | Gera o build de produção em `dist/`                |
| `npm run preview` | Serve o build de produção localmente               |
| `npm run lint`    | Roda o Oxlint                                      |

## Estrutura do projeto

```
cv-project/src/
├── App.jsx                     # Guarda todo o estado do currículo e alterna entre formulários e visualização
├── components/
│   ├── GeneralForm.jsx         # Nome, e-mail, telefone
│   ├── ProfessionalForm.jsx    # Entradas de experiência profissional
│   ├── EducationForm.jsx       # Entradas de formação
│   └── RenderCV.jsx            # Visualização do currículo, só leitura
└── tools/
    └── tooling.jsx             # Lógica de lista compartilhada: adicionar, exibir, editar, excluir
```

Todos os dados ficam no estado do React em `App.jsx` e são repassados para cada seção. As três seções usam a mesma lógica de lista de `tools/tooling.jsx`, e cada uma fornece seus próprios componentes de formulário e de exibição.

## O que eu pratiquei

- Dividir a interface em componentes focados e passar dados e callbacks por props
- Elevar o estado (lifting state up) para que vários componentes compartilhem uma única fonte de verdade
- Inputs de formulário controlados e não controlados
- Renderização condicional e renderização de listas com keys
- Reaproveitar lógica passando componentes como props, para que um único trecho de código cuide de três tipos de lista

## Sobre o uso de IA

Escrevi todo o JavaScript e o JSX eu mesmo. Usei pesquisa, incluindo IA, para aprender a sintaxe do React e padrões comuns de produção, mas nenhum código da aplicação foi gerado por IA. A exceção é o CSS, que foi escrito em grande parte por IA. Ele é uma parte pequena do projeto, e o foco aqui é React, não design de interface.

## Autor

**Gabriel Barreto Biasolli**

- GitHub: [@GabrielBiasolli](https://github.com/GabrielBiasolli), onde estão meus outros projetos
- LinkedIn: [gabriel-barreto-biasolli](https://www.linkedin.com/in/gabriel-barreto-biasolli-257425306/)
