import React from 'react';
import AppNavBar from "./appnavbar";
import Footer from "./footer.jsx";

const Layout = ({ children }) => {
    return (
       <>
           <AppNavBar />
           <main style={{ paddingTop: '70px' }}>{children}</main>
           <Footer />
       </>
    );
};

export default Layout;
