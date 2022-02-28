import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../../assets/images (5).jfif' 
import { ButtonDelivery, CardPizza, ContainerChef, ContainerPizzaChef, Input, LogoChef } from '../../Styles/Styled.js'


const CreatePizza = () => {

    const navigate = useNavigate();
    const [client, setClient] = useState('');
    const [namePizza, setNamePizza] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const baseUrl = 'http://localhost:1337'

    async function newSales(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/new/sales`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client,
                namePizza,
                phone,
                address,
                // price,
                // ingredients
            }),
        });

        const data = await response.json();
        console.log(data);
        
        if(data.msg === 'We have a new sale!'){
                navigate("/products")
        }else{
            alert("Pedido fallido")
        }
    }

return (
    <ContainerChef>
        <CardPizza>
            <ContainerPizzaChef>
                <img src={img} alt="img pizza"></img>
                <LogoChef/>
            </ContainerPizzaChef>
            <div>
            <form onSubmit={newSales}>
                <Input
                    value={client}
                    onChange={(e) => setClient(e.target.value)} 
                    type="text"
                    placeholder="Nombre"
                />
                <br/>
                <Input
                    value={namePizza}
                    onChange={(e) => setNamePizza(e.target.value)}
                    type="text"
                    placeholder="Puede nombrar su Pizza"
                />
                <br/>
                <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="phone"
                    placeholder="Teléfono"
                />
                <br/>
                <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Dirección"

                />
                
                <br/>
                <ButtonDelivery>Hornear 🍕</ButtonDelivery> 
                </form>
            </div>
        </CardPizza>
        
    </ContainerChef>
)
}

export default CreatePizza