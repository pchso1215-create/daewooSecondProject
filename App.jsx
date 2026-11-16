 
import {Routes, Route} from "react-router-dom"

import Header from "./components/header"
import Footer from "./components/footer"
import top from './assets/words_transparent/top.png'
import episodes from './assets/words_transparent/EPISODES.png'
import gallery from './assets/words_transparent/GALLERY.png'
import news from './assets/words_transparent/NEWS.png'
import staff from './assets/words_transparent/STAFF.png'
import movie from './assets/words_transparent/MOVIE.png'
import onAir from './assets/words_transparent/ONAIR.png'
import music from './assets/words_transparent/MUSIC.png'
import special from './assets/words_transparent/SPECIAL.png'
import introduction from './assets/words_transparent/INTRODUCTION.png'
import goods from './assets/words_transparent/GOODS.png'
import books from './assets/words_transparent/BOOKS.png'
import character from './assets/words_transparent/CHARACTER.png'
import dvd from './assets/words_transparent/BLU-RAY.png'

import Home from './pages/home'
import Staff from "./pages/staff"
import OnAir from "./pages/onAir"


import "./app.css"

function App(){

  const menus = [
          {name :"top", img : top , path:"/top"},
          {name :"episodes", img : episodes , path:"/episodes"},
          {name :"gallery", img : gallery , path:"/gallery"},
          {name :"news", img : news , path:"/news"},
          {name :"staff", img : staff , path:"/staff"},
          {name :"movie", img : movie , path:"/movie"},
          {name :"onAir", img : onAir , path:"/onAir"},
          {name :"music", img : music , path:"/music"},
          {name :"special", img : special , path:"/special"},
          {name :"introduction", img : introduction , path:"/introduction"},
          {name :"goods", img : goods , path:"/goods"},
          {name :"books", img : books , path:"/books"},
          {name :"character", img : character , path:"/character"},
          {name :"dvd", img : dvd , path:"/dvd"}
      ]

  return(
    <>
      <Header menus={menus} />
      <Routes >
        <Route path="/" element ={<Home menus={menus} />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/onAir" element={<OnAir />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App