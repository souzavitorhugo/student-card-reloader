import React, { useState, useRef, useEffect } from 'react';
import Axios from "axios";
import { Link, Route } from "react-router-dom";
import {Redirect } from "react-router";
import Perfil from "../view/perfil"

export default function LoginForm() {

    const [codigo, setCodigo] = useState('') 
    const [senha, setSenha] = useState('') 
    const inputCodigo = useRef(null);
    const inputSenha = useRef(null);
    const senhaIncorreta = useRef(null);
    const usuarioIncorreto = useRef(null);

    function validation(userLogging, users) {
        for(var i = 0; i<users.length; i++){
            let usuarioPermitido = {usuario: users[i]}
            debugger;
            if(users[i].email == userLogging.usuario && users[i].senha_cartao == userLogging.password){
                usuarioPermitido = {
                    usuario: users[i], 
                    'perm': true
                }
                return usuarioPermitido;
            } else {   
                usuarioPermitido = {
                    usuario: users[i], 
                    'perm': false
                }         
                return usuarioPermitido
            }
        }
    }

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
        } else if(!authenticateLogin.password) {
            inputSenha.current.classList.add('border-danger')
            inputSenha.current.focus()
            senhaIncorreta.current.classList.remove('hidden')
        } else {
            Axios.get("http://localhost:5000/login").then((response) => {
                let users = response.data
                if (!users.errno) {
                    let validacao = validation(authenticateLogin, users)
                    if(validacao.perm == true) {
                        debugger;
                        alert('Acesso permitido')
                    } else {
                        debugger;
                        alert('Acesso negado')
                    }
                }
    
            })
        }
        console.log(authenticateLogin)
    }

    return (
        <div className="card-body">

            <h4>Login</h4>

            <form action="" method="POST">

                <small className="text-danger hidden" ref={usuarioIncorreto}> O usuário está vazio </small>

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