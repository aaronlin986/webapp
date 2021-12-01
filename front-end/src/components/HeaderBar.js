import { useState, useEffect } from 'react';
import '../componentStyles/HeaderBar.css';
import adminAPI from '../services/Admin'
import {
    Link
} from 'react-router-dom';

const HeaderBar = ({name, loginPopup, username}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
      adminAPI.verifyAdmin().then((result) => {
        if (result.ok) {
          setIsAdmin(result.IsAdmin);
        }
      })
    });
    
    return (
        <div class="container">
            <h1 id="company">{name}</h1>
            <div class="login-container">
                {/* <Link to="/" style={{marginRight: "1rem"}}>Home</Link> */}
                { isAdmin && <Link to="/admin" style={{marginRight: "1rem"}}>Admin</Link> }
                { username == null 
                  ? ( <button id="login" onClick={loginPopup}>LOGIN</button> )
                  : ( <span style={{marginRight: "1rem"}}>{username}</span>) }
            </div>
        </div>
    )
}

export default HeaderBar