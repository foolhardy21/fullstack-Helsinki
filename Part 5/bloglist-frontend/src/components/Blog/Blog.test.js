import React from "react"
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from "./Blog"

describe('Blog component rendering', () => {

    test('blog by default should render title and author only', () => {
        const blog = {
            title: 'test title',
            author: 'test author',
            url: 'test url',
            likes: 100
        }
        const getAllBlogs = jest.fn()
        const token = 'testtoken'
    
        const component = render(
            <Blog blog={blog} token={token} getAllBlogs={getAllBlogs} />
        )
        
        expect(component.container).toHaveTextContent(`${blog.title}`)
        expect(component.container).toHaveTextContent(`${blog.author}`)
        expect(component.container.querySelector('#infodiv')).not.toBeVisible()
    
    })

    test('render url and likes on clicking more', () => {
        const getAllBlogs = jest.fn()
        const blog = {
            title: 'test title',
            author: 'test author',
            url: 'test url',
            likes: 100
        }
        const token='testtoken'

        const component = render(
            <Blog blog={blog} getAllBlogs={getAllBlogs} token={token} />
        )
        const button = component.getByText('more')
        fireEvent.click(button)

        expect(component.container.querySelector('#infodiv')).toBeVisible()
    })

    test('props event handler is called when like button is clicked', () => {
        const getAllBlogs = jest.fn()
        const blog = {
            title: 'test title',
            author: 'test author',
            url: 'test url',
            likes: 100,
            user: {
                username: 'test username' 
            } 
        }
        const token='testtoken'

        const component = render(
            <Blog blog={blog} getAllBlogs={getAllBlogs} token={token} />
        )
        const moreBtn = component.getByText('more')
        fireEvent.click(moreBtn)
        const likeBtn = component.getByText('like')
        fireEvent.click(likeBtn)
        fireEvent.click(likeBtn)

        expect(getAllBlogs.mock.calls).toHaveLength(2) 
    })

})