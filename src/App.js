import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, value };

    try {
      const response = await axios.post('http://localhost:5000/add', data);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Value:</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;