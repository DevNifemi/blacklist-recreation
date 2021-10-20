import './get-consultation.styles.css'

const GetConsultation = () => {
    return (
       
        <div>
            <Grid container spacing={2}>

                <Grid item sm={12} xs={6} md={6}>
                    <Container>
                        <div className="banner-info"></div>
                    </Container>
                </Grid>

                <Grid className='grid_two' item sm={6} xs={6} md={6}>
                </Grid>

            </Grid>
        </div>
    )
}

export default GetConsultation
