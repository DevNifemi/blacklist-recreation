import { Container, Grid } from '@mui/material'
import FormInput from '../homepage-form/FormInput'
import './get-consultation.styles.css'

const GetConsultation = () => {
    return (
       
        <div id='contact-us' className='get-consultation-container'>
            <Grid container spacing={2}>

                <Grid item sm={12} xs={12} md={6}>
                    <Container>
                        <div className="consultation-info">
                            <h1>Obtain further information, <span>make a contact</span>  with our experienced staff.</h1>
                        </div>
                        <p className='availabilty_details'>We’re available for 8 hours a day! Contact us to learn more about the blacklist and how you can participate</p>
                    </Container>
                </Grid>

                <Grid className='grid_two' item sm={12} xs={12} md={6}>
                    <Container>
                         <FormInput />
                    </Container>
                </Grid>

            </Grid>
        </div>
    )
}

export default GetConsultation
