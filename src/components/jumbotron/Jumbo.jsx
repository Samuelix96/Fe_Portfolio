/** @format */

import React from 'react';
import image1 from '../../images/P_20220723_183657.jpeg';
import './jumbo.css';

const Jumbo = () => {
  const handleSkills = () => {
    window.location.href = `/skills`;
  };
  const handleWorks = () => {
    window.location.href = `/myworks`;
  };
  const handleContact = () => {
    window.location.href = `/contactme`;
  };

  return (
    <div className=''>
      <div className='box-body '>
        <div>
          <img
            className='image1 '
            src={image1}
          />
        </div>
        <div className=' text-port   align-items-center '>
          <h1 className='text-start'>Samuele Bagorha</h1>
          <p className='my-2 fs-2'>Something About Me</p>
          <p>
            Nasco come Perito Meccanico ma con il cuore e la passione da
            Developer.Recentemente ho conluso il mio percorso con Epicode che ha
            introdotto nel settore informatico. Sono curioso di apprendere
            quanto possibile questo settore mi offre, let's enjoy this journey.
          </p>
        </div>
      </div>
      <div className='gap-5 but-move  d-flex justify-content-center ms-5'>
        <button
          onClick={handleSkills}
          type='button'
          class='btn cube cube-hover'>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
          <div class='text'>Skills</div>
        </button>
        <button
          onClick={handleWorks}
          type='button'
          class='btn cube cube-hover'>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
          <div class='text'>My Works </div>
        </button>
        {/* <button
          onClick={handleContact}
          type='button'
          class='btn cube cube-hover'>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
          <div class='text'>Contact Me</div>
        </button> */}
      </div>
    </div>
  );
};

export default Jumbo;
