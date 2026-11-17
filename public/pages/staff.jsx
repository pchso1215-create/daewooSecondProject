
import staff from './../assets/words_transparent/STAFF.png'

import './../App.css'
import "./style/staff.css"

export default function Staff(){

    return(
        <main id='staff' className="main">
            <h2>
                <img src={staff} alt="staff" />
            </h2>
            <article>
                <ul>
                    <li>원작: 호리코시 코헤이 (집영사 점프 코믹스 발행)</li>
                    <li>총감독: 나가사키 켄지</li>
                    <li>감독: 나카야마 나오미</li>
                    <li>시리즈 구성: 쿠로다 요스케 (스튜디오 올페)</li>
                    <li>캐릭터 디자인: 마고시 요시히코·오다지마 히토미</li>
                    <li>미술 감독: 이케다 시게미·마루야마 유키코 (아틀리에 무사)</li>
                    <li>색채 디자인: 기쿠치 카즈코 (Wish)</li>
                    <li>촬영 감독: 사와 타카시</li>
                    <li>3DCG 감독: 안도 요타</li>
                    <li>편집: 사카모토 쿠미코</li>
                    <li>음향 감독: 미마 마사후미</li>
                    <li>음악: 하야시 유우키</li>
                    <li>프로덕션·슈퍼바이즈: 본즈</li>
                    <li>애니메이션 제작: 본즈필름</li>
                    <li>제작: 나의 히어로 아카데미아 제작 위원회</li>
                </ul>
            </article>
            <p>쿠키 정책에 대하여</p>
        </main>
    )
}