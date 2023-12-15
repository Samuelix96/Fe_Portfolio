/** @format */

import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Navigation from '../components/navbar/Navigation';
import Footer from '../components/footer/Footer';
import axios from 'axios';
import '../components/style/myworks.css';
import Works from '../components/myworks/Works';

const MyWorks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/works`
      );
      const data = await response.data;
      setData(data);
    } catch (error) {
      setError('Error during the fetch');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        <Row
          xs={1}
          md={4}
          className='g-4 m-2'>
          {data &&
            data?.work?.map((work, idx) => (
              <Col key={idx}>
                <Works
                  img={work.img}
                  description={work.description}
                  source={work.source}
                  title={work.title}
                />
              </Col>
            ))}
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default MyWorks;
