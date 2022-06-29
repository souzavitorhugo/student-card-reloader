import { useEffect, useState } from 'react';
import { useFormik } from "formik";

import * as Yup from "yup";

import Input from '../../components/GeneralComponents/input-sist';
import {hasFormError} from '../../components/GeneralComponents/util';
import {createUsuarios} from "../../../controllers/usuarios"
import {listAlunos} from '../../../controllers/alunos'
import {listCartoes} from '../../../controllers/cartao'


const validationSchema = Yup.object({
    AlunoId: Yup.string().required("Campo obrigatório"),
    CartaoId: Yup.string().required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    cpf: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    telefone: Yup.string().required("Campo obrigatório"),
    tipo: Yup.string().required("Campo obrigatório"),
});

export default function AddUser() {

    const [alunos, setAlunos] = useState([]);
    const [cartoes, setCartoes] = useState([]);
    const tipoUserSistema = [
        {usuario: 0, nome: 'Admin'},
        {usuario: 1, nome: 'Aluno'}
    ]

    const formik = useFormik({
        initialValues: {
            AlunoId: "",
            CartaoId: "",
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
            cpf: "",
            telefone: "",
            tipo: ""
        },
        validationSchema,
        onSubmit: async values => {
            console.log(values)
          try {
            const data = await createUsuarios(values);
            if(!!data?.id){
                debugger;
                window.alert('Usuario Criado com sucesso');
                window.location.reload();
            }
          } catch (err) {
            alert(err.message);
          }
        },
    });

    useEffect(() => {
        findListaAlunos();
        findListaCartao()
    }, []);

    async function findListaAlunos() {
        try {
            const data = await listAlunos();
            setAlunos(data);
        } catch(err) {
            throw err
        }
    }

    async function findListaCartao() {
        try {
            const data = await listCartoes();
            setCartoes(data);
        } catch(err) {
            throw err
        }
    }

    return (
        <form onSubmit={formik.handleSubmit}> 

            <div className="center-mid row w-100">

                <div className="d-flex column w-50">
                    <Input
                        id="AlunoId"
                        options={alunos.map(aluno => ({value: aluno.id, label: aluno.nome}))}
                        placeholder="Escolha o Aluno"
                        type="select"
                        label="Aluno a Vincular"
                        value={formik.values.AlunoId}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "AlunoId")}
                    />

                    <Input
                        id="CartaoId"
                        options={cartoes.map(cartao => ({value: cartao.id, label: `Cartão: ${cartao.numero} / Saldo: R$ ${cartao.credito}`}))}
                        placeholder="Escolha o Cartão"
                        type="select"
                        label="Cartão a Vincular"
                        value={formik.values.CartaoId}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "CartaoId")}
                    />

                    <Input
                        id="nome"
                        type="text"
                        label="Primeiro Nome"
                        placeholder=""
                        value={formik.values.nome}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "nome")}
                    />

                    <Input
                        id="sobrenome"
                        type="text"
                        label="Sobrenome"
                        placeholder=""
                        value={formik.values.sobrenome}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "sobrenome")}
                    />
                </div>

                <div className="d-flex column w-50">

                    <Input
                        id="email"
                        type="email"
                        label="Endereço de e-mail"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "email")}
                    />

                    <Input
                        id="senha"
                        type="password"
                        label="Senha"
                        placeholder="*****"
                        value={formik.values.senha}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "senha")}
                    />

                    <Input
                        id="cpf"
                        type="text"
                        label="CPF"
                        placeholder="000.000.000-00"
                        value={formik.values.cpf}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "cpf")}
                    />

                    <Input
                        id="telefone"
                        type="tel"
                        label="Telefone"
                        placeholder="(xx) 99999-9999"
                        value={formik.values.telefone}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "telefone")}
                    />
                </div>

                <div className="d-flex row w-100">
                    <Input
                        id="tipo"
                        options={tipoUserSistema.map(user => ({value: user.usuario, label: user.nome}))}
                        placeholder="Escolha o Tipo do Usuário"
                        type="select"
                        label="Tipo do usuário"
                        value={formik.values.tipo}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "tipo")}
                    />
                </div>
            </div>

            <button className="w-100 btn btn-sm btn-success" type="submit">
                Adicionar usuario
            </button>
        </form>
    )
}