import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import WorkCard from "./WorkCard"

export default function SelectedWorkSection() {

    return (
        <>
            <h1>Selected Work</h1>
            <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                    <WorkCard />
                </Col>
            ))}
            </Row>
        </>
    )
}