import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai"


export default function SelectedWorkSection() {

    return (
        <>
            <h2 id="skills" className="text-danger">Skills</h2>
            <br></br>
            <Container className="mb-5">
                <Row className="mb-3">
                    <Col xs={4}>
                        <h6>Programming Languages:</h6>
                    </Col>
                    <Col xs={8}>

                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< FaPython /> {' '} Python</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< IoLogoJavascript /> {' '} JavaScript</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span"> C++</Badge> {' '}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={4}>
                        <h6>Web Frameworks:</h6>
                    </Col>
                    <Col xs={8}>
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< FaReact /> {' '} React.js</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< FaNode /> {' '} Node.js</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< TbBrandNextjs /> {' '} Next.js</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< SiExpress /> {' '} Express.js</Badge> {' '}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={4}>
                        <h6>Database Technologies:</h6>
                    </Col>
                    <Col xs={8}>
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< SiMongodb /> {' '} MongoDB</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< FaDatabase /> {' '} SQL</Badge> {' '}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={4}>
                        <h6>Version Control:</h6>
                    </Col>
                    <Col xs={8}>
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< FaGitAlt /> {' '} Git</Badge> {' '}
                        <Badge className="text-black-50 fs-6 me-2" bg="secondary" as="span">< AiFillGithub /> {' '} GitHub</Badge> {' '}
                    </Col>
                </Row>
            </Container>
            <br />
        </>
    )
}