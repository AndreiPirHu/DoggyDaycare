import './DogDetails.css'

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DogDetails = () => {
  const { chipNumber } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const myData = JSON.parse(localStorage.getItem("myData"));
    const currentDog = myData.record.find((dog) => dog.chipNumber === chipNumber);
    setDog(currentDog);
  }, [chipNumber]);



  return (
    <div>
      <header className="header">
    <nav className="nav">
 
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          
          <Link to="/catalogue">
            <li>Catalogue</li>
          </Link>
          
        </ul>
      </nav>
  </header>
    <div className="dog-details">

  <div className="dog-image-container">
    <img className="dog-image" src={dog.img} alt={dog.name} />
  </div>
  
  <div className="dog-info-container">
    <h1 className="dog-name">{dog.name}</h1>
    
    <div className="dog-info">
      <p className="dog-info-item">Breed: {dog.breed}</p>
  <p className="dog-info-item">Owner: {dog.owner.name} {dog.owner.lastName}</p>
      <p className="dog-info-item">Sex: {dog.sex}</p>
  <p className="dog-info-item">Phone number: {dog.owner.phoneNumber}</p>
      <p className="dog-info-item">Age: {dog.age}</p>
  <p className="dog-info-item">Chip Number: {dog.chipNumber}</p>
  <p className={`dog-info-item ${dog.present ? 'present' : 'not-present'}`}>{dog.present ? 'Present' : 'Not present'}</p>

      

      

      
    </div>
  </div>
</div>
</div>


  );
};

export default DogDetails;