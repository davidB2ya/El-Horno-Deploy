import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SiCodechef} from 'react-icons/si'
import { IoIosHeart } from 'react-icons/io'
import { GiFullPizza } from 'react-icons/gi'
import { HiShoppingCart } from 'react-icons/hi'

// Welcome
export const ContainerWelcome = styled.div`
    display: block;
    padding: .5em 1em 2em 1em;
    cursor: default;
    overflow-x: hidden;
    @media (min-width: 600px){
        padding: 0em 1em 2em 6em;
    }
    @media (min-width: 768px){
        display: flex;
        gap: 2em;
        padding: 4em 2em 2em 4em;
    }
`

export const TextWelcome = styled.div`
    width: 90vw;
    @media (min-width: 768px){
        width: 50vw;
    }
`

export const ImgWelcome = styled.div`
display: flex;
justify-content: center;
margin-top: 1em;
    img{
        width: 65vw;
        margin-left:-16px;
        border-radius: 10px;
        @media (min-width: 600px){
            width: 60vw;
            margin-left:-40px;
        }
        @media (min-width: 768px){
            width: 35vw;
            height: 35vh;
            margin-left: 0px;
        }
        @media (min-width: 1024px){
            width: 40vw;
            height: 45vh;
        }
    }
`

export const TitlePrincipal = styled.h1`
    font-size:40px;
    color: #C93107;
    @media (min-width: 600px){
        font-size:50px;
    }
    @media (min-width: 768px){
        font-size:60px;
    }
`

export const ParWelcome = styled.p`
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 450;
    line-height: 20px;
    letter-spacing: 1.2px;
`

export const ButtonDelivery = styled.button`
    background: #C93107;
    border-radius: 20px;
    border: none !important;
    width: 200px;
    height: 56px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1.71429px;
    margin: 1em 4em 1em 4em;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    outline: none;
    @media (min-width: 600px){
        margin: 1em 5em 1em 5em;
    }

    :hover{
        background-color: #e25a34;
        box-shadow: 0px 15px 20px rgba(226, 90, 66, 0.308);
        color: #fff;
        transform: translateY(-7px);
}

`

// Navbar
export const Content = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family: Roboto, sans-serif;
        margin: 2em 0 2em 1em;
        @media (min-width: 768px) {
            justify-content: space-around;

        }
    `

export const Logo = styled.img`
        width:80px; 
        height:35px;
        margin-right: 1em;
        cursor: pointer;
    `

export const Items = styled.li`
        color:black;
        font-size:20px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 1.71429px;
        list-style-type: none;
        cursor : pointer;
    `

export const ContainerButton = styled.div`
        display: flex;
        gap: 1em;
    `

export const Button = styled.button`
        padding: .5em 1em .5em 1em;
        background: #C93107;
        border-radius: 12px;
        border: none !important;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        letter-spacing: 1.2px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        outline: none;
        cursor : pointer;
        :hover {
            background: #e25a34;
        }
    `
export const MenuLink = styled(Link)`
        cursor: pointer;
        text-decoration: none;
        color: #000;
        transition: all 0.2s ease-in;
        &:hover {
        color: #C93107;
        }
    `
export const CartIcon = styled(HiShoppingCart)`
        cursor: pointer;
        font-size: 40px;
        text-decoration: none;
        color: black;
        transition: all 0.2s ease-in;
        &:hover {
        color: #C93107;
        }
    `

// CreatePizza
export const ContainerChef = styled.div`
        display: flex;
        justify-content: center;
    `

export const CardPizza = styled.div`
        width : 360px;
        height : 600px;
        border-radius : 10px;
        color : #fff;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        cursor: default;
        @media (min-width: 600px) {
            width:400px;
        }
    `

export const ContainerPizzaChef = styled.div`
    margin-bottom: 3em;

    img{
        width:360px;
        height:140px;
        margin-bottom:5em;
        position:absolute;
        border-radius:10px;
        @media (min-width: 600px) {
            width:400px;
        }
    }
    
`

// IamChef
export const TitleIamChef = styled.h2`
    display: flex;
    justify-content: center;
    color: #C93107;
    font-size: 40px;
`
export const TextChef = styled.p`
    display: flex;
    justify-content: center;
    color: #000;
    font-size: 18px;
    width:300px;
    margin: auto;
    padding:1em 0;
