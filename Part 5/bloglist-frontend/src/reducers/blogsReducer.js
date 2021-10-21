import { getAll, postBlog, likeBlog, deleteBlog } from "../services/blogs"

const blogs = []

export const initialiseBlogs = (username) => {
    return async dispatch => {
        
        let blogsResponse = await getAll()
        
        blogsResponse = blogsResponse
            .filter(blog => blog.user.username === username)
            .map(blog => {
                return {
                    title: blog.title,
                    author: blog.author,
                    url: blog.url,
                    likes: blog.likes,
                    _id: blog._id
                }
        })

        dispatch({
            type: 'INIT_BLOGS',
            data: blogsResponse
        })
    }
}
export const createNewBlog = (token, blog) => {
    
    return async dispatch => {
       const response = await postBlog(token, blog)
       const blogResponse = response.blog
        dispatch({
            type: 'NEW_BLOG',
            data: {
                title: blogResponse.title,
                author: blogResponse.author,
                url: blogResponse.url,
                likes: blogResponse.likes,
                _id: blogResponse._id
            }
        })
    }
}
export const likeTheBlog = () => {
    return async dispatch => {
        
    }
}
export const deleteTheBlog = () => {
    return async dispatch => {
        
    }
}

const blogsReducer = (state=blogs, action) => {
    switch(action.type) {
        case 'INIT_BLOGS': return action.data
        case 'NEW_BLOG': return [...state, action.data]
        case 'LIKE': break
        case 'DELETE': break
        default: return state
    }
}

export default blogsReducer