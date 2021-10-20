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
                    title='Beautifully Designed'
                    content='
                    You can start your projects with Googles Material Design or build your own designs using the sophisticated theming features.'
                    icon='bx bxs-lock-open-alt'
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <CardDetails
                    title='Easily customized'
                    content='Enjoy the power of our components without sacrificing the styles you want. Tweak how your components render down to the very last class.'
                    icon='bx bx-run'
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
