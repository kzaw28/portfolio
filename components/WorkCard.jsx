import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Link from 'next/link'

export default function WorkCard({ title, description, image, link }) {

    return (
        <Card>
            <Row>
                <Col xs={5}>
                    <Card.Img variant="top" src={image} />
                </Col>
                <Col>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }} >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='fs-6'>
                            {description}
                        </Card.Text>

                        <Link href={link}>                        
                            <Button size="sm" variant="danger" style={{ marginTop: 'auto' }}>Check it out</Button>
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}