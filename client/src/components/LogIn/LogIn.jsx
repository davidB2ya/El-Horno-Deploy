import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Login, CardLogin, TitleRegister, Input, ButtonDelivery} from '../../Styles/Styled.js'
import ImgPizza from '../../assets/images (1).jfif'

const LogIn = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    const baseUrl = 'http://localhost:1337'

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                location,
            }),
        });

        const data = await response.json();
        console.log(data);
        
        if(data.msg === 'Login success!'){
            if(data.role === 2){
                navigate("/dashboard")
            }else{
                navigate("/products")
            }
        }else{
            alert("Ingreso fallido")
        }
    }

return (
    <Login>
        <CardLogin>
        <img src={ImgPizza} alt="img pizza" ></img>
            <TitleRegister>Entrar</TitleRegister>
            <form onSubmit={registerUser}>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nombre"
                    autoComplete='off'
                />
                <br />
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Correo"
                    autoComplete='false'
                />
                <br />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Contraseña"
                    autoComplete='false'
                />
                <br />
                <ButtonDelivery>Ingresar</ButtonDelivery>
            </form>
        </CardLogin>    
    </Login>
)
}

export default LogIn