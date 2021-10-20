import { Button } from '@mui/material';
import './App.css';
import Banner from './components/banner/Banner';
import Companies from './components/companies/Companies';
import HowItWorks from './components/how-it-works/HowItWorks';
import Navbar from './components/navbar/Navbar';
import ChooseUsSection from './components/why-choose-us/ChooseUsSection';

const styles = {
  backgroundColor: 'rgb(19,47,76)',
  backgroundImage: `url('https://blacklistng.com/assets/images/patterns/mitech-call-to-action-image-global.png')`,
  backgroundPosition: 'top 35% right -68px',
  backgroundRepeat: 'no-repeat',
  marginTop: '100px',
  padding: 55,
  display: 'flex',
  // width: '100%',
  alignItems: 'center',
  justifyContent:'space-between'
}


function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner/>
        <Companies/>
        <HowItWorks/>
        <ChooseUsSection/>

        {/* sign in button  */}
        <div style={styles}>
            <div>
              <h1 className='sign-in-header'>Getting rid of chronic debtors one search at a time</h1>
            </div>

            <div className='section-two'>
            <Button className='homepage-btn' variant='contained'><i className='bx bx-exit'></i> Sign In</Button>
            </div>
        </div>
    </div>
  );
}

export default App;
