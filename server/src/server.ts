 import express from 'express';

 const app = express();

 app.get('/users', (request, response) => {
     console.log('Listagem de usuários');

     response.json([
         'Diego',
         'Lucas',
         'Lucas2'
     ]);

 });


 app.listen(3333);
