import { useEffect, useState } from 'react';
import {listEscolas} from '../../../controllers/escolas'

export default function TableAlunos() {

    const [escolas, setEscolas] = useState([]);

    async function fetchListaEscolas() {
      try {
        const data = await listEscolas();
        setEscolas(data);
      } catch(err) {
        alert('Não foi possível carregar a lista de escolas');
      }
    }
    
    useEffect(() => {
      fetchListaEscolas()
    }, []);

    return (
        <div className="table-responsive container-table">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th className="text-center" style={{ width: 250 }}>
                Local
              </th>
              <th className="text-center" style={{ width: 250 }}>
                CNPJ
              </th>
              <th className="text-center" style={{ width: 250 }}>
                Quantidade Alunos
              </th>
            </tr>
          </thead>
            {!!escolas && (
                <tbody>
                    {escolas.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center p-5">
                                Nenhum Aluno cadastrado em nossos sistemas!
                            </td>
                        </tr>
                    )}

                    {escolas.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td className="text-center">{item.local}</td>
                            <td className="text-center">{item.cnpj}</td>
                            <td className="text-center">{item.qtdeAlunos}</td>
                        </tr>
                    ))}
                </tbody>
          )}
        </table>
        </div>

    )
}