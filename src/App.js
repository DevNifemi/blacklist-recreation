import { Button } from '@mui/material';
import './App.css';
import Banner from './components/banner/Banner';
import Companies from './components/companies/Companies';
import Footer from './components/footer/Footer';
import GetConsultation from './components/get-consulation/GetConsultation';
import HowItWorks from './components/how-it-works/HowItWorks';
import MobileNavbar from './components/navbar/MobileNavbar';
import LaptopNavbar from './components/navbar/LaptopNavbar';
import ChooseUsSection from './components/why-choose-us/ChooseUsSection';
import Features from './components/features/Features';


const styles = {
  backgroundColor: 'rgb(19,47,76)',
  backgroundImage: `url('https://blacklistng.com/assets/images/patterns/mitech-call-to-action-image-global.png')`,
  backgroundPosition: 'top 35% right -68px',
  backgroundRepeat: 'no-repeat',
  marginTop: '150px',
  padding: 60,
  display: 'flex',
  // width: '100%',
  alignItems: 'center',
  justifyContent:'space-between'
}


function App() {
  return (
    <div className="App">
        <MobileNavbar/>
        <LaptopNavbar />
        <Banner/>
        <Companies/>
        <HowItWorks/>
        <ChooseUsSection/>

        {/* sign in button  */}
        <div className='sign-in-bg' style={styles}>
            <div>
              <h1 className='sign-in-header'>Getting rid of chronic debtors one search at a time</h1>
            </div>

            <div className='section-two'>
            <Button className='homepage-btn' variant='contained'><i className='bx bx-exit'></i> Sign In</Button>
            </div>
        </div>

        <Features />
        <GetConsultation />
        <Footer/>
        
    </div>
  );
}

export default App;
