import React, {useState} from 'react';
import adminService from '../services/Admin';
import '../componentStyles/InventoryDelete.css'

const InventoryDelete = ({createNotification}) => {
    const [id, setId] = useState('')

    const handleDelete = () => {
        adminService.deleteFromInventory().then((result) => {
            if(result.error){
                createNotification(result.error.reason)
            }
            if(result.ok){
                createNotification('Successfully deleted item from inventory')
            }
        })
    }

    return (
        <div>
            <h2>Delete from Inventory</h2>
            <form>
                <div className='info'>
                    Product ID : <input 
                                    type="number"
                                    value={id}
                                    placeholder='Enter Product ID number'
                                    onChange={({target}) => setId(target.value)}
                                />
                </div>
            </form>
            <button onClick={handleDelete}>Search and Delete</button>
        </div>
    );
}

export default InventoryDelete;