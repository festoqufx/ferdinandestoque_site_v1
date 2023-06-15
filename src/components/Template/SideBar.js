import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ferdinand Estoque</h2>
        <p><a href="mailto:ferdinand.estoque@yahoo.com">ferdinand.estoque@yahoo.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
      I&#39;m a Freelancer Front-end Developer with over 10 years of experience. 
      I&#39;m from Cavite Phillipines. I code and create web elements for amazing people around the world. 
      I like work with new people. New people new Experiences.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ferdinand Estoque <Link to="/">ferdinandestoque.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
