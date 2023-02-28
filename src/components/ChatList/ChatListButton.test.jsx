import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ChatListButton } from './ChatListButton'

describe('testing ChatListButton', () => {
    it('render component ChatListButton', () => {
        render(<ChatListButton>Create chat</ChatListButton>)
    })

    it('render ChatListButton with snapshot', () => {
        const { asFragment } = render(<ChatListButton>Change name</ChatListButton>)
        expect(asFragment()).toMatchSnapshot()
    })
})
