import { Student } from '../models/Student.js';

// La capa de servicio depende de esta abstracción, no de Sequelize directamente.
export class StudentRepository {
  findAll() {
    return Student.findAll({ order: [['createdAt', 'DESC']] });
  }

  findByEmail(email) {
    return Student.findOne({ where: { email } });
  }

  create(studentData) {
    return Student.create(studentData);
  }
}

