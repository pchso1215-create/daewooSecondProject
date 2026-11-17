import {Link} from 'react-router-dom'
import mainImg from '../assets/INTRO/INTRO1.png'
import logo from '../assets/MONITOR/MONITOR1.png'
import INTRO2 from '../assets/INTRO/INTRO2.png'
import INTRO3 from '../assets/INTRO/INTRO3.png'
import INTRO4 from '../assets/INTRO/INTRO4.png'
import INTRO5 from '../assets/INTRO/INTRO5.png'
import INTRO6 from '../assets/INTRO/INTRO6.png'

import './style/home.css'

export default function Home({menus}){
    const intros = [INTRO2, INTRO3, INTRO4, INTRO5, INTRO6]    

    return(
        <main id="index">
            <div className='mainImg'><img src={mainImg} alt="my hero academia" /></div>
            <section className='sec1' style={{padding:"50vh 0"}}>
                <h1><Link to="/"><img src={logo} alt="logo" /></Link></h1>                
                <article>  
                    <ul>
                        {intros.map((intro)=>
                            <li><img src={intro} alt="banner" /></li>
                        )}
                    </ul>
                </article>
                
            </section>
            <section className='sec2'>
                <ul>
                  {menus.slice().reverse().map((menu)=>(
                        <li key={menu.name}>
                            <Link to={menu.path}>
                                <img src={menu.img} alt={menu.name} />
                            </Link>
                        </li>
                    ))}  
                </ul>
            </section>
        </main>
    )
}