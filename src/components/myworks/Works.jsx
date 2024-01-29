/** @format */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mywor.css';

const Works = ({ img, title, source, description }) => {
  const handleMyWork = () => {
    window.location.href = `https://katanstory-lerosamuele.netlify.app`;
  };
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
          <Card.Text className='fs-2 fw-bold'>{source}</Card.Text>
          <Button
            onClick={handleMyWork}
            variant='success'>
            Visit my web site
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Works;
