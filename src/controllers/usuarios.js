import { API_URL, defaults } from "../env"

export async function fetchLogin(formData) {
    const response = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();

    return data;
}

export async function listUsuarios() {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: 'GET',
        headers: defaults.headers
    });
    const data = await response.json();

    return data
}

export async function getUsuario(usuario) {
    const response = await fetch(`${API_URL}/usuarios/${usuario}`, {
        method: 'GET',
        headers: defaults.headers,
    });

    const data = await response.json();

    return data
}

export async function createUsuarios(usuario) {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: defaults.headers,
        body: JSON.stringify(usuario)
    });

    const data = await response.json();

    return data
}

export async function updateUsuarios(usuario) {
    const response = await fetch(`${API_URL}/usuarios/${usuario.id}`, {
        method: 'PUT',
        headers: defaults.headers,
        body: JSON.stringify(usuario)
    });

    const data = await response.json();

    return data
}

export async function destroyUsuarios(usuario) {
    const response = await fetch(`${API_URL}/usuarios/${usuario}`, {
        method: 'DELETE',
        headers: defaults.headers,
    });

    const data = await response.json();

    return data
}