import {useState} from 'react'
import '../componentStyles/LoginForm.css'
import loginService from '../services/Login'

const LoginForm = ({toggleShow}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = (e) => {
        e.preventDefault()
        loginService.login({username, password})
        setUsername('')
        setPassword('')
    }

    return (
        <div className={'modal--show'}>
            <div className='modal--content'>
                <div className='close' onClick={toggleShow}>
                    &times;
                </div>
                <form onSubmit={submitLogin}>
                    <div> 
                        Username: <input 
                                    type='text'
                                    value={username} 
                                    onChange={({target}) => setUsername(target.value)}
                                    placeholder='Enter a username'
                                />
                    </div>
                    <div>
                        Password: <input 
                                    type='password'
                                    value={password} 
                                    onChange={({target}) => setPassword(target.value)}
                                    placeholder='Enter a password'
                                />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm