'use client';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const sendingToastId = toast.info('Sending...', { autoClose: false });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      toast.dismiss(sendingToastId);

      if (res.ok) {
        toast.success('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.dismiss(sendingToastId);
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
  <div className="container mt-5 mb-3 ms-2 me-2 bg-light">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <div className="row ">
        {/* Left column: Contact Form */}
        <div className="col-md-8 mb-4 ps-4">
          <h2 className='mt-2 mb-5'>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
          
        {/* Right column: Contact Info and Social Links */}
        <div className="col-md-4">
  <div className="card p-5   bg-light-500 shadow-sm h-100 d-flex flex-column justify-content-center">
    <h2 className="mb-4 text-center">Contact Info</h2>

    <div className="mb-3">
      <h5>Address</h5>
      <p className="mb-0">Rangpur,<br />Dhaka, Bangladesh</p>
    </div>

    <div className="mb-3">
      <h5>Phone</h5>
      <p className="mb-0">+8801571422223</p>
    </div>

    <div className="mb-3">
      <h5>Email</h5>
      <p className="mb-0">sajedur645@gmail.com</p>
    </div>

    <div>
      <h5>Follow Me</h5>
      <div className="d-flex gap-3 mt-2">
  <a href="https://www.facebook.com/mdsajedurrahman.sakil.5" target="_blank" rel="noreferrer">
    <i className="bi bi-facebook fs-3">{''}</i>
  </a>
  <a href="https://x.com/BabuMdsakil" target="_blank" rel="noreferrer">
    <i className="bi bi-twitter fs-3">{''}</i>
  </a>
  <a href="https://www.linkedin.com/in/sajedur-rahman-shakil-856893236" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin fs-3">{''}</i>
  </a>
 
</div>

    </div>
  </div>
</div>

      </div>
    </div>
    
  );
}
