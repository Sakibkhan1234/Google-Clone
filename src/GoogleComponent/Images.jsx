import style from "./home.module.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import React, { useEffect, useState } from 'react'
import MicIcon from '@mui/icons-material/Mic';
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from "axios";

const Images = () => {

  const[data,setData]=useState([]);
  const[query,setQuery]=useState("lamborgini");
  const[page,setPage]=useState(1);
  const[hasMore,setHasMore]=useState(true);

    const client_id="GvGXjBb-YU3Yow51WcuMnwxvSd9oSvRGKDb73gV7wWA";
    const fetchUrl=`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;

    const fetchImages=()=>{
        axios
        .get(fetchUrl,{
            headers:{},})
            .then((response)=>{
                setData([...data,...response.data.results]);
            })
            .catch((error)=>{
                console.log(error);
            });
            setPage(page + 1);
    };

    useEffect(()=>{
        fetchImages();
    },[query]);

 const searchImages=(e)=>{
  if(e.keyCode===13){
    setQuery(e.target.value);
    setData([]);
  }
 }
  return (
    <>
    <div className={style.black}>
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
        <input type="text" className={style.I} placeholder='Search for images' onKeyDown={(e)=>searchImages(e)}/>
        <MicIcon className={style.M}/>
      </div>
      {/* <div className={style.search_buttones}>
       <Button className={style.B}>Google Search</Button>
       <Button className={style.B}>I'm Feeling Lucky</Button>
      </div> */}
    </div>

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


        <InfiniteScroll
  dataLength={data.length} //This is important field to render the next data
  next={fetchImages}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  >
  <div className={style.cardlist}>
    {data.map((data,key)=>(
      <div className={style.container} key={key}>
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img src={data.urls.small}className={style.cardimage}alt={data.alt_description} />
        </a>
        <h4 className={style.w}>Photo by {data.user.name}</h4>
      </div>
    ))}
  </div>
</InfiniteScroll>
    </div>
    </>
  )
}

export default Images
