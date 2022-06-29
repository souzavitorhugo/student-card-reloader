import { useEffect, useState } from 'react';
import {listAlunos} from '../../../controllers/alunos'

export default function TableAlunos() {

    const [alunos, setAlunos] = useState([]);

    async function fetchListaAlunos() {
      try {
        const data = await listAlunos();
        setAlunos(data);
      } catch(err) {
        alert('Não foi possível carregar a lista de alunos');
      }
    }
    
    useEffect(() => {
      fetchListaAlunos()
    }, []);

    return (
        <div className="table-responsive container-table">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th className="text-center" style={{ width: 250 }}>
                E-mail
              </th>
              <th className="text-center" style={{ width: 250 }}>
                Escola
              </th>
            </tr>
          </thead>
            {!!alunos && (
                <tbody>
                    {alunos.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center p-5">
                                Nenhum Aluno cadastrado em nossos sistemas!
                            </td>
                        </tr>
                    )}

                    {alunos.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td className="text-center">{item.email}</td>
                            <td className="text-center">{item.Escola?.nome}</td>
                        </tr>
                    ))}
                </tbody>
          )}
        </table>
        </div>

    )
}