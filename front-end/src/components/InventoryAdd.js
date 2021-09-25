import React, {useState} from 'react'
import '../componentStyles/InventoryAdd.css'
import adminService from '../services/Admin'

const InventoryAdd = ({createNotification}) => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [id, setId] = useState('')
    
    const handleAddInventory = () => {
        adminService.addToInventory(name, cost, id).then((result) => {
            if(result.error){
                createNotification(result.error.reason)
            }
            if(result.ok){
                createNotification('Successfully added item to inventory')
            }
        })
    }

    return (
        <div>
            <h2>Add to Inventory</h2>
            <form>
                <div className='info'>
                    Item Name: <input
                                    type="text"
                                    value={name}
                                    placeholder="Enter item name"
                                    onChange={({target}) => setName(target.value)}
                            />

                </div>
                <div className='info'>
                    Cost: <input
                                type="text"
                                value={cost}
                                placeholder="Enter item cost"
                                onChange={({target}) => setCost(target.value)}
                        />
                </div>
                <div className='info'>
                    Select an image: <input
                                        type="file"
                                    />
                </div>
            </form>
            <button onClick={handleAddInventory}>Add to inventory</button>
        </div>
    )
}

export default InventoryAdd;