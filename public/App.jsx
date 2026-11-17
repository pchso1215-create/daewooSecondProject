import { useState } from "react";
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
import dpecial from './assets/words_transparent/SPECIAL.png'
import itroduction from './assets/words_transparent/INTRODUCTION.png'
import goods from './assets/words_transparent/GOODS.png'
import books from './assets/words_transparent/BOOKS.png'
import character from './assets/words_transparent/CHARACTER.png'
import dvd from './assets/words_transparent/BLU-RAY.png'

import Home from './pages/home'
import Staff from "./pages/staff"
import OnAir from "./pages/onAir"
import Dvd from "./pages/dvd"
import Episodes from './pages/episode'
import Gallery from './pages/gallery'
import News from './pages/news'
// import Movie from './pages/movie'
// import Music from './pages/music'
import Special from './pages/special'
// import Introduction from './pages/introduction'
import Goods from './pages/goods'
import Books from './pages/books'
import Character from './pages/character'


import "./app.css"

function App(){

  const menus = [
          {name :"Top", img : top , path:"/top"},
          {name :"Episodes", img : episodes , path:"/episodes"},
          {name :"Gallery", img : gallery , path:"/gallery"},
          {name :"News", img : news , path:"/news"},
          {name :"Staff", img : staff , path:"/staff"},
          // {name :"Movie", img : movie , path:"/movie"},
          {name :"OnAir", img : onAir , path:"/onAir"},
          // {name :"Music", img : music , path:"/music"},
          // {name :"Special", img : special , path:"/special"},
          // {name :"Introduction", img : introduction , path:"/introduction"},
          {name :"Goods", img : goods , path:"/goods"},
          {name :"Books", img : books , path:"/books"},
          {name :"Character", img : character , path:"/character"},
          {name :"Dvd", img : dvd , path:"/dvd"}
      ]

  return(
    <>
      <Header menus={menus} />
      <Routes >
        <Route path="/" element ={<Home menus={menus} />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/onAir" element={<OnAir />} />
        <Route path="/dvd" element={<Dvd />} /> 
        <Route path="/episodes" element={<Episodes />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/news" element={<News />} /> 
        {/* <Route path="/movie" element={<Movie />} />  */}
        {/* <Route path="/music" element={<Music />} />  */}
        <Route path="/special" element={<Special />} /> 
        {/* <Route path="/introduction" element={<Introduction />} />  */}
        <Route path="/goods" element={<Goods />} /> 
        <Route path="/books" element={<Books />} /> 
        <Route path="/character" element={<Character />} /> 
      </Routes>
      <Footer />
    </>
  )
}
export default App