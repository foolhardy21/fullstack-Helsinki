import axios from 'axios'
const baseUrl = '/api/persons'

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

const update = (newobject) => {
  const request = axios.put(baseUrl+`/`+newobject.id,newobject)
  return request
  .then(response => response.data)

}
export default {
  getAll: getAll,
  create: create,
  remove: remove,
  update: update
}
