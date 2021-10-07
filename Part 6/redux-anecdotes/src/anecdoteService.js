import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const newAnecdote = async (text) => {
    const anecdoteObj = {
        text: text,
        id: getAll().length+1
    }
    const response = await axios.post(baseUrl, anecdoteObj)
    return response.data
}
export {
    getAll,
    newAnecdote,
}