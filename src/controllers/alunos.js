import { API_URL, defaults } from "../env"

export async function listAlunos() {
    const response = await fetch(`${API_URL}/alunos`, {
        method: 'GET',
        headers: defaults.headers
    });
    const data = await response.json();

    return data
}

export async function createAlunos(aluno) {
    const response = await fetch(`${API_URL}/alunos`, {
        method: 'POST',
        headers: defaults.headers,
        body: JSON.stringify(aluno)
    });
    const data = await response.json();

    return data
}