`

export const LogoChef = styled(SiCodechef)`
    font-size:100px;
    margin-left: 230px; 
    margin-top: 20px;
    color: #fff; 
    position:relative;
    @media (min-width: 600px) {
        margin-left: 250px; 
    }
`

export const Input = styled.input`
        border-radius: 10px;
        border: solid 1px #C93107;
        width: 18em;
        height: 40px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #5A291B;
        letter-spacing: 1px;
        margin: 1em 2.5em 0em 2.4em;
        padding-left: 1em;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        outline: none;
        margin:auto;
        display:block;
    `

// CardPizza
export const Card = styled.div`
        width : 360px;
        height : 180px;
        border-radius : 10px;
        overflow : hidden;
        display: flex;
        color : #fff;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        cursor: default;
        @media (min-width: 600px) {
            width : 400px;
            height : 160px;
        }
`

export const Img = styled.img`
        z-index : 0;
        position : absolute;
        width: 245px;
        height: 180px;
        border-radius : 10px;
        @media (min-width: 600px) {
            width:340px;
            height : 160px;
        }
    `

export const InfoCard = styled.div`
        z-index : 1;
        background: linear-gradient(to left, rgba(226,90,52,1) 5%, rgba(185,75,44,1) 20%, rgba(55,48,48,1) 75%, transparent);
        width : 300px;
        height : 180px;
        margin-left : 160px;
        @media (min-width: 600px) {
            width : 200px;
            margin-left : 200px;
        }
    `
export const ContainerTitlePizza = styled.div`
        display: flex;
        align-items : center;
        justify-content : space-around;
    `

export const TitlePizza = styled.h3`
        font-size:20px;
        font-family: Roboto, sans-serif;
        margin-left: -30px;
    `

export const ContainerPrices = styled.div`
        display: flex;
        justify-content : space-between;
        padding-right : 10px;
        align-items : center;
        margin-top : 20px;
    `

export const ButtonIoIosHeart = styled.button`
        font-size:22px;
        background: transparent;
        border: none;
        cursor: pointer;
    `

export const ButtonSelect = styled.button`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width : 80px;
        height : 30px;
        background: #42A650;
        border-radius: 8px;
        border: none !important;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        color: #FFFFFF;
        letter-spacing: 1px;
        cursor: pointer;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease 0s;
        outline: none;
        :hover{
            background-color: #2EE59D;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: #fff;
            transform: translateY(-7px);
        }
    `

export const HeartFavorite = styled(IoIosHeart)`
    font-size:25px;
    color: #fff;
`
export const FullPizza = styled(GiFullPizza)`
    font-size:20px;
    color: #fff;
`


// ListCardPizza
export const List = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap:1rem;
        justify-items: center;
        margin: .5em .5em .5em .5em;
        @media (min-width: 600px) {
            margin: 1.2em 2em 1em 1.2em;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
    `

export const ContainerProducts = styled.div`
        

    `
export const ContainerDelivery = styled.div`
        margin: 2em 0;
        display: flex;
        justify-content: center;

    `
export const CodeChef = styled(SiCodechef)`
    font-size:20px;
    margin-left: 10px;
`  

// Login
export const Login = styled.div`
    display: flex;
    justify-content: center;
    margin-top:2em;
`

export const CardLogin = styled.div`
    width : 360px;
    height : 560px;
    border-radius : 10px;
    overflow : hidden;
    display: flex;
    flex-direction : column;
    color : #fff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    cursor: default;
    @media (min-width: 600px) {
        width : 400px;
        }
    img{
        width:400px;
        height:150px;
    }
`

export const TitleRegister = styled.h1`
    color : #fff;
    font-family: 'Average', serif;
    font-size: 40px;
    font-style: normal;
    font-weight: normal;
    margin-top: -110px;
    margin-bottom: 100px; 

`
export const ContainerLogin = styled.div`
    display: block;
    flex-direction:column;
    text-align: center;
    margin: auto;
    gap: 1em;
    cursor:default;
`
// SiderBar
export const ContainerSiderBar = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between; 
    padding: 1em;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    background-color: #be4030;
    top:1em;
    position: absolute;
    z-index:1;
    left: -15em;
`

// Traking
export const SquareTraking = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    border: 1px solid black;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    cursor: default;
`
export const General = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        color: #be4030;
    }
    h3{
        font-size: 20px;
    }
    span{
        font-size:20px;
        background-color:#2EE59D;
        border-radius: 20px;
        padding: 10px;
    }
`
// Dashboard
export const ContainerDashboard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
