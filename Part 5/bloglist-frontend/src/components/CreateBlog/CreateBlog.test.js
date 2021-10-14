import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react"
import CreateBlog from "./CreateBlog"

describe('create blog form', () => {
    test('event nadler works on form submission', () => {
        const user = {
            token:'token',
            username: 'username'
        }
        const message = 'message'
        const handleBlogSubmit = jest.fn()
        const logOut = jest.fn()

        const component = render(
            <CreateBlog
                user={user}
                message={message}
                handleBlogSubmit={handleBlogSubmit}
                logOut={logOut}
            />
        )
        const formDiv = component.container.querySelector('form')
        fireEvent.submit(formDiv)
        expect(handleBlogSubmit.mock.calls).toHaveLength(1)
    })
})
