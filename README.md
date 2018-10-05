## Movies Visualizer

É uma pequena aplicação que se comunica com a API do [TheMovieDB](https://www.themoviedb.org/documentation/api).

### [DEMO](movies-visualizer.firebaseapp.com)

## Funcionamento

Na tela inicial é mostrado uma listagem dos filmes mais populares, de acordo com o TheMovieDB,é possível pesquisar algum filme de interesse e salvar nos favoritos, os filmes que achar que vale a pena.

## Autorização
Por enquanto a autenticação é padrão e única, posteriormente será uma autenticação genérica via GitHub.

## Tecnologias
* [React](https://reactjs.org/)
* [Redux-saga](https://redux-saga.js.org/)
* [Redux](https://redux.js.org/)
* [Axios](https://github.com/axios/axios)
* [React Router](https://github.com/ReactTraining/react-router)
* [Material UI](https://material-ui.com/)
* [Moment.Js](https://momentjs.com/)
* [Firebase](https://firebase.google.com/)


## Instalação

Clone o projeto e depois instale as dependências com:
```sh
npm install
```
Por fim basta executar:

```sh
npm start
```
Logo vai ter sua aplicação funcionando, mas se quiser colocar em produção vai ser necessário executar o comando:

```sh
npm run build
```

Por meio desse comando é gerado uma pasta **build** onde vai ter a aplicação otimizada para produção.
