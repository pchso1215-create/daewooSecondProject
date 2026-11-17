import { Link } from "react-router-dom"
import { useState } from "react"

import Logo from './../assets/MONITOR/MONITOR1.png'
import menu from './../assets/MONITOR/MONITOR2.png'

import Nav from './nav'
export default function Header({menus}){
        const [isVisiable, setIsVisiable] = useState(false)

        const visiable = ()=> setIsVisiable(!isVisiable)
    return(
        <>
            <header style={style.header}>
                <h1 style={style.logo}><Link to="/"><img src={Logo} alt="로고" /></Link></h1>
                <div className="nav_btn" onClick={visiable}><img src={menu} alt="menu" /></div>
            </header>
            {isVisiable && <Nav show = {visiable} menus={menus} /> }
        </>
    )
}
const style = {
    header : {
        width : '100%',
        backgroundColor : "#369195",
        position : 'fixed',
        display :'flex',
        justifyContent : "flex-end",
        fontSize: "0",
        top:0,
        zIndex:9999999999
        
    },
    logo :{
        position: " absolute",
        top : "60px",
        left : "0"
    }
}