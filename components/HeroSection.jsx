import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

import { FaLinkedin } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"





export default function HeroSection() {
    return (
        <>
            <Container id="hero" style={{ marginBottom: "80px" }}>
                <Row className="flex-column flex-md-row">
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image alt="person" src="/profile.png" width={325} height={325} rounded/>
                    </Col>
                    <Col>
                        <h1>Kaung Zaw</h1>
                        <h4 className="text-black-50 mb-2">full stack developer</h4>
                        <Button variant="secondary" size="sm" className="me-2" href="https://www.linkedin.com/in/kaungkhantzaw/">
                            <FaLinkedin /> {' '} Linkedin
                        </Button>

                        <Button variant="secondary" size="sm" href="https://github.com/kzaw28">
                            <AiFillGithub /> {' '} Github
                        </Button>
                        <br /> <br />
                        <p>Lifelong learner, creating impact one solution at a time</p>

                        <p>As a web developer, I love combining technical skills with my keen eye for design. My goal is to create scalable applications
                            that offer lasting user experiences.
                        </p>
                        {/* <div class="d-grid gap-2">
                            <button class="btn btn-danger-subtle" type="button"><MdDownload /> {' '} Resume</button>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </>
    )

}