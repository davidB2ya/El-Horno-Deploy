import React from 'react'
import ListCardPizza from '../../components/ListCardPizza/ListCardPizza'
import NavBar from '../../components/Navbar/NavBar'
import { Button, CodeChef, ContainerDelivery } from '../../Styles/Styled'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {

    const cart = useSelector (state => state.cart)

return (
    <div>
        <NavBar/>
        <ContainerDelivery>
            <Link to="/chef"><Button>Hacer mi propia Pizza<CodeChef/></Button></Link>
        </ContainerDelivery>
        <ListCardPizza data={cart.products}/>
    </div>
)
}

export default Products