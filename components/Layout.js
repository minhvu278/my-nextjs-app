import Head from "next/head";
import {Container} from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

const Layout = ({children}) => (
    <Container>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Next App</title>
        </Head>

        <header>
            <NavbarMenu />
        </header>

        <main>{children}</main>
    </Container>
)

export default Layout
