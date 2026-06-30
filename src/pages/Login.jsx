import { useState } from "react";
import { Container, Row, Col, Button, Alert, Card, Form} from "react-bootstrap";
import api from "../api/axios";
// function Login(){

// }

const Login = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = api.post("/login", {
                email,
                password,
       });
        console.log(res);   
        } catch (error) {
        console.log(error);   
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={5}>
                <Card className="text-start">
                    <Card.Body>
                        <h3 className="text-center mb-4">Login Form</h3>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Mail" onChange={(e)=> setEmail (e.target.value)} value={email}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password" onChange={(e)=> setPassword (e.target.value)} value={password}></Form.Control>
                        </Form.Group>
                        <br></br>
                        <Button type="submit" className="w-100" variant="primary">Login</Button>
                    </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default Login;