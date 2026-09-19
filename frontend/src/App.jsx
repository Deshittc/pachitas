import { useEffect, useState } from 'react';
import { createStudent, getStudents } from './api/studentApi.js';
import { StudentForm } from './components/StudentForm.jsx';
import { StudentList } from './components/StudentList.jsx';

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { getStudents().then(setStudents).finally(() => setLoading(false)); }, []);
  const register = async (form) => {
    const student = await createStudent(form);
    setStudents((current) => [student, ...current]);
  };

  return <main><h1>Registro de estudiantes</h1><p>Guarda y consulta estudiantes en una sola pantalla.</p>
    <StudentForm onCreate={register} /><StudentList students={students} loading={loading} />
  </main>;
}
