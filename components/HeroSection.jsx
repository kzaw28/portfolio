import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"



export default function HeroSection() {
    return (
        <>
            <Container>
                <Row className="flex-column flex-md-row">
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image alt="person" src="/profile.png" width={325} height={325} rounded/>
                    </Col>
                    <Col>
                        <h1 className="fw-semibold">kaung zaw</h1>
                        <h4>full stack developer</h4>
                        <p>Crafting beautiful websites one line of code at a time, I bring your visions to life in pixels and pixels!</p>

                        <p>As a web developer, I love combining technical skills with my keen eye for design. My goal is to create scalable applications
                            that offer lasting user experiences and impact.
                        </p>
                        <Button variant="primary" size="sm" className="me-2" href="https://www.linkedin.com/in/kaungkhantzaw/">Linkedin</Button>
                        <Button variant="dark" size="sm" href="https://github.com/kzaw28">Github</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )

}