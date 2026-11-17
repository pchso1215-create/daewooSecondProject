import './style/footer.css'

import UNDER1 from "./../assets/UNDER/UNDER1.png"
import UNDER2 from "./../assets/UNDER/UNDER2.png"
import UNDER3 from "./../assets/UNDER/UNDER3.png"
import UNDER4 from "./../assets/UNDER/UNDER4.png"

export default function Footer(){
    const unders = [UNDER1, UNDER2, UNDER3, UNDER4]

    return(
        <footer>
            <ul className='bnr_wrap'>
                {unders.map((under,i)=>
                    <li key={i}>
                        <img src={under} alt={i} />
                    </li>
                )}
            </ul>
        </footer>
    )
}