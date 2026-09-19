export class StudentService {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async list() {
    return this.studentRepository.findAll();
  }

  async register(input) {
  const student = this.#normalizeAndValidate(input);
  const exists = await this.studentRepository.findByEmail(student.email);

  if (exists) {
    const error = new Error('Ya existe un estudiante con ese correo.');
    error.statusCode = 409;
    throw error;
  }

  return this.studentRepository.create(student);
}

  #normalizeAndValidate({ names, email, program } = {}) {
    const student = {
      names: names?.trim(),
      email: email?.trim().toLowerCase(),
      program: program?.trim()
    };

    if (!student.names || !student.email || !student.program) {
      const error = new Error('Nombres, correo y programa son obligatorios.');
      error.statusCode = 400;
      throw error;
    }

    return student;
  }
}

