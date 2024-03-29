/** @format */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mywor.css';

const Works = ({ img, title, source, description }) => {
  return (
    <div>
      <Card>
        <Card.Img
          variant='top'
          className='my-img'
          src={img}
        />
        <Card.Body>
          <Card.Title className='fs-1 my-3 fw-bold'>{title}</Card.Title>
          <Card.Text className='fs-2 fst-italic'>{description}</Card.Text>

          <Button variant='success'>
            <a
              className='link-underline link-underline-opacity-0 text-dark fst-italic'
              href={source}>
              Visit my site
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Works;
