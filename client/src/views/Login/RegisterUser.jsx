import React from 'react'
import Register from '../../components/LogIn/Register'
import NavBar from '../../components/Navbar/NavBar'
import { ContainerLogin } from '../../Styles/Styled.js'

const RegisterUser = () => {
return (
        <ContainerLogin>
            <NavBar/>
            <Register/>
        </ContainerLogin>
    )
}

export default RegisterUser