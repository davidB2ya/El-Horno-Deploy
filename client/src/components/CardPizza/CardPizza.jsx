import React from 'react'
import fontPizza from '../../assets/images (4).png'
import { ButtonIoIosHeart, ButtonSelect, Card, ContainerPrices, ContainerTitlePizza, FullPizza, HeartFavorite, Img, InfoCard, TitlePizza } from '../../Styles/Styled.js'

const CardPizza = ({data, addToCart}) => {

    const { id, title, description, price } = data
    
return (

    <Card >
        <Img src={fontPizza} alt="foto-pizza"/>
        <InfoCard>
            <ContainerTitlePizza>
                <TitlePizza>{title}</TitlePizza>
                <ButtonIoIosHeart><HeartFavorite/></ButtonIoIosHeart>
            </ContainerTitlePizza>
            <span>{description}</span>
            <br/>
            <ContainerPrices>
                <span>Precio: ${price}</span>
                <ButtonSelect onClick={()=>addToCart(id)}>Pedir <FullPizza/></ButtonSelect>
            </ContainerPrices>
        </InfoCard>
    </Card>
)
}

export default CardPizza