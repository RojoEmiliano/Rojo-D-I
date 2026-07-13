import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { fetchProductByModelCode } from '../../api/products';
import { createProduct, updateProduct } from '../../api/adminProducts';

const BRANDS = ['epson', 'ricoh'];
const TYPES = ['iByN', 'iColor', 'mByN', 'mColor'];

export default function AdminProductForm() {
  const { modelCode } = useParams();
  const isEdit = Boolean(modelCode);
  const { token } = useAuth();
  const navigate = useNavigate();

  const [brand, setBrand] = useState('epson');
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [code, setCode] = useState('');
  const [type, setType] = useState('iByN');
  const [description, setDescription] = useState('');
  const [specsText, setSpecsText] = useState('{}');
  const [existingImgs, setExistingImgs] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [newDataSheet, setNewDataSheet] = useState(null);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(isEdit);

  useEffect(() => {
    if (!isEdit) return;
    const controller = new AbortController();
    fetchProductByModelCode(modelCode, { signal: controller.signal })
      .then(p => {
        setBrand(p.brand);
        setName(p.name);
        setModel(p.model);
        setCode(p.modelCode);
        setType(p.type);
        setDescription(p.description.join('\n'));
        setSpecsText(JSON.stringify(p.specs, null, 2));
        setExistingImgs(p.imgs);
      })
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [modelCode]);

  const removeExistingImg = url => setExistingImgs(imgs => imgs.filter(i => i !== url));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    let parsedSpecs;
    try {
      parsedSpecs = JSON.parse(specsText);
    } catch {
      setError('El campo Specs (JSON) no es válido');
      return;
    }

    const fd = new FormData();
    // brand + modelCode van primero: el backend arma la carpeta de destino
    // de los archivos leyendo estos campos de texto del multipart en orden.
    fd.append('brand', brand);
    fd.append('modelCode', code);
    fd.append('name', name);
    fd.append('model', model);
    fd.append('type', type);
    fd.append('description', description);
    fd.append('specs', JSON.stringify(parsedSpecs));
    if (isEdit) fd.append('keepImages', JSON.stringify(existingImgs));
    newImages.forEach(file => fd.append('images', file));
    if (newDataSheet) fd.append('dataSheet', newDataSheet);

    setSubmitting(true);
    try {
      if (isEdit) {
        await updateProduct(modelCode, fd, token);
      } else {
        await createProduct(fd, token);
      }
      navigate('/admin/products');
    } catch (err) {
      setError(err.message || 'Error al guardar el producto');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Form.Group className='mb-3' controlId='product-brand'>
              <Form.Label>Marca</Form.Label>
              <Form.Select value={brand} onChange={e => setBrand(e.target.value)}>
                {BRANDS.map(b => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className='mb-3' controlId='product-type'>
              <Form.Label>Tipo</Form.Label>
              <Form.Select value={type} onChange={e => setType(e.target.value)}>
                {TYPES.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className='mb-3' controlId='product-modelCode'>
              <Form.Label>Código de modelo</Form.Label>
              <Form.Control
                value={code}
                onChange={e => setCode(e.target.value)}
                disabled={isEdit}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='product-name'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control value={name} onChange={e => setName(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='product-model'>
              <Form.Label>Modelo</Form.Label>
              <Form.Control value={model} onChange={e => setModel(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='mb-3' controlId='product-description'>
          <Form.Label>Descripción (una línea por ítem)</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label as='p'>Imágenes actuales</Form.Label>
          <div className='flex gap-2 flex-wrap mb-2'>
            {existingImgs.map(url => (
              <div key={url} className='relative'>
                <img src={url} alt='' style={{ width: '80px', height: 'auto' }} />
                <Button
                  size='sm'
                  variant='danger'
                  onClick={() => removeExistingImg(url)}
                  className='absolute top-0 right-0'
                  style={{ padding: '0 6px' }}
                >
                  x
                </Button>
              </div>
            ))}
          </div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='product-new-images'>
          <Form.Label>Agregar imágenes nuevas</Form.Label>
          <Form.Control
            type='file'
            multiple
            accept='image/*'
            onChange={e => setNewImages([...e.target.files])}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='product-datasheet'>
          <Form.Label>Datasheet (PDF)</Form.Label>
          <Form.Control
            type='file'
            accept='application/pdf'
            onChange={e => setNewDataSheet(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='product-specs'>
          <Form.Label>Specs (JSON)</Form.Label>
          <Form.Control
            as='textarea'
            rows={16}
            value={specsText}
            onChange={e => setSpecsText(e.target.value)}
            style={{ fontFamily: 'monospace' }}
          />
        </Form.Group>

        <Button type='submit' disabled={submitting}>
          {submitting ? 'Guardando...' : 'Guardar'}
        </Button>
      </Form>
    </div>
  );
}
