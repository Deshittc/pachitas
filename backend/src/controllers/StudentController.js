export class StudentController {
  constructor(studentService) {
    this.studentService = studentService;
  }

  list = async (_request, response, next) => {
    try {
      response.json(await this.studentService.list());
    } catch (error) {
      next(error);
    }
  };

  create = async (request, response, next) => {
    try {
      const student = await this.studentService.register(request.body);
      response.status(201).json(student);
    } catch (error) {
      next(error);
    }
  };
}

