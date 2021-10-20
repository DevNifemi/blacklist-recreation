import { Button, Grid, Container } from "@mui/material";
import './banner.styles.css';


const Banner = () => {
    return (
        <div>
            <Grid container spacing={2}>

                <Grid item sm={12} xs={6} md={6}>
                    <Container>
                        <div className="banner-info">
                            <h1>ALTERNATIVE <span>DATABASE</span>  FOR CHRONIC DEBTORS & FRAUDULENT PEOPLE</h1>
                            <p>Getting Rid Of Chronic Debtors One Search At A Time</p>
                            <Button className='btn' variant="contained">Create Account</Button>
                        </div>
                    </Container>
                </Grid>

                <Grid className='grid_two' item sm={6} xs={6} md={6}>
                    <img src="https://malhub.com.ng/img/about-img.png" alt="banner" />
                </Grid>

            </Grid>
        </div>
    )
}

export default Banner;
