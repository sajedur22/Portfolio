import Layout from '../../component/layout/layout';
import React from 'react';
import About from '../../component/pages/about'
import Thinkilove from "../../component/pages/thingIlove"

const page = () => {
    return (
        <Layout>
            <About/>
            <Thinkilove/>
        </Layout>
    );
};

export default page;