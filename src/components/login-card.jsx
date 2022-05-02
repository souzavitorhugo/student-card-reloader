import React, { useState, useRef, ChangeEvent } from 'react';

export default function LoginForm() {

    const [codigo, setCodigo] = useState('') 
    const [senha, setSenha] = useState('') 
    const inputCodigo = useRef(null);
    const inputSenha = useRef(null);
    const senhaIncorreta = useRef(null);
    const usuarioIncorreto = useRef(null);

    function fazerLogin(e) {
        e.preventDefault();

        let authenticateLogin = {
            'usuario': codigo,
            'password': senha
        }

        if(!authenticateLogin.usuario) {
            inputCodigo.current.classList.add('border-danger')
            inputCodigo.current.focus()
            usuarioIncorreto.current.classList.remove('hidden')
        }

        if(!authenticateLogin.senha) {
            inputSenha.current.classList.add('border-danger')
            inputSenha.current.focus()
            senhaIncorreta.current.classList.remove('hidden')
        }

        //caso pase na verificação do front
        //faz a verificação na API, caso passar, adicionar hidden na ref senhaincorreta e no usuarioincorreto 
        //e passar

        // inputCodigo.current.classList.remove('border-danger')
        // inputSenha.current.classList.remove('border-danger')

        // usuarioIncorreto.current.classList.toggle('hidden')
        // senhaIncorreta.current.classList.toggle('hidden')
        console.log(authenticateLogin)
    }

    return (
        <div className="card-body">

            <h4>Login</h4>

            <form action="" method="POST">

                <small className="text-danger hidden" ref={usuarioIncorreto}> O usuário está incorreto ou vazio </small>

                <div className="input-group form-group">
                                        
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                    </div>

                    <input ref={inputCodigo} onChange={e => setCodigo(e.target.value)} id="codigo" type="codigo" className="form-control " name="codigo" placeholder="Digite o Código do cartão"></input>

                </div>

                <small className="text-danger hidden" ref={senhaIncorreta}> A senha está incorreta ou vazia </small>
                <div className="input-group form-group">
                                        
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
                    </div>
                                        
                    <input ref={inputSenha} onChange={e => setSenha(e.target.value)} id="senha" type="password" className="form-control" name="senha" placeholder="Digite sua senha"></input>

                </div>

                

                <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-block" onClick={fazerLogin}>Entrar</button>
                </div>

            </form>

            <br></br>

        </div>
    )

}