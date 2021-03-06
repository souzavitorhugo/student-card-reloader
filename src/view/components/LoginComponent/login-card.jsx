import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import * as Yup from "yup";

import { hasFormError } from "../GeneralComponents/util";
import {useAuth} from '../../../context/Auth'
import Input from '../GeneralComponents/input-sist';

export default function LoginForm() {
  let navigate = useNavigate();
  let {login} = useAuth();

  const validationSchema = Yup.object({
      email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
      senha: Yup.string().required("Campo obrigatório"),
  });

  const formik = useFormik({
      initialValues: {
        email: "",
        senha: "",
      },
      validationSchema,
      onSubmit: async values => {
        try {
          await login(values)
          navigate("/", {replace: true});
        } catch (err) {
          alert(err.message);
        } finally {
        }
      },
  });


  return (
      <div className="card-body">

          <form onSubmit={formik.handleSubmit}> 

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
                  placeholder="*******"
                  value={formik.values.senha}
                  onChange={formik.handleChange}
                  error={hasFormError(formik, "senha")}
              />

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Efetuar Login
              </button>
          </form>

      </div>
  )

}