import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Login, CardLogin, TitleRegister, Input, ButtonDelivery} from '../../Styles/Styled.js'
import ImgPizza from '../../assets/images (2).jfif'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    const baseUrl = 'http://localhost:1337'

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/register`, {
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
    }

return (
    <Login>
        <CardLogin>
        <img src={ImgPizza} alt="img pizza" ></img>
            <TitleRegister>Registrate</TitleRegister>
            <form onSubmit={registerUser}>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nombre"
                />
                <br />
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Correo"
                />
                <br />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Contraseña"
                />
                <br />
                <ButtonDelivery>Registrarse</ButtonDelivery>
            </form>
        </CardLogin>    
    </Login>
)
}

export default Register