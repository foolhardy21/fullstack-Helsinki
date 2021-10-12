import axios from 'axios'
const baseUrl = 'api/blogs'
const loginUrl = 'api/login'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getLoginToken = async (username, password) => {
    try {
      const response = await axios.post(loginUrl, {username, password})
      return response.data
    } catch(err) {
      return err.response.data
    }
}

export const postBlog = async (token, blog) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`
    }
  }
  const response = await axios.post(baseUrl, blog, config)
  return response.data
}

export const likeBlog = async (blogId, blogObj) => {
  const updateUrl = baseUrl+`/${blogId}`
  const response = await axios.put(updateUrl, blogObj)
  return response.data
}