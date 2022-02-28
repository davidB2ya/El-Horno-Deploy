import React  from 'react'
import { Link , useLocation } from 'react-router-dom'
import logo from '../../assets/images.png'
// import {FiUser } from 'react-icons/fi'
import { Button,  CartIcon,  ContainerButton,  Content, Logo } from '../../Styles/Styled.js'
import {useSelector} from 'react-redux';

const NavBar = () => {
    
    const cart = useSelector (state => state.cart)

    console.log (cart)
    const location = useLocation();
    
return (
    <Content>
        <Link to="/home"><Logo src={logo} alt="Logo"></Logo></Link>

        <ContainerButton>
            <Link to="/register"><Button>Registrate</Button></Link>
            <Link to="/login"><Button>Entrar</Button></Link>
            {
                location.pathname === "/" || location.pathname === "/home" || location.pathname === "/dashboard" ? 
                <div></div> : 
                <div>
                    <Link to="/buys"><CartIcon/></Link>
                    {
                        cart.length === 0 ? <div></div> : <span style={{backgroundColor: "rgb(255, 45, 45)", padding: "0 4px ",maxWidth: "40px", height: "40px", borderRadius: "15px",fontSize: "16px",textAlign: "center", position: "relative", bottom: "30px", right: "5px"}}>{cart.cart.length}</span>
                    }
                </div>
                
            }
            {/* <Link to="/buys"><HiShoppingCart style={{fontSize:'40px', cursor:'pointer', color:'black'}}/></Link> */}
        </ContainerButton>
    </Content>

)
}

export default NavBar