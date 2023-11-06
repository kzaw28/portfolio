import  Container  from "react-bootstrap/Container"
import MainNav from "./MainNav"
import styles from '../src/styles/Home.module.css'

export default function Layout(props) {
    return (
        <>
            <MainNav />
            <br />
            <Container id={styles.layout}>
                {props.children}
            </Container>
            <br />
        </>
    )
}