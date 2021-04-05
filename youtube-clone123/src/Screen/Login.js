import React,{useEffect} from 'react';

import './_Login.scss';

import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../authaction';

const Login = () => {
    //const history=useHistory()
    const dispatch=useDispatch()
    const accessToken = useSelector(state => state.auth.accessToken)
    console.log('aceesToken',accessToken)
    const history = useHistory();

    const HandleLogin = (e) => {
        e.preventDefault();
       dispatch(login())
       

    }
 
   // const history = useHistory();
 
    useEffect(() => {
       if (accessToken) {
          history.push('/')
       }
    }, [accessToken, history])
 
    return (
        <div className="LogIN">
            <div className="LogIN__Container">
              <img src='https://play-lh.googleusercontent.com/N8MvAa0RiD2b21paDIdwHeqBLInrsNz2whB8U9o0KsereMYK2eT9DQShSVUSl6DrtHch' alt='' className='LogIn__Image'/>
              <button onClick={HandleLogin}> Sign With Google</button>

              <p>By creating sign in you agree terms and conditions and policy</p>
            </div>
            
        </div>
    )
}

export default Login
