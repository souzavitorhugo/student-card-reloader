import React from "react"
import {useAuth} from './Auth'

const UsuarioContext = React.createContext();

function UsuarioProvider(props) {
    const {data} = useAuth();
    const isLogged = !!data && !!data.usuario;
    const isAdm = !!data && data.usuario.tipo === 0;

    return <UsuarioContext.Provider value={{isLogged, isAdm, usuario: data?.usuario, token: data?.token, tipoUsuario: data?.usuario.tipo}} {...props}/>
}

function useUsuario() {
    const context = React.useContext(UsuarioContext);;
    
    if(context === undefined) {
        throw new Error('useUsuario must be used within a UsuarioProvider')
    }

    return context
}

export {UsuarioProvider, useUsuario}