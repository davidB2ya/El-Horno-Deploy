import React from 'react'
import CardPizza from '../CardPizza/CardPizza'
import { ContainerProducts, List } from '../../Styles/Styled.js'
import { addToCart } from '../../redux/actions/cartAction'
import { useDispatch} from 'react-redux';
// import {SiCodechef} from 'react-icons/si'

const ListCardPizza = ({data}) => {
    
    const dispatch = useDispatch()

return (
    <ContainerProducts>
        <List>
            {data.map((product) => (
            <CardPizza key={product.id} data={product} addToCart={()=> dispatch(addToCart(product.id))} />
            ))}
        </List>
    </ContainerProducts>
    
)
}

export default ListCardPizza