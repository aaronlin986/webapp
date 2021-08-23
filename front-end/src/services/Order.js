const order = {
    submitOrder: async (items) => {
        try {
            const result = await fetch('/orders/submit', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    items
                })
            })
            return await result.json()
        }
        catch(error){
            return {
                error: error.message
            }
        }
    }
}

export default order;