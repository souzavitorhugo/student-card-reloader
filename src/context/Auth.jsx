import { useState, useContext, createContext, useEffect } from "react"
import {fetchLogin} from "../controllers/usuarios"
import { defaults } from "../env"

const AuthContext = createContext();
const USUARIO_KEY = '@usuario' 

function persistLoginInStorage(usuario) {
    window.localStorage.setItem('USER_KEY', JSON.stringify(usuario))
}

function setToken(token = null) {
    if(!!token) {
        defaults.headers.Authorization = `Bearer ${token}`
    } else {
        defaults.headers.Authorization = null;
    }
}

function restoreLoginFromStorage() {
    let usuario = window.localStorage.getItem('USER_KEY');
    if(!!usuario) {
        usuario = JSON.parse(usuario);
        setToken(usuario?.token)

        return usuario
    }

    return null
}

function AuthProvider(props) {
    const [data, setData] = useState(null)

    const login = async ({email, senha}) => {
        try {
            const loginData = await fetchLogin({email, senha});

            if(!!loginData && !!loginData.error) {
              console.log('erro', loginData.error)
            }

            if(loginData && loginData.usuario && loginData.token) {
                const sessionData = {usuario: loginData.usuario, token: loginData.token}
                setData(sessionData);
                setToken(loginData.token)
                persistLoginInStorage(sessionData)
                return
            }
            window.alert('Usuário e/ou Senha inválido(s)')
          } catch (err) {
            logout();
            setToken(null)
            throw new Error('Tivemos problema com o login, tente novamente mais tarde. Caso persista, entre em contato conosco.')
          }
    };

    const logout = () => {
        setData(null);
        setToken(null);
        persistLoginInStorage(null)
    };

    useEffect(() => {
        if(!data) {
            const usuarioInStorage = restoreLoginFromStorage();

            if(usuarioInStorage){
                setData(usuarioInStorage)
            }
        }
    }, [])

    return<AuthContext.Provider value={{data, login, logout}} {...props}/>
}

const useAuth = () => {
    const context = useContext(AuthContext);;
    
    if(context === undefined) {
        throw new Error('useAturh must be used within a AuthProvider')
    }

    return context
}

export {AuthProvider, useAuth}