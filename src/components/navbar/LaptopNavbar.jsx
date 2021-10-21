import { Button} from '@mui/material';   
import './navbar.styles.css';

const LaptopNavbar = () => {
    return (
        <nav className='laptop-nav'>

         <div className="logo">
            <img src='https://blacklistng.com/img/logo.png' alt="app logo" />
        </div>


         <div className="links">
             <a href="/">Home</a>
             <a href="">Pricing</a>
             <a href="https://blacklistng.com/docs/#introduction">Developers</a>
             <a href="#contact-us">Support</a>
         </div>

         <div className="login-btn">
            <Button className='btn' variant="contained">Login</Button>
            <Button className='btn' variant="outlined">Sign Up</Button>        
         </div>
         
        </nav>
    )
}


export default LaptopNavbar
