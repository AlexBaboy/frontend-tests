import {getByTestId, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../test/heplers/renderTestApp";

describe('counter test', () => {
    test('test click btns', () => {
        const {getByTestId} = render(renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {
                    value: 10
                }
            }
        }))

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementBtn = getByTestId('increment-btn')
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})
