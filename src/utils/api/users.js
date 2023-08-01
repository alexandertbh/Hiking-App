const SERVER_URL_PREFIX = '127.0.0.1'
export default usersAPI = {
    getUsers: async () => {
        try {
            const response = await fetch(`/api/users`)
        } catch (error) {
            console.log("Error: ", error)
            throw new Error (`Error catching users: ${error.messager}`)
        }
    }
}