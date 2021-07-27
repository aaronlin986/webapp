import React, { useState } from 'react';
import admin from '../services/Admin';

const Admin = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showCreateUser, setShowCreateUser] = useState(false);

    const createUser = () => {
        admin.createUser().then((result) => {
            if (result.error) {
               setErrorMessage(result.error);
            }
            if (result.ok) {
                setSuccessMessage('Account has been created');
            }
        })
    }

    const _handleCreate = () => {
        setShowCreateUser(true);
    }

    return (
        <div>
            { successMessage !== '' && (<div>{successMessage}</div>) }
            { errorMessage !== '' && (<div>{errorMessage}</div>) }
            { showCreateUser && <div className="createForm">Test</div>}
            <div>
                <h1>Create User</h1>
                <button onClick={_handleCreate}>Create</button>
            </div>
            <div>
                <h1>View All Users</h1>
                <button>View</button>
            </div>
            <div>
                <h1>Add Items</h1>
                <button>Add</button>
            </div>
            <div>
                <h1>View All Items</h1>
                <button>View</button>
            </div>
            <div>
                <h1>View All Orders</h1>
                <button>View</button>
            </div>
        </div>
    )
}

export default Admin;