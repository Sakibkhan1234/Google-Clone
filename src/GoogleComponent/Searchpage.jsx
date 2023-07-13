import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { useEffect } from 'react';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
const Searchpage = () => {
  useEffect(()=>{
    document.title='Google | All'
  },[])
  const[{term}]=useStateValue();
  const { data } = useGoogleSearch(term)
  console.log(data)
  return (
    <div>
    <div className={style.searchpage}>
      <div className={style.searchpage_header} >
      <Link to="/">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" height={30} width={92}/>
      </Link>
      </div>
      <div className={style.searchpage_headerAll}>
        <div className={style.search}>
         <Search hidebuttons className={style.H}/>
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

 {     
   term && (
        <div className={style.searchpage_results}>
        <p className={style.searchpage_resultCount}>
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
          </p>
{
  data?.items.map((item)=>(
      <div className={style.searchpage_result}>
    <a href={item.link} className={style.searchpage_resultlink}>
       
       {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src&&(
            <img src={item.pagemap?.cse_image[0]?.src} width={18} height={18}/>
            
       )}
     
      <a href="" className={style.searchpage_resultlink1}>{item.displayLink}</a>
   
    </a>
    <a href={item.link} className={style.searchpage_resulttitle}>
     <h4> {item.title}</h4>
    </a>
    <p className={style.searchpage_resultDescripton}>
    {item.snippet}
    </p>
  </div>

  ))}
          
</div>)}
    </div>
  )
}

export default Searchpage
