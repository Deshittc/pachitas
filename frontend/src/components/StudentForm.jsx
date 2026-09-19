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
  <label>Nombres<input required value={form.names} /></label>
  <label>Correo<input required type="email" value={form.email} /></label>
  <label>Programa<input required value={form.program} /></label>
  <button disabled={saving}>Guardar</button>
  </form>

}

