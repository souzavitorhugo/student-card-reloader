import LoginForm from '../components/login-card'


export default function Login(){
    return(
        <div className="login-page">
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">

                            <div className="d-flex justify-content-end social_icon">

                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>

                            </div>

                            <h2>STCR</h2>

                        </div>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}