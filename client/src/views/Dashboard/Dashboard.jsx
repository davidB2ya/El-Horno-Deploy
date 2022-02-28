import React from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import TablePrincipal from '../../components/Tables/TablePrincipal'
import GrafCircle from '../../components/Tables/GrafCircle'
import SiderBar from '../../components/SiderBar/SiderBar'
import NavBar from '../../components/Navbar/NavBar'
import Traking from '../../components/Traking/Traking'
import { ContainerDashboard } from '../../Styles/Styled'

const Dashboard = () => {
  return (
    <div>
      <NavBar/>
      <button style={{border:"none" , background: "transparent"}}>
          <HiOutlineMenuAlt2 style={{fontSize:'50px', cursor:'pointer', color:'black', marginLeft:'.2em', marginTop:'.2em'}}/>
      </button>
      <ContainerDashboard>
        <SiderBar/>
        <Traking/>
        <GrafCircle/>
        <TablePrincipal/>
      </ContainerDashboard>
    </div>
  )
}

export default Dashboard