import express from 'express';
import cors from 'cors';
import routes from './routes';

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// Delete: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar;
// Query Params: Paginação, Filtros, Ordenação.

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
