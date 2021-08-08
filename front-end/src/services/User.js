const user = {
    login: async function login(username, password) {
        try {
            const result = await fetch('/users/login', {
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
    }
}

export default user;