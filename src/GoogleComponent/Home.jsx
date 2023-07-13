import React, { useEffect } from 'react'
import style from './home.module.css'
import AppsIcon from '@mui/icons-material/Apps';
import Search from './Search';
import { Avatar } from '@mui/material';
const Home = () => {
  useEffect(()=>{
    document.title="Google | Home"
  },[])
  return (
    <div className={style.home1}>
    <div className={style.home}>
        <div className={style.home_header}>
            <div className={style.home_headerLeft}>
              <p>About</p>
              <p>Store</p>
            </div>
            <div className={style.home_headerRight}>
             <p>Gmail</p>
             <p>Images</p>
             <p className={style.h}><AppsIcon/></p>
             <p className={style.A}><Avatar/></p>
            </div>
        </div>
       <div className={style.home_body}>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height={92} width={272}/>
         <div className={style.search_container}>
            <Search/>
        </div>
        </div> 
    </div>
    </div>
  )
}

export default Home
