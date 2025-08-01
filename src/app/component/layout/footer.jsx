import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} shakil. All rights reserved.</p>
        <div>
          <a href="https://github.com/sajedur22" className="text-light mx-2" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sajedur-rahman-shakil-856893236" className="text-light mx-2" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com" className="text-light mx-2">sajedur645@gmail.com</a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;