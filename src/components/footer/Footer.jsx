import { Container } from "@mui/material"
import './footer.styles.css'



const FooterQuickLinks = ({title, links}) => {
    return(

    <div className="support-links">
        <h1>{title}</h1>

        <ul>
            {links.map(link => <li>{link}</li>) }
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
                        links={['Help Desk', 'Contact Us']}
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
        </footer>
    )
}

export default Footer
