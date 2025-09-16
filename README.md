Mini Loja – 4 Técnicas de Estilização em React

Este projeto apresenta a mesma tela de e-commerce implementada em quatro variações, cada uma utilizando uma abordagem diferente de estilização em React.

📂 Estrutura

01-css-global/ → versão com CSS Global

02-css-modules/ → versão com CSS Modules

03-tailwind/ → versão com Tailwind CSS

04-styled-components/ → versão com styled-components

🎯 Funcionalidades da Tela

Navbar fixa com logo, toggle de tema (claro/escuro com persistência) e badge do carrinho

Grid de produtos responsivo (1–4 colunas dependendo da largura da tela)

Card de produto com imagem 1:1, título, preço, rating, tag e botão com variantes

Dark mode aplicado em cores, sombras e bordas

Skeleton de loading sem layout shift

Acessibilidade: navegação por teclado, aria-*, contraste adequado

Animações suaves (150–250ms)

🚀 Como rodar

Entre em qualquer pasta (01-css-global/, 02-css-modules/, etc.), instale as dependências e inicie o projeto:

npm install
npm run dev
