import * as React from 'react';
import Layout from 'layouts/Home'

interface HomeProps {

}

export const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <Layout>
            Happy Coding!!!
        </Layout>
    );
}