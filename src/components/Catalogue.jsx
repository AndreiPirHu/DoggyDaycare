import './Catalogue.css'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';


const Catalogue = () => {
  const [dogCatalogue, setDogCatalogue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126');
        const data = await response.json();

        // Convert data to a string and store in LocalStorage
        localStorage.setItem('myData', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Retrieve the data from LocalStorage
  useEffect(() => {
    const storedData = localStorage.getItem('myData');

    if (storedData) {
      const data = JSON.parse(storedData);
      console.log(data);
      setDogCatalogue(data);
    }
  }, []);


return (

  <div className="container">
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
  <main className="main">
    <h1>All Dogs</h1>
    <div className="dog-grid">
      
      {dogCatalogue.record && dogCatalogue.record.length > 0 ? (
      dogCatalogue.record.map((dog) => (
        
    <div className="dog-profile" key={dog.chipNumber}>
      <Link to={`/catalogue/${dog.chipNumber}`} key={dog.chipNumber}>
      <img src={dog.img} alt={dog.name} className="dog-image" />
      </Link>
      <div className="dog-info">
        <h2 className="dog-name">{dog.name}</h2>
        <p className="dog-breed">{dog.breed}</p>
        <p className="dog-description">{dog.name} is a {dog.sex} {dog.breed} who is {dog.age} years old.</p>
      </div>
    </div>
    
  ))
) : (
  <p>Loading...</p>
)}
      
    </div>
  </main>
  
</div>
)


}

export default Catalogue