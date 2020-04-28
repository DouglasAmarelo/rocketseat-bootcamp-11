import express from 'express';

import { HelloWorld } from './routes';

const app = express();

app.use(express.json());

app.get('/', HelloWorld);

app.listen(3333);
