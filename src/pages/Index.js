/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Black Raven's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Convallis posuere morbi leo urna. Adipiscing elit duis tristique sollicitudin. Egestas diam in arcu cursus euismod.
            Et netus et malesuada fames ac turpis. Scelerisque in dictum non consectetur a erat nam at.
            Et netus et malesuada fames ac turpis egestas maecenas. Ornare quam viverra orci sagittis eu volutpat.
            Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Viverra tellus in hac habitasse.
            Eget magna fermentum iaculis eu non diam phasellus. A lacus vestibulum sed arcu non. Eget nunc lobortis mattis aliquam faucibus purus.
            Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Mauris vitae ultricies leo integer malesuada nunc. Et netus et malesuada fames ac.
            Suscipit tellus mauris a diam. Fermentum leo vel orci porta non pulvinar.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://ferdinandestoque.com/">here</a>.</p>
    </article>
  </Main>
);

export default Index;
