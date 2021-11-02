import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
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

export const deleteBlog = async (blogId, token) => {
  const deleteUrl = baseUrl+`/${blogId}`
  const config = {
    headers: {
      Authorization: `bearer ${token}`
    }
  }
  const response = await axios.delete(deleteUrl, config, blogId)
  return response.data
}

export const addComment = async (comment, blogid) => {
  const commentUrl = `${baseUrl}/${blogid}/comments`

  const response = await axios.put(commentUrl, {comment})
  return response.data
}