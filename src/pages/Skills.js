/** @format */

import React from 'react';
import '../components/style/skills.css';
import Navigation from '../components/navbar/Navigation';
import Footer from '../components/footer/Footer';

const Skills = () => {
  return (
    <>
      <Navigation />
      <div className='skills'>
        <div class='container'>
          <div class='box d-flex '>
            <div class='imgBox'>
              <img
                src='https://iconape.com/wp-content/png_logo_vector/html-5-2.png'
                alt='Html'
              />
            </div>
            <div class='content'>
              <h2>HTML</h2>
            </div>
          </div>
          <div class='box'>
            <div class='imgBox'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdQlw2qu71U1eXjxOlF981Jd9ZXF2by0s73ZapFqpVK_ukNQoyv8rC7sJYLJ84pmseN4&usqp=CAU'
                alt='Css'
              />
            </div>
            <div class='content'>
              <h2>CSS</h2>
            </div>
          </div>
          <div class='box'>
            <div class='imgBox'>
              <img
                src='https://ih1.redbubble.net/image.316760221.5828/st,small,507x507-pad,600x600,f8f8f8.u1.jpg'
                alt='Javascript'
              />
            </div>
            <div class='content'>
              <h2>Javascript</h2>
            </div>
          </div>
          <div class='box'>
            <div class='imgBox'>
              <img
                src='https://juststickers.in/wp-content/uploads/2016/03/reactjs-coaster.png'
                alt='React'
              />
            </div>
            <div class='content'>
              <h2>React</h2>
            </div>
          </div>
          <div class='box'>
            <div class='imgBox'>
              <img
                src='https://img.stackshare.io/service/7374/react-redux.png'
                alt='Redux'
              />
            </div>
            <div class='content'>
              <h2>React Redux Toolkit</h2>
            </div>
          </div>
          <div class='box'>
            <div class='imgBox'>
              <img
                src='https://www.pngitem.com/pimgs/m/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png'
                alt='MongoDB'
              />
            </div>
            <div class='content'>
              <h2>MongoDB</h2>
            </div>
          </div>
          <div class='box'>
            <div class='imgBox '>
              <img
                src='https://ih1.redbubble.net/image.367014180.4385/st,small,507x507-pad,600x600,f8f8f8.u3.jpg'
                alt='Node.js Express.js'
              />
            </div>
            <div class='content'>
              <h2>Node.js and Express.js</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
