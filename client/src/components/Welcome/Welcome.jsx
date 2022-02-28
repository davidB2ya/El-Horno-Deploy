import React from 'react'
import Pizzas from '../../assets/images (7).jfif'
import { Link } from "react-router-dom"
import { ButtonDelivery, ContainerWelcome, ImgWelcome, ParWelcome, TextWelcome, TitlePrincipal } from '../../Styles/Styled.js'

const Welcome = () => {

return (
    <ContainerWelcome>
        <TextWelcome>
            <TitlePrincipal>Envios <br/>Express en <br/>Pizzerias El Horno  </TitlePrincipal>
            <ParWelcome>Los mejores pizzeros del país a tu disposición las 24 horas.<br/>Que esperas ❓ Haz tu pedido ya 👇🏻👇🏻</ParWelcome>
            <Link to="/products"><ButtonDelivery>Ordenar 🍕</ButtonDelivery></Link>
        </TextWelcome>
        <ImgWelcome>
                <img src={Pizzas} alt="Imagenes Pizzas"></img>
        </ImgWelcome>
    </ContainerWelcome>
)
}

export default Welcome