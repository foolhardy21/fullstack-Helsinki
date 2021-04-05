import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (nameobject) => {
  const request = axios.post(baseUrl,nameobject)
  return request.then(response => response.data)
}

const remove = (objectid) => {
    const request = axios.delete(baseUrl+`/`+objectid.toString())
    return request.then(response => response)
}

export default {
  getAll: getAll,
  create: create,
  remove: remove
}
