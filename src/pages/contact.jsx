import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import Socials from '../components/about/socials';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(', ')}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact-subtitle">
              Thank you for expressing your interest in contacting me. I appreciate your feedback, questions, and suggestions. For specific inquiries, please feel free to reach out to me directly via email at
              &nbsp;
              {' '}
              <a href={`mailto:${INFO.main.email}`}>
                {INFO.main.email}
              </a>
              . I make every effort to respond to messages within 24 hours, though response times may be longer during peak periods. Alternatively, you can use the contact form on my website, providing the necessary details, and I will promptly get back to you. If you prefer to connect through social media, you can find me on
              {' '}
              <a
                href={INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {INFO.socials.instagram}
              </a>
              . I regularly share updates and engage with followers, so feel free to connect. Thank you once again for your interest, and I eagerly anticipate hearing from you soon.!
            </div>
            <div class="container">
  <div class="card">
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>

  <div class="socials-container">
    <div class="contact-socials">
      <Socials />
    </div>
  </div>
</div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
