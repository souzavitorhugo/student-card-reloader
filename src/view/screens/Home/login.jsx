import LoginForm from '../../components/LoginComponent/login-card'


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

                            <div className="w-100 pt-4">
                                <h2 className="w-100 text-center text-black">STCR</h2>

                                <p className='mt-1 mb-3 w-100 text-center'> Acesse sua conta para verificar o saldo </p>
                            </div>
                            
                        </div>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}