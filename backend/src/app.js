import cors from 'cors';
import express from 'express';
import { StudentController } from './controllers/StudentController.js';
import { StudentRepository } from './repositories/StudentRepository.js';
import { createStudentRouter } from './routes/studentRoutes.js';
import { StudentService } from './services/StudentService.js';

export const createApp = () => {
  const app = express();
  const studentService = new StudentService(new StudentRepository());
  const studentController = new StudentController(studentService);

  app.use(cors());
  app.use(express.json());
  app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
  app.use('/api/students', createStudentRouter(studentController));
  app.use((error, _request, response, _next) => {
    response.status(error.statusCode ?? 500).json({ message: error.message ?? 'Error interno.' });
  });

  return app;
};

