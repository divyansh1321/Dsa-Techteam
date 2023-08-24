import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/background.jpg';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => {
        const newData = {
            ...prevData,
            [name]: value
        };
        
        localStorage.setItem('debugFormData', JSON.stringify(newData));
        return newData;
    });
};


  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); 
    localStorage.setItem('userFormData', JSON.stringify(formData));
    alert("Data stored in local storage!");
  };

  return (
    
    <div className="container">
      
      <form 
  onSubmit={handleSubmit} 
  className="form" 
  style={{ backgroundImage: `url(${backgroundImage})` }}>
       <h1 id="dsa"> <em> Directorate Of Student Affairs </em></h1>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <div>
            <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
