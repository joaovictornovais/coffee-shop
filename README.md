<h1 align="center">
  Coffee Shops - Tia Rosa
</h1>
<p align="center">
    <img src="https://img.shields.io/badge/Tipo-Atividade-blue" />
</p>

<p>O projeto a seguir foi desenvolvido como uma atividade proposta pelo Professor Willian Silva, como parte da avaliação da disciplina de Programação para a Web no curso de Engenharia de Software da IESB. Trata-se de uma Landing Page para a Cafeteria da Tia Rosa.</p>

## Tecnologias

- [Yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)

### Entendendo escolhas das tecnologias
> <p>Utilizei o <b>YARN</b> como gerenciador de pacotes por possuir mais segurança, performance e velocidade superior ao <b>NPM</b>. <a href="https://www.knowledgehut.com/blog/web-development/yarn-vs-npm#:~:text=The%20major%20difference%20between%20NPM,considered%20more%20secure%20than%20NPM">Saiba mais</a></p>

> <p>Optei pelo servidor de desenvolvimento <b>VITE</b> por conta de ter uma compilação rápida e forncer uma experiência de desenvolvimento mais ágil. <a href="https://cleancommit.io/blog/what-is-vite/#:~:text=Vite%20is%20a%20modern%20frontend,sizes%2C%20and%20improved%20developer%20experience.">Saiba mais</a></p>

> <p><b>REACT</b> foi o framework, ou melhor, <b>BIBLIOTECA</b>, que o professor definiou como pré-requisito de avaliação.</p>

> <p>Para facilitar a estilização e responsividade do site, optei em utilizar o framework de CSS <b>TailwindCSS</b></p>

## Disclaimer

<p>Utilizei o modelo do figma feito pela <a href="https://www.figma.com/@reee">@reee</a> que pode ser encontrado gratuitamente no Figma Community: "<a href="https://www.figma.com/file/Tn4OMX8Ug9P8vhTZm1Qe4F/Shopfee-(Coffee-Shop)-(Community)?type=design&node-id=510-6021&mode=design&t=jDssXftN7KLFrxjj-0">Shopfee (Coffee Shop)</a>".</p>

## Como rodar na minha máquina?
- Clone o projeto `git clone git@github.com:joaovictornovais/coffee-shop.git`
- Rode `yarn install`
- Rode `yarn dev`
- Pronto! 🎉

## Tia Rosa - Coffee Shop Site
### Estrutura do projeto
- `./src/assets` Imagens públicas do site
- `./src/components` Todos os pedaços primordiais da aplicação
- `./src/db` Pasta para armazenar nossos objetos (produtos)
- `./src/pages` Reunião dos principais componentes para formar uma página

### Como adicionar banners de promoções ao carrossel
1. Faça um banner com as dimensões 335px x 137px
1. Salve o banner na pasta `./src/assets/promotions`
3. Acesse o diretório `./src/db/Promotions.jsx`
4. Adicione um novo objeto na `const promotions` com a seguinte estrutura:
``` javascript
{
  id: 4,
  img: "src/assets/promotions/NOME-DO-ARQUIVO.svg"
}
```

### Como adicionar um novo produto
1. Acesse o diretório `.src/db/Products.jsx`
2. Adicione um novo objeto na `const products` com a seguinte estrutura:
``` javascript
{
  id: 11,
  name: "NOME DO PRODUTO",
  description: "UMA DESCRIÇÃO PARA O PRODUTO",
  category: "CATEGORIA DO PRODUTO", // Coffee, Drink ou Pastry
  image: "src/assets/products/CATEGORIA-DO-PRODUTO/NOME-DO-ARQUIVO.png",
  oldPrice: 4.99, // Caso haja promoção, esse preço será mostrado como antigo
  isPromotion: false, // true || false, ele fará com que o produto entre em promoção
  price: 4.29, // Preço do produto
  rating: 4.7, // Avaliações
},
```
