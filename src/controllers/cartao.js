import { API_URL, defaults } from "../env"

export async function listCartoes() {
    const response = await fetch(`${API_URL}/cartao`, {
        method: 'GET',
        headers: defaults.headers
    });
    const data = await response.json();

    return data
}

export async function createCartao(aluno) {
    const response = await fetch(`${API_URL}/cartao`, {
        method: 'POST',
        headers: defaults.headers,
        body: JSON.stringify(aluno)
    });
    const data = await response.json();

    return data
}

export async function recarregaCartao(dadosCartao) {
    const response = await fetch(`${API_URL}/cartao/${dadosCartao.idCartao}`, {
        method: 'PUT',
        headers: defaults.headers,
        body: JSON.stringify({
            credito: dadosCartao.novoCredito
        })
    });
    const data = await response.json();

    return data
}