
import { useState, useEffect } from 'react';
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
    
    const headerStyles = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "cornflowerblue",
        alignItems: "center"
    }
    
    return (
        <div style={headerStyles}>
            <h1 style={{marginLeft: "1rem"}}>{name}</h1>
            <div>
                <Link to="/" style={{marginRight: "1rem"}}>Home</Link>
                { isAdmin && <Link to="/admin" style={{marginRight: "1rem"}}>Admin</Link> }
                { username == null 
                  ? ( <button style={{float: 'right', marginRight: "1rem"}} onClick={loginPopup}>Sign In</button> )
                  : ( <span style={{marginRight: "1rem"}}>{username}</span>) }
            </div>
        </div>
    )
}

export default HeaderBar