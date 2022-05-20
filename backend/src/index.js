const express = require('express');
const cors = require('cors');

const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Rota / recurso
 */

/**
 * Metodo HTTP:
 * 
 * GET: Buscar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: alterar informação do back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * tipos de parametros 
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para 
 */



app.listen(3333);