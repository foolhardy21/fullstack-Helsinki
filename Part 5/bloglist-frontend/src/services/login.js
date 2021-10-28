import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

export const getLoginToken = async (username, password) => {
    try {
      const response = await axios.post(baseUrl, {username, password})
      return response.data
    } catch(err) {
      return err.response.data
    }
}
