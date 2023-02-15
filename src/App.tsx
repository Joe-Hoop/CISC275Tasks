import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import cartoon from "./assets/orange.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>My name is Joseph Hooper</h2>
            <h3>Hello World</h3>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>Behold a random image I found on my computer:</Col>
                    <Col>
                        <img
                            src={cartoon}
                            alt="A cartoon orange with sunglasses"
                            width={"20%"}
                            height={"auto"}
                        />
                    </Col>
                </Row>
            </Container>
            <ol>
                My favorite foods are:
                <li>Turkey Bacon</li>
                <li>Sirloin Steaks</li>
                <li>Chocolate</li>
            </ol>
        </div>
    );
}

export default App;
