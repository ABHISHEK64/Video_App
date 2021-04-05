import React, { useState } from 'react'
import './_header.scss'

import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const mystyle = {
    color: "white",
    fontSize:"28px" 
  };
  
const Header=({handleToggleSidebar})=> {
    const[input,setInput]=useState('')
    const history=useHistory()
    const handleSubmit=e=>{
        e.preventDefault()
        history.push(`/search/${input}`)
    }
    const user=useSelector(state=>state.auth?.user)
    return (
        <div className=" Header">
            <div className="Header_Menue"><HorizontalSplitIcon style={mystyle} onClick={()=>handleToggleSidebar()}/></div>
           <Link to='/'> <img src="https://play-lh.googleusercontent.com/N8MvAa0RiD2b21paDIdwHeqBLInrsNz2whB8U9o0KsereMYK2eT9DQShSVUSl6DrtHch" className="HeaderLogo"/>
              </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" className="Header_Input" value={input} onChange={e=> setInput(e.target.value)}/>
                <button type="submit" className="buttonName">
                 <SearchIcon size={22}/> 
                </button>
                </form> 

                <div className="Header_Icons">
                    <NotificationsNoneIcon size={28} style={mystyle}/>
                    <AppsIcon size={28} style={mystyle}/>
                    <Avatar src={user?.photoURL}/>
                    </div>  
        </div>
    )
}

export default Header
