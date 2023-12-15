import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import WorkCard from "./WorkCard"
import { Container } from "react-bootstrap";

export default function SelectedWorkSection() {

    const works = [
        { title: 'Dall E Community', description: 'A full-stack web application that leverages the power of AI. This project showcases the integration of AI technologies in a community-based platform.', image: '/images/dall-e-community.png', link: 'https://sparkling-duckanoo-d278f0.netlify.app/'},
        { title: 'Urban Ease (Hackathon Winning)', description: 'Centralized software to mimic a quotation tool, that uses AI to recommend products which is build on top of NodeJS.', image: '/images/urban-ease.png', link: 'https://github.com/KrinsKumar/Aztech' },
        { title: 'Museum API', description: 'End-to-end developed website for browsing museum artworks, includes user authentication, authorizatin and cookies usage. Both front end and the server is custom made.', image: '/images/museum.png', link: 'https://artapi-6.vercel.app/' },
    ];

    return (
        <>
            <div id="work"></div>
            <h2 className="text-danger">Selected Work</h2>
            <br></br>
            <Container>
                {works.map((work, idx) => (
                    <>
                        <Row key={idx}>
                            <WorkCard title={work.title} description={work.description} image={work.image} link={work.link}/>
                        </Row>
                        <br />
                    </>
                ))}
            </Container>
        </>
    )
}