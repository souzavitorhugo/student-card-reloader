import React, { useState, useRef, useEffect } from 'react';
import Axios from "axios";
import { Link, Route } from "react-router-dom";
import {Redirect } from "react-router";

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

        if(codigo == ''){
            senhaIncorreta.current.classList.add('hidden');

            inputCodigo.current.classList.add('border-danger');
            inputCodigo.current.focus();
            usuarioIncorreto.current.classList.remove('hidden');


            return false
        }

        if(senha == '') {
            usuarioIncorreto.current.classList.add('hidden');

            inputSenha.current.classList.add('border-danger');
            inputSenha.current.focus();
            senhaIncorreta.current.classList.remove('hidden');

            return false
        }

        const dtoLogin = {
            'usuario': codigo,
            'password': senha
        }

        console.log(dtoLogin)
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

                <small className="text-danger hidden" ref={senhaIncorreta}> A senha está vazia </small>

                <div className="input-group form-group">
                                        
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
                    </div>
                                        
                    <input ref={inputSenha} onChange={e => setSenha(e.target.value)} id="senha" type="password" className="form-control" name="senha" placeholder="Digite sua senha"></input>

                </div>

                <div className="my-3 d-grid">
                    <button type="submit" className="btn btn-success btn-block" onClick={fazerLogin}>Entrar</button>
                </div>

            </form>

        </div>
    )

}