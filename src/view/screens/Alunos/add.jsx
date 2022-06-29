import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from '../../components/GeneralComponents/input-sist';
import {hasFormError} from '../../components/GeneralComponents/util';
import {createAlunos} from "../../../controllers/alunos"
import {listEscolas} from "../../../controllers/escolas"

const validationSchema = Yup.object({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    idEscola: Yup.string().required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório")
});

export default function AddAluno() {
    const [escolas, setEscolas] = useState([]);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          nome: "",
          email: "",
          idEscola: "",
          sobrenome: ""
        },
        validationSchema,
        onSubmit: async values => {
          try {
            const data = await createAlunos(values);
            if(!!data?.id){
                // navigate("/alunos", {replace: true});
                window.location.reload();
            }
          } catch (err) {
            alert(err.message);
          }
        },
    });

    useEffect(() => {
        if(escolas.length === 0){
            findListaEscolas()
        }
    }, [])

    async function findListaEscolas() {
        try {
            const data = await listEscolas();
            setEscolas(data);
        } catch(err) {
            throw err
        }
    }
    return (
        <form onSubmit={formik.handleSubmit}> 

            <Input
                id="nome"
                type="text"
                label="Primeiro Nome"
                placeholder="Nome Aluno"
                value={formik.values.nome}
                onChange={formik.handleChange}
                error={hasFormError(formik, "nome")}
            />

            <Input
                id="sobrenome"
                type="text"
                label="Sobrenome"
                placeholder="Sobrenome Aluno"
                value={formik.values.sobrenome}
                onChange={formik.handleChange}
                error={hasFormError(formik, "sobrenome")}
            />

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
                id="idEscola"
                options={escolas.map(escola => ({value: escola.id, label: escola.nome}))}
                placeholder="Escolha a Escola"
                type="select"
                label="Escola"
                value={formik.values.idEscola}
                onChange={formik.handleChange}
                error={hasFormError(formik, "idEscola")}
            />

            <button className="w-100 btn btn-sm btn-success" type="submit">
                Adicionar Aluno
            </button>
        </form>
    )
}