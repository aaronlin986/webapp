import React, {useState} from 'react';
import adminService from '../services/Admin';
import InventoryProduct from './InventoryProduct';

const InventoryModify = ({createNotification}) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [searchResult, setSearchResult] = useState()

    const handleUpdate = () => {
        adminService.updateFromInventory(id, name, cost).then((result) => {
            if(result.error){
                createNotification(result.error.reason)
            }
            if(result.ok){
                createNotification('Successfully updated item from inventory')
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
            <h2>Update item from Inventory</h2>
            <form>
                <div>
                    Product ID : <input 
                                    type="number"
                                    value={id}
                                    placeholder="Enter Product ID number"
                                    onChange={({target}) => handleSearch(target.value)}
                                />
                </div>
                <div>
                    Product Name : <input
                                        type="text"
                                        value={name}
                                        placeholder="Enter name of product"
                                        onChange={({target}) => setName(target.value)}
                                    />
                </div>
                <div>
                    Cost : <input
                                type="number"
                                value={cost}
                                placeholder="Enter cost of product"
                                onChange={({target}) => setCost(target.value)}
                            />
                </div>
            </form>
            {searchResult && <InventoryProduct product={searchResult}/>}
            <button onClick={handleUpdate}>Update item from inventory</button>
        </div>
    );
}

export default InventoryModify;