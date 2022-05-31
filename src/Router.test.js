import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {MemoryRouter} from 'react-router-dom'

describe('TEST APP', () => {

    test('Router test', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('wrong page', () => {
        render(
            <MemoryRouter initialEntries={['/adsasd']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByTestId('error-page')).toBeInTheDocument()
    })
})
