const endpoint = '/api/students';

const request = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message ?? 'No se pudo completar la solicitud.');
  return data;
};

export const getStudents = () => request(endpoint);
export const createStudent = (student) => request(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(student)
});

