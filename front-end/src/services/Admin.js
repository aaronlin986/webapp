const admin = {
    createUser: async function createUser() {
        try {
            const result = await fetch('/users/create', {
                method: 'POST',
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

    verifyAdmin: async function verifyAdmin() {
        try {
            const result = await fetch('/users/verify-admin', {
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
    }
}

export default admin;