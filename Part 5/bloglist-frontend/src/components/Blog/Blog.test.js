import React from "react"
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from "./Blog"

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
