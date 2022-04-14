import './App.css';

function App() {
  return (
    <div className="App">
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
            <div className="card-body">
              <h4>Login</h4>
              <form action="" method="POST">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                  </div>
                  <input id="codigo" type="codigo" className="form-control" name="codigo" placeholder="Digite o Código do cartão"></input>

                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
                  </div>
                  <input id="senha" type="password" className="form-control" name="senha" placeholder="Digite sua senha"></input>

                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-block">Entrar</button>
                </div>
              </form>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
