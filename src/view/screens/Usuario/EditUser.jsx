import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Menu } from "../../components/GeneralComponents/main-navigation.jsx";

import LoadingHolder from "../loadigHolder";

import { useFormik } from "formik";
import * as Yup from "yup";
import Input from '../../components/GeneralComponents/input-sist';
import {hasFormError} from '../../components/GeneralComponents/util';
import {listAlunos} from '../../../controllers/alunos'
import {getUsuario, updateUsuarios} from '../../../controllers/usuarios'
import {listCartoes} from '../../../controllers/cartao'


const validationSchema = Yup.object({
    idAluno: Yup.string().required("Campo obrigatório"),
    idCartao: Yup.string().required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    cpf: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    telefone: Yup.string().required("Campo obrigatório"),
});

export default function EditUser() {

    const [alunos, setAlunos] = useState([]);
    const [cartoes, setCartoes] = useState([]);
    const [usuario, setUsuario] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    let [loading, setLoading] = useState(false);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: id,
            idAluno: usuario.Aluno?.id,
            idCartao: usuario.Cartao?.id,
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone
        },
        validationSchema,
        onSubmit: async values => {
            console.log(values)
          try {
            const data = await updateUsuarios(values);
            if(!!data?.success === true){
                window.alert('Usuário Alterado com Sucesso')
                navigate("/", {replace: true});
            } else {
                window.alert('Para alterar, você precisa fazer alguma mudança.')

            }
            setUsuario(data);
          } catch (err) {
            alert(err.message);
          }
        },
    });

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

    async function fetchDadosUsuario(id) {
        <LoadingHolder loading={loading}/>
        try {
            setLoading(true)
            const data = await getUsuario(id)
            setUsuario(data);
        } catch(err) {
            alert('Não foi possível carregar o aluno selecionado');
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        findListaAlunos();
        findListaCartao();
        fetchDadosUsuario(id);
    }, [id]);

    return (

        <Fragment>
            <header>
                <Menu/>
            </header>

            <main className="mt-5 center-mid w-100">
                <form onSubmit={formik.handleSubmit} noValidate> 

                <div className="center-mid row w-100">

                    <div className="d-flex column w-50">
                        <Input
                            id="idAluno"
                            options={alunos.map(aluno => ({value: aluno.id, label: aluno.nome}))}
                            placeholder="Escolha o Aluno"
                            type="select"
                            label="Aluno a Vincular"
                            value={formik.values.idAluno}
                            onChange={formik.handleChange}
                            error={hasFormError(formik, "idAluno")}
                        />

                        <Input
                            id="idCartao"
                            options={cartoes.map(cartao => ({value: cartao.id, label: `Cartão: ${cartao.numero} / Saldo: R$ ${cartao.credito}`}))}
                            placeholder="Escolha o Cartão"
                            type="select"
                            label="Cartão a Vincular"
                            value={formik.values.idAluno}
                            onChange={formik.handleChange}
                            error={hasFormError(formik, "idAluno")}
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
                </div>

                <button className="w-100 btn btn-sm btn-success" type="submit">
                    Alterar
                </button>
                </form>
            </main>
            

        </Fragment>
        
    )
}