import {useState} from 'react'
import '../componentStyles/LoginForm.css'
import adminService from '../services/Admin'

const CreateUserForm = ({toggleShow}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault();
        adminService.createUser(username, password);
        setUsername('');
        setPassword('');
        toggleShow();
    }

    return (
        <div className={'modal--show'}>
            <div className='modal--content'>
                <div className='close' onClick={toggleShow}>
                    &times;
                </div>
                <form onSubmit={createUser}>
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
                    <button type='submit'>Create User</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUserForm;