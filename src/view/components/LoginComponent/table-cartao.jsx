import { useEffect, useState } from 'react';
import {listCartoes} from '../../../controllers/cartao'

export default function TableCartoes() {

    const [cartoes, setCartoes] = useState();

    async function fetchListaCartoes() {
      try {
        const data = await listCartoes();
        setCartoes(data);

      } catch(err) {
        alert('Não foi possível carregar a lista de alunos');
      }
    }

    useEffect(() => {
      fetchListaCartoes()
    }, [])

    return (
        <div className="table-responsive container-table">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center" >
                N° Cartao
              </th>
              <th className="text-center">
                Saldo
              </th>
              <th className="text-center" >
                Validade
              </th>
            </tr>
          </thead>
            {!!cartoes && (
                <tbody>
                    {cartoes.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center p-5">
                                Nenhum Usuario cadastrado em nossos sistemas!
                            </td>
                        </tr>
                    )}

                    {cartoes.map(item => (
                        <tr key={item.id}>

                          <td  className="text-center">{item.numero}</td>
                          <td className="text-center">R$ {item.credito}</td>
                          <td className="text-center">{item.validade}</td>

                        </tr>
                    ))}
                </tbody>
          )}
        </table>
        </div>

    )
}