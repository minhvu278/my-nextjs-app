import {getPostById, getPostIds} from "../../lib/post";
import Layout from "../../components/Layout";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Post = ({post}) => {
    return (
        <Layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link href='/posts'>
                        <Button variant='dark'>Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = await getPostIds()
    console.log(paths)

    return {
        paths,
        fallback: false //Vd chi lay ra id 5 ma co tinh nhap 6 -> return 404
    }
}

export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        }
    }
}

export default Post