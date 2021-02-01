import Head from 'next/head';
import Resume from '../components/Resume/Resume';

export default function Index() {
    return (
        <>
            <Head>
                <title>thaotram</title>
            </Head>
            <Resume />
        </>
    );
}
