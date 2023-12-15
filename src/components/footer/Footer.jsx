/** @format */

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className=' container-fluid'>
      <hr className='br-bord' />
      <div className='box-footer'>
        <ul className='d-flex list-unstyled justify-content-between align-items-center fs-1'>
          <li>
            <h2>Email </h2>
            <p className='text-light'>darksamuelix@gmail.com</p>
          </li>
          <li>
            <h2>GitHub</h2>
            <p>
              <a
                className=' link-underline link-underline-opacity-0  '
                href='https://github.com/Samuelix96'>
                Github Samuele
              </a>
            </p>
          </li>
          <li>
            <h2>Linkedin</h2>
            <p>
              <a
                className=' link-underline link-underline-opacity-0  '
                href='https://www.linkedin.com/in/lero-samuele-bagorha-1621201aa/'>
                Linkedin Samuele
              </a>
            </p>
          </li>
          <li>
            <h2>
              <a
                className=' link-underline link-underline-opacity-0  text-light'
                href='/'>
                Privacy & terms
              </a>
            </h2>
            <p>
              <a
                className=' link-underline link-underline-opacity-0  '
                href='/'>
                Sitemap
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
