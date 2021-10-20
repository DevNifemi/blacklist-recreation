import { Container, Grid } from "@mui/material"
import './how-it-works.styles.css'

const HowItWorks = () => {
    return (
        <div className='section-container'>
            <Container>
            <Grid className='section-one' container spacing={4}>

                <Grid item sm={12} xs={12} md={6}>
                    <h2>A SYSTEM THAT WORKS</h2>
                    <h1>ACCESSING THE <span>BLACKLIST</span> </h1>

                    <div className="info_how_it_works">
                    The Blacklist is open to all. Anyone can access the Blacklist either via a manual search or via API call but at a cost.

                    <p>However, only verified registered businesses are allowed to upload information on the Blacklist and they will bear the sole responsibility for any data that they upload on the Blacklist.</p>

                    <p>As part of the Blacklisting process, they will be strongly advised to upload evidence such as NDA, MOU, Agreement, Receipt, Invoice, Bank Statement etc.The Blacklist can be searched using name (surname & first name), phone number, email and BVN.</p>

                    <p>Each person making a search will have to fund their personal wallet or corporate wallet in the case of a company. Every query result will be charged to the wallet of the user making the search.</p>

                    <p>Users can fund their wallet and request for automatic alert should their name or details appear on the Blacklist.</p>


                    System will scan the database for details matching that of the user every 24 hours or 48 hours based on the preference of the user. A company can have sub-accounts to accommodate the use of the platform by their staff from one corporate wallet.
                    </div>

                </Grid>

                <Grid className='grid_two' item sm={12} xs={12} md={6}>
                    <img src="https://blacklistng.com/img/database.png" alt="banner" />
                </Grid>

            </Grid>
            </Container>
            
        </div>
    )
}

export default HowItWorks
