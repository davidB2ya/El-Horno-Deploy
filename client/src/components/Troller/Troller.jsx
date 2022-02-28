import React from 'react';
import {useSelector} from 'react-redux';
// import { CardPizza } from '../../Styles/Styled';
import ListCardPizza from '../ListCardPizza/ListCardPizza'

const Troller = () => {

  const cart = useSelector (state => state.cart)

  console.log (cart)

  return (
    <div>
      
      {
        cart.length === 0 ? <h2>Listado de Compras</h2> : <h2>Carrito Vacio</h2>
      }
      <ListCardPizza data={cart.cart}/>
    </div>
  )
}

export default Troller