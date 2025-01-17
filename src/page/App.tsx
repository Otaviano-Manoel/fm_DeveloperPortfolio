import React from 'react';
import '../assets/style/reset.scss';
import '../assets/style/_variables.scss';
import '../assets/style/_mixins.scss';
import styled from './App.module.scss';
import ring from '../assets/images/pattern-rings.svg';
import circle from '../assets/images/pattern-circle.svg';
import classNames from 'classnames';
import Nav from '../component/nav/Nav';
import Hero from '../component/hero/hero';
import Technology from '../component/technology/technology';
import Projects from '../component/projects/projects';
import Footer from '../component/footer/footer';

function App() {
  return (
    <div className={styled['app']}>
      <img className={classNames(styled.ring1)} src={ring} alt="Ring" />
      <img className={classNames(styled.ring2)} src={ring} alt="Ring" />
      <img className={classNames(styled.ring3)} src={ring} alt="Ring" />
      <div data-testid='container-page' className={styled['container']}>
        <img className={styled['circle']} src={circle} alt="Circle" />
        <Nav />
        <Hero />
        <Technology />
        <Projects />

      </div><Footer />

    </div>
  );
}

export default App;
