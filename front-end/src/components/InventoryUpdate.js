import React, {useState} from 'react';
import Notification from './Notification';
import InventoryAdd from './InventoryAdd';
import InventoryDelete from './InventoryDelete';
import InventoryModify from './InventoryModify';

const InventoryUpdate = () => {
    const [message, setMessage] = useState('Vestibulum eu ante lacus. Duis vitae velit semper, tincidunt neque ')
    const [mode, setMode] = useState('Add')

    const createNotification = (message) => {
        setMessage(message)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    const modeReturn = () => {
        if(mode === 'Add'){
            return <InventoryAdd createNotification={createNotification}/>
        }
        else if(mode === 'Delete'){
            return <InventoryDelete createNotification={createNotification}/>
        }
        else{
            return <InventoryModify createNotification={createNotification}/>
        }
    }

    return (
        <div>
            <Notification message={message}/>
            <select onChange={(e) => setMode(e.target.value)}>
                <option value='Add'>Add an item</option>
                <option value='Delete'>Delete an item</option>
                <option value='Update'>Update an item</option>
            </select>
            {modeReturn()}
        </div>
    )
}

export default InventoryUpdate;