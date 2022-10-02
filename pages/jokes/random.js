import {getRandomJoke} from "../../lib/joke";
import Layout from "../../components/Layout";
import {Card} from "react-bootstrap"
import Link from "next/link";
import Button from "react-bootstrap/Button";

const Random = ({joke}) => {
    return (
        <Layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title>Here's your random joke for today</Card.Title>
                    <Card.Text>{joke.value}</Card.Text>
                    <Link href='/'>
                        <Button variant='dark'>Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const joke = await getRandomJoke()
    return {
        props: {
            joke
        }
    }
}

export default Random