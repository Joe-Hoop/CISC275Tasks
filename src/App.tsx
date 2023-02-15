import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import cartoon from "./assets/orange.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1 style={{ backgroundColor: "red" }}>My name is Joseph Hooper</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>Image of an orange with sunglasses:</Col>
                    <Col>
                        <img
                            src={cartoon}
                            alt="A cartoon orange with sunglasses"
                            width={"20%"}
                            height={"auto"}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "20%",
                                height: "auto",
                                backgroundColor: "red"
                            }}
                        >
                            <br />
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "20%",
                                height: "auto",
                                backgroundColor: "red"
                            }}
                        >
                            <br />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ol>
                My favorite foods are:
                <li>Turkey Bacon</li>
                <li>Sirloin Steaks</li>
                <li>Chocolate</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
