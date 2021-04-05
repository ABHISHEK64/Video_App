import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import {Container }from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
//import LogIn from './Screen/Login';
import {BrowserRouter as Router,Route,Switch,Redirect, useHistory} from 'react-router-dom';
import Login from './Screen/Login';
import { useSelector } from 'react-redux';
import SearchScreen from './Screen/SearchScreen';
import WatchScreen from './Screen/WatchScreen';
import SubscriptionsScreen from './Screen/SubscriptionsScreen';
import ChannelScreen from './Screen/ChannelScreen';
const  LayOut=({children})=>{
  const [sidebar, toggleSidebar]= useState(false)
  const handleToggleSidebar=()=>toggleSidebar(value=>!value)

  return(
    <>
        <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="App_Container ">
      <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
      <Container fluid className="Main_Contenter ">
       {children}
      </Container>
    </div>
       
    </>
  )
}
const App=()=>{
  const{accessToken,loading}=useSelector(state=>state.auth)
  const history=useHistory()
  useEffect(()=>{
   if(!loading&&!accessToken){
    history.push('/Login')
   }
  },[accessToken,loading])
  return (
      <>
        <Switch>
          <Route exact path='/'>
         <LayOut>
           <HomeScreen/>
         </LayOut>
 
       </Route>
      
      
       <Route  path="/Login">
         <Login/>
       </Route>
       <Route path='/Search/:query'>
         <LayOut>
           <SearchScreen/>
         </LayOut>
       </Route>
       <Route path='/watch/:id'>
         <LayOut>
           <WatchScreen/>
         </LayOut>
       </Route>
       <Route path='/feed/subscriptions'>
         <LayOut>
           <SubscriptionsScreen/>
         </LayOut>
       </Route>
       <Route path='/channel/:channelId'>
            <LayOut>
               <ChannelScreen />
            </LayOut>
         </Route>

         <Route>
            <Redirect to='/' />
         </Route>
       </Switch>
       
       </>

  );
}

export default App;
