import React, {useState} from 'react';
import adminService from '../services/Admin';
import InventoryProduct from '../components/InventoryProduct'
import '../componentStyles/InventoryDelete.css'

const InventoryDelete = ({createNotification}) => {
    const [id, setId] = useState('')
    const [searchResult, setSearchResult] = useState({})

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

    const handleSearch = (val) => {
        setId(val)
        adminService.searchInventory(id).then((result) => {
            if(result.error){

            }
            if(result.ok){
                setSearchResult(result.item)
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
                                    onChange={({target}) => handleSearch(target.value)}
                                />
                </div>
            </form>
            {searchResult && <InventoryProduct product={searchResult}/>}
            <button onClick={handleDelete}>Search and Delete</button>
        </div>
    );
}

export default InventoryDelete;