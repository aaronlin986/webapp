import {useState} from 'react'
import '../componentStyles/LoginForm.css'
import userService from '../services/User'

const LoginForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const submitLogin = (e) => {
        e.preventDefault()
        userService.login(username, password).then((result) => {
            if (result.error) {
                setErrorMessage(result.error);
            }
            if (result.ok) {
                localStorage.setItem('username', username);
                props.setUsername(username);
                setUsername('');
                setPassword('');
                toggleShow();
            }
        })
    }

    const toggleShow = () => {
        props.toggleShow();
    }

    return (
        <div className={'modal--show'}>
            <div className='modal--content'>
                <div className='close' onClick={toggleShow}>
                    &times;
                </div>
                { errorMessage !== '' && <div className='error-message'>{errorMessage}</div>}
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