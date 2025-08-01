import React from 'react';
import Layout from '../component/layout/layout';
import About from '../component/pages/about'
import Project from '../component/pages/project'
import Contact from '../component/pages/contact'
import ThinkILove from '../component/pages/thingIlove';
import Skills from '../component/pages/skills';
import  '../../../public/css/style.css';

const main = () => {
    return (
        <Layout>
            <About/>
            <ThinkILove/>
            <Skills/>
            <Project/>
            <Contact/>
        </Layout>
    );
};

export default main;