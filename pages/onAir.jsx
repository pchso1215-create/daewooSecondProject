

import onAir from './../assets/words_transparent/ONAIR.png'
import Logo from './../assets/MONITOR/MONITOR1.png'


import './../App.css';
import './style/onair.css'

export default function OnAir(){

    return(
        <main id='onair' className="main">
            <h2>
                <img src={onAir} alt='onAir' />
            </h2>
            <h1><img src={Logo} alt='로고' /></h1>
            <div className='subTitle'>
                <p>SEASON1-8(FINAL SEASON)</p>
                <p>각 동영상 스트리밍 플랫폼에서 서비스 중!</p>
            </div>
            <section>
                <article>
                    <h3>
                        무제한 스트리밍
                    </h3>
                </article>
            </section>
        </main>
    )
}