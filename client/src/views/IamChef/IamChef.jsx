import React from 'react'
import CreatePizza from '../../components/CreatePizza/CreatePizza'
import NavBar from '../../components/Navbar/NavBar'
import { TextChef, TitleIamChef } from '../../Styles/Styled'

const IamChef = () => {
  return (
    <div>
      <NavBar/>
      <TitleIamChef>Bienvenidos al Horno</TitleIamChef>
      <TextChef>En esta área podras pedir tu pizza con los agregos que mas te gusten como un auténtico Chef</TextChef>
      <CreatePizza/>
    </div>
  )
}

export default IamChef