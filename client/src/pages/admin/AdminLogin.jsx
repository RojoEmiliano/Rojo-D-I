import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(email, password);
      navigate('/admin');
    } catch {
      setError('Email o contraseña incorrectos');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='max-w-sm mx-auto mt-24 p-6 border rounded shadow-sm'>
      <h3 className='mb-4'>Ingresar al Panel</h3>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='login-email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='login-password'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type='submit' disabled={submitting}>
          {submitting ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </Form>
    </div>
  );
}
