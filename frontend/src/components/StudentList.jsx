export function StudentList({ students, loading }) {
  return <section><h2>Estudiantes registrados</h2>
    {loading ? <p>Cargando...</p> : students.length === 0 ? <p>Aún no hay registros.</p> :
      <ul>{students.map(({ id, names, email, program }) => <li key={id}><strong>{names}</strong> — {program} <small>{email}</small></li>)}</ul>}
  </section>;
}

