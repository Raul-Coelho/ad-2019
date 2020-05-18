import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header/Header.component';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
        };

        try {
            await api.post('register', data);

            history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    function golist() {
        history.push('/list');
    }

    return (
        <>
            <Header></Header>

            <Card style={{ width: '30rem', margin: '2rem', left: '25rem' }}>
                <Card.Body>
                    <Card.Title>Register in Secret Santa :D</Card.Title>
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={name} onChange={e => setName(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                value={email} onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="dark w-100" type="submit">
                            Submit
                        </Button>
                        <Button onClick={golist} variant="dark w-100 mt-2" type="submit">
                            List
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>

    );
}

export default Register;