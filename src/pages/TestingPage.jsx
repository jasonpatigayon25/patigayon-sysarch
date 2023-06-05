import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const TestingPage = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries')
      .then(response => {
        setResponseData(response.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Form />
      {}
    </>
  );
};

export default TestingPage
