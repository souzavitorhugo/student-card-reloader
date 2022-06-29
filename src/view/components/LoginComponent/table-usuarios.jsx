import { useEffect, useState, Fragment } from 'react';

import {Link} from "react-router-dom"

import {listUsuarios, destroyUsuarios} from '../../../controllers/usuarios'

export default function TableUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    async function fetchListaUsuarios() {
      try {
        const data = await listUsuarios();
        setUsuarios(data);

      } catch(err) {
        alert('Não foi possível carregar a lista de alunos');
      }
    }

    async function fetchDestroyUsuario(usuario) {
      if(window.confirm(`Confirma a exclusão do Usuário ${usuario.nome} (${usuario.id})`)) {
        try {
          const data = await destroyUsuarios(usuario.id);
          if(data && data.success) {
            window.alert('Usuário deletado com sucesso!')
            window.location.reload()
          }

        } catch(err) {
          console.log(err)
          alert('Não foi possível excluir o usuario');
        }
      }
    }

    useEffect(() => {
      fetchListaUsuarios();
    }, []);

    return (
        <div className="table-responsive container-table">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th className="text-center" style={{ width: 112 }}>
                N° Cartao
              </th>
              <th className="text-center" style={{ width: 112 }}>
                Saldo
              </th>
              <th className="text-center" style={{ width: 146 }}>
                Escola
              </th>
              <th className="text-center" style={{ width: 146 }}>
                Tipo usuario <br/>(0 = Adimn)
              </th>
              <th className="text-center" style={{ width: 146 }}>
                Editar
              </th>
              <th className="text-center" style={{ width: 146 }}>
                Excluir
              </th>
            </tr>
          </thead>
            {!!usuarios && (
                <tbody>
                    {usuarios.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center p-5">
                                Nenhum Usuario cadastrado em nossos sistemas!
                            </td>
                        </tr>
                    )}

                    {usuarios.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td className="text-center">{item.Cartao?.numero}</td>
                            <td className="text-center">R$ {item.Cartao?.credito}</td>
                            <td className="text-center">{item.Aluno?.EscolaId}</td>
                            <td className="text-center">{item.tipo}</td>
                            {item.tipo === 0 ? 
                              <Fragment>
                                <td className="text-center"> 
                                  -
                                </td> 
                                <td className=" text-center"> 
                                  -
                                </td>
                              </Fragment>
                              : 
                              <Fragment>
                                <td className=" text-center">
                                  <Link to={`/edit/${item.id}`} className="btn btn-primary">
                                    Editar
                                  </Link>
                                </td>

                                <td className=" text-center"> 
                                  <button onClick={e => {
                                    e.preventDefault();
                                    fetchDestroyUsuario(item);
                                  }}type="button" className="btn btn-danger">Excluir</button>
                                </td>
                              </Fragment>
                            }
                        </tr>
                    ))}
                </tbody>
          )}
        </table>
        </div>

    )
}