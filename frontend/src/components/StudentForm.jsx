import { useState } from 'react';

const initialForm = { names: '', email: '', program: '' };

export function StudentForm({ onCreate }) {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setSaving(true); setError('');
    try {
      await onCreate(form);
      setForm(initialForm);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  };

  return <form onSubmit={submit}>
    <h2>Registrar estudiante</h2>
    <label>Nombres<input required value={form.names} onChange={(e) => setForm({ ...form, names: e.target.value })} /></label>
    <label>Correo<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
    <label>Programa<input required value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} /></label>
    {error && <p role="alert">{error}</p>}
    <button disabled={saving}>{saving ? 'Guardando...' : 'Guardar'}</button>
  </form>;
}

