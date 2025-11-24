import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../../static/css/Login.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === 'admin' && pass === '1234') {
            navigate('/crud');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-sm p-4 login-card">
                        <Card.Body>
                            <h2
                                className="text-center mb-4 fw-bold"
                                style={{ color: '#0033a0' }}
                            >
                            Iniciar Sesión
                            </h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label className="fw-semibold">Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={user}
                                        onChange={e => setUser(e.target.value)}
                                        placeholder="Ingrese su usuario"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label className="fw-semibold">Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={pass}
                                        onChange={e => setPass(e.target.value)}                                        
                                        placeholder="Ingrese su contraseña"
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    variant="dark"
                                    type="submit"
                                    className="w-100 fw-semibold login-btn d-flex justify-content-center align-items-center"
                                >
                                Ingresar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
