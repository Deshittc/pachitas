import { Router } from 'express';

export const createStudentRouter = (studentController) => {
  const router = Router();
  router.get('/', studentController.list);
  router.post('/', studentController.create);
  return router;
};

