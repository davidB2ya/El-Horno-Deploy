import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import LogIn from '../../components/LogIn/LogIn';
import { ContainerLogin } from '../../Styles/Styled.js'

const Login = () => {
    
    return (
        <ContainerLogin>
            <NavBar/>
            <LogIn/>
        </ContainerLogin>
    )
}

export default Login