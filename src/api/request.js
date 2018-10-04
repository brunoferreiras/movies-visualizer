import axios from 'axios';

const request = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

request.interceptors.request.use(
  function(config) {
    // Faz algo antes de requisição ser enviada
    console.log('URL REQUEST AXIOS: ', config.url);

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function(response) {
    console.log('RESPONSE AXIOS: ', response);
    return response;
  },
  function(error) {
    console.log('RESPONSE ERROR AXIOS: ', error);
    if (error.response) {
      // Quando a requisição é feita e o servidor responde com um status diferente de 200.
      return Promise.reject(new Error(error.response.data.status_message));
    } else if (error.request) {
      // Quando a requisição é feita, porém não é recebido nenhuma resposta.
      return Promise.reject(
        new Error(
          'Não foi possível se conectar com o servidor! Por favor, tente novamente mais tarde.'
        )
      );
    } else {
      // Algo aconteceu na configuração da solicitação que acionou o erro.
      console.log('Error', error.message);
      return Promise.reject(
        new Error(
          'Algo inesperado aconteceu! Por favor, tente novamente mais tarde.'
        )
      );
    }
  }
);

export default request;
