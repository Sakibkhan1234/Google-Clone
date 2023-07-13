import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
import {useOnkeybutton} from "./useOnkeybutton"

const Search = ({hidebuttons}) => {
  const[list,setList]=useState('')
  const[input,setInput]= useState("")
  const [{},dispatch]=useStateValue();
  var Polo="";
  const submitHandler=()=>{
    setList([...list,input])
    setInput('')
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    // if(input!=Polo)
    // {
    navigator("/all")
    // }
    console.log(input)
  }
     var inputContent=(e)=>{
        setInput(e.target.value)
     }
     var navigator=useNavigate()

    var search=(e)=>{
      e.preventDefault();
      dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        term:input
      })
      if(input!=Polo)
      {
      navigator("/all")
      }

    }
    useOnkeybutton(submitHandler,'Enter')
    useOnkeybutton(()=> setInput(''),'Delete')
  return (
      <div className={style.img}>
      <div className={style.search_C}>
        <SearchIcon className={style.S} />
        <input type="text" className={style.I} value={input} onChange={inputContent}/>
        <MicIcon className={style.M}/>
      </div>
      {
        !hidebuttons ?( <div className={style.search_buttones}>
       <Button type='submit' onClick={search} variant='outlined' className={style.B}>Google Search</Button>
       <Button type='submit' variant='outlined' className={style.B}>I'm Feeling Lucky</Button>
      </div>) : (<div className={style.search_buttones} style={{display:"none"}}>
       <Button type='submit' onClick={search} variant='outlined' className={style.B}>Google Search</Button>
      </div>)
      }
    </div>
  )
}

export default Search
