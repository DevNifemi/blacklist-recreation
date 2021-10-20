import './companies.styles.css'

const Companies = () => {
    return (
        <div className='container'>
            <div className="companies">
                <div className="img-container">
                    <img src='https://mui.com/static/branding/companies/spotify-light.svg' alt='sponsors'/>
                </div>
                
                <div className="img-container">
                    <img src='https://mui.com/static/branding/companies/amazon-light.svg' alt='sponsors'/>
                </div>
                <div className="img-container">
                     <img src='https://mui.com/static/branding/companies/netflix-light.svg' alt='sponsors'/>
                </div>
                <div className="img-container">
                    <img src='https://mui.com/static/branding/companies/shutterstock-light.svg' alt='sponsors'/>
                </div>
            </div>

            <div className="info-abt-compaines">
                <p>From startups to Fortune 500s, the world's best product teams use BlackList to build a safe database!</p>
            </div>
        </div>
    )
}

export default Companies
