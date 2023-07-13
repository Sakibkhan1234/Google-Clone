import style from "./home.module.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import React, { useEffect, useState } from 'react'
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from './Reducer';
import {useOnkeybutton} from "./useOnkeybutton"
const Pola = () => {
  useEffect(()=>{
    document.title='Google | News'
  },[])
  return (
    <div className={style.searchpage}>
      <div className={style.searchpage_header} >
      <Link to="/">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" height={30} width={92}/>
      </Link>
      </div>
      <div className={style.searchpage_headerAll}>
        <div className={style.search}>
         

        <div className={style.img}>
      <div className={style.search_C}>
        <SearchIcon className={style.S} />
        <input type="text" className={style.I}/>
        <MicIcon className={style.M}/>
      </div>
    </div>

          
         {/* <Search hidebuttons className={style.H}/> */}
             
        
        </div>
         <div className={style.searchpage_option}>
         <div className={style.searchpage_options}>
         <div className={style.searchpage_options1}>
         <SearchIcon className={style.Icon}/>
         <Link to='/all'>All</Link>
         </div>
         <div className={style.searchpage_options1}>
         <DescriptionIcon className={style.Icon}/>
         <Link to='/news'>News</Link>
         </div>
         <div className={style.searchpage_options1}>
         <ImageSearchIcon className={style.Icon}/>
         <Link to='/images'>Images</Link>
         </div>
         <div className={style.searchpage_options1}>
         <VideoSettingsIcon className={style.Icon}/>
         <Link to='/videos'>Videos</Link>
         </div>
         <div className={style.searchpage_options1}>
         <FmdGoodIcon className={style.Icon}/>
         <Link to='/maps'>Maps</Link>
         </div>
         <div className={style.searchpage_options1}>
         <MoreVertIcon className={style.Icon}/>
         <Link to='/more'>More</Link>
         </div>
         </div>
      </div>
         <div className={style.searchpage_optionright}>
         <div className={style.searchpage_options}>
         <Link to='settings'>Settings</Link>
         </div>
         <div className={style.searchpage_options}>
         <Link to='tools'>Tools</Link>
         </div>
         </div>
         </div>
        </div>
  )
}

export default Pola
