import { sequelize } from './config/database.js';
import { createApp } from './app.js';
import './models/Student.js';

const port = process.env.PORT ?? 3000;

await sequelize.sync();
createApp().listen(port, () => console.log(`API en http://localhost:${port}`));

