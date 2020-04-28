const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * # Métodos HTTP
 * =========================
 * GET: Buscar informação
 * POST: Criar informação
 * PUT/PATCH: Atualizar/Alterar informação
 * DELETE: Deletar informação
 *
 * # Tipos de parâmetros
 * ========================
 * Query Params: Filtros e pginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar/editar um recurso (JSON)
 *
 * Midleware
 * =======================
 * Interceptador de requisições que pode interromper totalmente a requisição ou alterar os dados da requisição.
 *
 */

const projects = [];

const logRequests = (req, res, next) => {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
};

const validateProjectID = (req, res, next) => {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({ error: 'Invalid projetct ID' });
  }

  return next();
};

app.use(logRequests);

app.get('/projects', (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return res.json(results);
});

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put('/projects/:id', validateProjectID, (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found' });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete('/projects/:id', validateProjectID, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found' });
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(4444, () => {
  console.log('Backend started... ');
});
