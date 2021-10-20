import { Container } from "@mui/material"
import './footer.styles.css'



const FooterQuickLinks = ({title, links}) => {
    return(

    <div className="support-links">
        <ul>
            <h1>{title}</h1>
            {links.map((link, idx) => <li key={idx}>{link}</li>) }
        </ul>
    </div>
    )
}


const Footer = () => {
    return (
        <footer>
            <Container className='footer_container'>
                <div className="footer-logo">
                    <div className="logo">
                        <img src='https://blacklistng.com/img/logo.png' alt="footer-logo"  />
                    </div>

                    <div className="footer-details">
                        <h2>Lagos, Nigeria</h2>
                        <h2>info@blacklistng.com</h2>
                    </div>

                </div>

                <div className="quick-links">
                    <FooterQuickLinks
                        title='Support Links'
                        links={['Help Desk', 'Contact Us', 'Consult']}
                    />

                    <FooterQuickLinks
                        title='Developers'
                        links={['Overview', 'Documentation', 'Status']}
                    />
                    
                    <FooterQuickLinks
                        title='About'
                        links={['Company', 'Pricing', 'Privacy & Terms']}
                    />

                </div>
            </Container>

            <p className='ml-4'>© 2021 Blacklist. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
