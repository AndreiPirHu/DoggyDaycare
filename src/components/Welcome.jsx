import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () =>{



  return(
<div className="welcome">
      <header className="header">
      <nav>
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
    <main>
      <div className="hero-image">
      </div>
      <section className='daycare-information'>
        <h1>Welcome to our Doggy Daycare</h1>
        <p>We provide the best care for your furry friend</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est justo. Aliquam sit amet dapibus elit. Donec varius ligula auctor neque rhoncus, in consequat ipsum pretium. Sed pellentesque tellus ac odio laoreet, sed auctor urna varius. Aliquam at urna vestibulum, dapibus est eu, porttitor metus. Sed dignissim aliquet quam, id semper ex ultrices at. Fusce gravida dictum sapien, eget commodo ipsum faucibus nec. Aliquam consequat bibendum ante, non feugiat mauris euismod ut. Nam in velit in nulla semper ullamcorper ut ac lectus.</p>
      </section>
      
    </main>
    
  </div>
  )
}

export default Welcome