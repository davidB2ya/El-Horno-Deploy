import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import { MdSpaceDashboard } from 'react-icons/md'
import { VscGraph } from 'react-icons/vsc'
import { ContainerSiderBar } from '../../Styles/Styled.js'

const SiderBar = () => {

return (
    <ContainerSiderBar>
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>General  <MdSpaceDashboard/></li>
                <li>Detalles <VscGraph/></li>
            </ul>
        </div>
        <CgCloseR style={{fontSize:'50px', cursor:'pointer', color:'#fff', marginLeft:'.2em', marginTop:'.2em'}}/>
    </ContainerSiderBar>
)
}

export default SiderBar