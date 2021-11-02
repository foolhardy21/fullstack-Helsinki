import { getAll, postBlog, likeBlog, deleteBlog, addComment } from "../services/blogs"

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
                    _id: blog._id,
                    comments: blog.comments
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
export const likeTheBlog = (blogId, blog) => {
    return async dispatch => {
       const response = await likeBlog(blogId, blog)

        dispatch({
            type: 'LIKE',
            data: response._id
        })
    }
}
export const deleteTheBlog = (blogId, token) => {
    return async dispatch => {
        const response = await deleteBlog(blogId, token)
        
        dispatch({
            type: 'DELETE',
            data: response._id
        })
    }
}
export const appendComment = (comment, blogid) => {
    return async dispatch => {
        await addComment(comment, blogid)
        
        dispatch({
            type: 'COMMENT',
            data: {
                blogid: blogid,
                text: comment
            }
        })
    }
}

const blogsReducer = (state=blogs, action) => {
    switch(action.type) {
        case 'INIT_BLOGS': return action.data
        
        case 'NEW_BLOG': return [...state, action.data]
        
        case 'LIKE': const newblogs = state.map(blog => {
            if(blog._id === action.data) {
                blog.likes+=1
            }
            return blog
        }) 
        return newblogs
        
        case 'COMMENT': const updatedblogs = state.map(blog => {
            if(blog._id === action.data.blogid) {
                blog.comments = blog.comments.concat(action.data.text)
            }
            return blog
        }) 
        return updatedblogs 
        
        case 'DELETE': return state.filter(blog => blog._id !== action.data)
        
        default: return state
    }
}

export default blogsReducer