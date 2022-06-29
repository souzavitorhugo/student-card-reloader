import {useState, useEffect} from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from '../../components/GeneralComponents/input-sist';
import {hasFormError} from '../../components/GeneralComponents/util';
import {createCartao} from "../../../controllers/cartao"

const validationSchema = Yup.object({
    numero: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    validade: Yup.string().required("Campo obrigatório"),
});

export default function AddCartao() {
    const [escolas, setEscolas] = useState([]);

    const formik = useFormik({
        initialValues: {
            numero: "",
            senha: "",
            validade: "",
            credito: ""
        },
        validationSchema,
        onSubmit: async values => {
            console.log(values)
            let dataNovoCartao = values;
        
            let data_brasileira = dataNovoCartao.validade;
            let data_americana = data_brasileira.split('/').reverse().join('-');
            dataNovoCartao.validade = data_americana

            try {
            const data = await createCartao(dataNovoCartao);
            if(!!data?.id){
                window.location.reload();
            }
            } catch (err) {
            alert(err.message);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}> 

            <Input
                id="numero"
                type="number"
                label="N° Cartão"
                placeholder="000x"
                value={formik.values.numero}
                onChange={formik.handleChange}
                error={hasFormError(formik, "numero")}
            />

            <Input
                id="senha"
                type="password"
                label="Senha"
                placeholder="*******"
                value={formik.values.senha}
                onChange={formik.handleChange}
                error={hasFormError(formik, "senha")}
            />

            <Input
                id="validade"
                type="date"
                label="Validade"
                placeholder="01/01/0001"
                value={formik.values.validade}
                onChange={formik.handleChange}
                error={hasFormError(formik, "validade")}
            />

            <Input
                id="credito"
                type="number"
                placeholder="R$0,00"
                label="Valor Disponível (somente números)"
                value={formik.values.credito}
                onChange={formik.handleChange}
                error={hasFormError(formik, "credito")}
            />

            <button className="w-100 btn btn-sm btn-success" type="submit">
                Adicionar Aluno
            </button>
        </form>
    )
}