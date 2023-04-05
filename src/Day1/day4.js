import {useState} from 'react';
import React from 'react';
const   Name = () => {
  const [Name, setName] = useState('');
  const [favfruit, setfavfruit] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 
    
    console.log('Name ', Name);
    console.log('favfruit 👉', favfruit);

    setMessage(`Hey, ${Name} your favourite fruit is ${favfruit}`);

    
    setName('');
    setfavfruit('');
  };

  return (
    <div>
    <h2>question4</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          value={Name}
        />

        <br />
        <select id="favfruit" onChange={event => setfavfruit(event.target.value)}>
        <option >Choose a fruit</option>
            <option >Apple</option>
            <option >Banana</option>
            <option >Cherry</option>
            <option >mango</option>
            <option >orange</option>
      </select>
        <br />


        <button variant="outlined">submit</button>
      


        <h2>{message}</h2>
      </form>
    </div>
  );
};

export default Name;
