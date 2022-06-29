import { useState, useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import LoadingHolder from "../loadigHolder";
import {useUsuario} from '../../../context/usuario';
import { MenuUsuarioPadrao } from "../../components/GeneralComponents/user-navigation.jsx";
import Input from '../../components/GeneralComponents/input-sist';
import {hasFormError} from '../../components/GeneralComponents/util';
import {recarregaCartao} from '../../../controllers/cartao'
import { getUsuario } from "../../../controllers/usuarios";

const validationSchema = Yup.object({
    valorRecarga: Yup.string().required("Campo obrigatório")
});

export default function PaginaUsuario() {

    const { usuario } = useUsuario();
    const [dadosUsuarioLogado, setdadosUsuarioLogado] = useState();
    let [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            valorRecarga: ""
        },
        validationSchema,
        onSubmit: async values => {
            console.log(values)
            console.log(dadosUsuarioLogado)
            let newValue = (parseInt(dadosUsuarioLogado.Cartao.credito, 10) + parseInt(values.valorRecarga, 10)),
                dto = {
                    idCartao: dadosUsuarioLogado.Cartao?.id,
                    novoCredito: `${newValue}`
                }
          try {
            const data = await recarregaCartao(dto);
            if(!!data?.success){
                window.location.reload();
            }
          } catch (err) {
            alert(err.message);
          }
        },
    });
    
    function liberaContainerRecarga(){
        let containerRecarga = document.getElementById('container-recarga')

        if(containerRecarga) containerRecarga.classList.toggle('hidden')
    }

    async function fetchDadosUsuario() {
        setLoading(true);
        try {
            const data = await getUsuario(usuario.id)
            setdadosUsuarioLogado(data);
            console.log(dadosUsuarioLogado)
        } catch(err) {
            alert('Não foi possível carregar a lista de alunos');
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDadosUsuario();
    }, []);

    return (
        <div id="pagUsuarioPadrao">

            <header className="page-header">
                <MenuUsuarioPadrao />
            </header>

            <main className="main-container">

                <div className="py-5 px-3 center-mid column">

                    <LoadingHolder loading={loading}/>
                    <h2 className="mb-5 text-center text-light">Bem vindo, {usuario.nome}</h2>
                    
                    {dadosUsuarioLogado && dadosUsuarioLogado.Cartao? 
                        <div className="center-mid row w-100"> 

                            <div className="card-user px-4 py-2 d-flex flex-column">

                                <p className="mt-5"> <i> Cartão do Estudante - ACTU </i> </p>

                                <p id="numcard" className=""><i> {dadosUsuarioLogado.Cartao.numero}</i></p>

                                <p id="namecard"> <b> {dadosUsuarioLogado.nome} {dadosUsuarioLogado.sobrenome} </b> </p>

                            </div>

                            <div className="saldo-container center-mid column p-3 text-light"> 
                            
                                <h5 className="w-100 text-center"> Seu Saldo: </h5>

                                <p id="saldoconta" className="w-100 d-flex mt-2"> R${dadosUsuarioLogado.Cartao.credito} </p>

                                <button onClick={liberaContainerRecarga} className="w-100 btn-recarregar py-2 text-light"> Recarregar Cartão </button> 

                            </div>

                        </div> :  
                        
                        <div> 
                            <h1> Não tem cartao </h1>
                        </div> 
                    }
                    

                </div>

            </main>

            <section id="container-recarga" className="center-mid column w-100 p-4 hidden">

                <h5 className="text-center"> Digite o valor da recarga </h5>

                <form onSubmit={formik.handleSubmit}> 

                    <Input
                        id="valorRecarga"
                        type="text"
                        label="Somente Valor"
                        placeholder="R$0,00"
                        value={formik.values.valorRecarga}
                        onChange={formik.handleChange}
                        error={hasFormError(formik, "valorRecarga")}
                    />

                    <button className="w-100 btn btn-sm btn-success" type="submit">
                        Recarregar Cartão
                    </button>
                </form>

            </section>
        </div>
    )
}