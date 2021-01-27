import React , {useState} from 'react';
import  useForm  from '../Form Elements/LoginFormHook';
import './Login.css';


const Login = () => {
    const [isLoginMode, setIsLogged] = useState(true);
   
    const  switchLoginHandler = () =>{
        setIsLogged(!isLoginMode);
    }

    const {handleChange,values} = useForm();

    return (
        <div className="modalLogin">
            <div classsName="loginheader">EFTIVISOR</div>
            <form onSubmit={e=>e.preventDefault()}>
            {!isLoginMode && <input name="name" id="name" type="text" placeholder="name"/>}<br></br>
            <input name="email" id="email" type="text"  placeholder="E-mail" value={values.email} onChange={handleChange}/> <br></br>
            <input  name="password" id="password" type="password"  placeholder="Password" />
            <hr />
             <button type="submit">Login </button>
            </form>
            <button type="submit" onClick={switchLoginHandler}>Switch To {isLoginMode ? 'SIGN UP' : 'LOGIN'}</button>
        </div>
    )
}

export default Login;