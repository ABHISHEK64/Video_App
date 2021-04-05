import React from 'react';
import './_SideBar.scss';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {useDispatch} from 'react-redux';
import {log_out} from '../authaction';
import { Link } from 'react-router-dom';
const SideBar=({sidebar,handleToggleSidebar})=>{
    const dispatch = useDispatch()
    const HandleLogOut = () => {
       dispatch(log_out())
   }
    return (
        <nav className={ sidebar?" Sidebar open":"Sidebar" }
        onClick={()=>handleToggleSidebar(false)}
        >
            <Link to='/'>
            <li>
             <HomeIcon fontSize='25px' />
             <span>Home</span>
            </li>
            </Link>
            
            <li>
             <ThumbUpIcon/>
             <span>Like Video</span>
            </li>
            <Link to='/feed/subscriptions'>
            <li>
             <SubscriptionsIcon/>
             <span>Subscription</span>
            </li>
            </Link>
            <li>
             <HistoryIcon/>
             <span>History</span>
            </li>
            <li>
            <VideoLibraryIcon/>
            <span>Library</span>
            </li>
             
            <li onClick={HandleLogOut}> 
             < ExitToAppIcon />
             <span>LogOut</span>
            </li>

        </nav>
    )
}

export default SideBar;
