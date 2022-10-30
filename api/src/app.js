import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import api from './routes/api.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

// Routes
app.use('/api', api);

app.get('/test', (req, res) =>
{
  res.send('test')
})

export default app;
