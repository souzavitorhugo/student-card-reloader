import { API_URL, defaults } from "../env"

export async function listEscolas() {
    const response = await fetch(`${API_URL}/escolas`, {
        method: 'GET',
        headers: defaults.headers
    });
    const data = await response.json();

    return data
}