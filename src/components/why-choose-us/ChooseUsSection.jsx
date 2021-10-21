import { Container, Grid } from '@mui/material'
import './choose-us.styles.css'


const CardDetails = ({title, icon, content}) => {
    return(
    <div className="card">

        <div className="title">
        <i className={icon} />
        <h5>{title}</h5>
        </div>

        <div className="content">
            {content}
        </div>

    </div>
    )
}


const ChooseUsSection = () => {
    return (
        <Container className='choose_us_section'>
            <h2>WHY BLACKLIST?</h2>
            <header>Simple and very easy <span>profiling</span> </header>


            <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={3}>
                <CardDetails
                    title='Alternative Database'
                    content='
                    The blacklist is an alternative database for chronic debtors and fraudulent people as reported by verified registered Nigerian businesses.'                    icon='bx bxs-lock-open-alt'
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <CardDetails
                    title='No Limitations'
                    content='Any verified registered business in Nigeria is free to upload a list of their debtors or business associates, employee or customers that have defrauded them.'                    icon='bx bx-run'
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <CardDetails
                    title='Superb documentation'
                    content='Our docs were shaped throughout the years with the help and experience of our trusted 2,000+ open-source contributors. Its all there!'
                    icon='bx bx-line-chart'
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <CardDetails
                        title='Accessible in mind'
                        content='We care about making it great for everyone. We improve accessibility for all of our components helping you to reach the largest audience!'
                        icon='bx bxs-user-voice'
                />
            </Grid>

            </Grid>
        </Container>
    )
}

export default ChooseUsSection
