import Layout from '../../component/layout/layout';
import React from 'react';
import Ilove from '../../component/pages/thingIlove'
import Project from '../../component/pages/project'

const page = () => {
    return (
        <Layout>
            <Ilove/>
            <Project/>
        </Layout>
    );
};

export default page;