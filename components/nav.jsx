import {Link} from "react-router-dom"

import "./style/header.css"

import Logo from "./../assets/MONITOR/MONITOR1.png"

export default function Nav({show, menus}){

    return(
        <nav>
            <div className="top">
                <ul>
                    <li><Link to="page/login">로그인</Link></li>
                    <li><Link to="page/join">회원가입</Link></li>
                </ul>
                <div className="close" onClick={show}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="bot">
                <div className="Logo"><Link to="/" onClick={show}>
                    <img src={Logo} alt="로고" />
                </Link></div>
                <ul className="nav_lists">
                    {menus.map((menu)=>(
                        <li key={menu.name}>
                            <Link to={menu.path} onClick={show}>
                                <img src={menu.img} alt={menu.name} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}