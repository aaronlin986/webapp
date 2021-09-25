const admin = {
    createUser: async function createUser(username, password) {
        try {
            const result = await fetch('/users/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            return await result.json();
        } catch (error) {
            return {
                error: error.message
            }
        }
    },

    verifyAdmin: async function verifyAdmin() {
        try {
            const result = await fetch('/admin/verify-admin', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                }
            });
            return await result.json();
        } catch (error) {
            return {
                error: error.message
            }
        }
    },

    addToInventory: async (name, cost, id) => {
        try{
            // const result = await post('/admin/inventory'), {

            // }
        } catch(error){
            return {
                error: error.message
            }
        }
    },

    deleteFromInventory: async () => {
        try{

        } catch(error){
            return {
                error: error.message
            }
        }

    },
}

export default admin;