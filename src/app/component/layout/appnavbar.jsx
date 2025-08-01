'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
   <nav className={`navbar navbar-expand-lg shadow-sm fixed-top transition-navbar ${scrolled ? 'navbar-scrolled' : 'bg-gray'}`}>
  <div className="container">
    <Link href="/" className="navbar-brand fw-bold">
    <div className="">
          <img
            src="/images/logo.png"
            alt="Profile"
            className="logo"
            style={{ maxWidth: '50px' }}
          />
        </div>
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav d-flex gap-3">
        <li className="nav-item">
          <Link href="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/nt/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link href="/nt/creative-coding" className="nav-link">Creative Coding</Link>
        </li>
        <li className="nav-item">
          <Link href="/nt/projects" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link href="/nt/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
