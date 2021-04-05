
import {
    Load_Profile,
    Login_Fail,
    Login_Request,
    Login_Success,
    Log_Out,
 } from './actionType'
 
 const initialState = {
    accessToken: sessionStorage.getItem("vid-access-token")?sessionStorage.getItem("vid-access-token"): null,
    user: sessionStorage.getItem("vid-user")?JSON.parse(sessionStorage.getItem("vid-access-token")):null,
    loading: false,
 }
 
 export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action
 
    switch (type) {
       case Login_Request:
          return {
             ...prevState,
             loading: true,
          }
 
       case Login_Success:
          return {
            ...prevState,

             accessToken: payload,
             loading: false,
          }
          case Load_Profile:
            return {
               ...prevState,
               
  
               user: payload,
               loading:false
            }
          case Login_Fail:
          return {
             ...prevState,
             accessToken: null,
             loading: false,
             error: payload,
          }
      
 
       case Log_Out:
          return {
             ...prevState,
             accessToken: null,
             user: null,
          }
  
      default:
          return prevState
    }
}
const Reducer=()=>{
    return(
        <>
        </>
    )
}
export default Reducer