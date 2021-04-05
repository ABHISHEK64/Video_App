import auth from './Firebase'
import firebase from 'firebase/app'
import { Login_Fail, Login_Success,Load_Profile, Login_Request, Log_Out } from './actionType'
//import { useDispatch} from 'react-redux'
//import { useHistory } from 'react-router'
//const dispatch=useDispatch()

export const login=()=> async dispatch=>{
    
    
    try{
        dispatch({
            type:Login_Request,
        })
        const Provider= new firebase.auth.GoogleAuthProvider()
        Provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const res=await auth.signInWithPopup(Provider)
        console.log(res)
        //const res = await auth.signInWithPopup(provider)
      const accessToken = res.credential.accessToken

      const profile = {
         name: res.additionalUserInfo.profile.name,
         photoURL: res.additionalUserInfo.profile.picture,
      }
      sessionStorage.setItem("Vid-access-token",accessToken)
      sessionStorage.setItem("Vid-user",JSON.stringify(profile))
      

      dispatch({
         type: Login_Success,
         payload: accessToken,
         
      })
      dispatch({
         type: Load_Profile,
         payload: profile,
      })
      
    }
    catch(error){
        console.log(error.message);
        dispatch({
            type: Login_Fail,
            payload: error.message,
         })
    }
}
export const log_out = () => async dispatch => {
    await auth.signOut()
    dispatch({
       type: Log_Out,
    })
 
    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')
 }
