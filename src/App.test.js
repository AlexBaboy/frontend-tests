import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('TEST APP', function () {
  test('renders html', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot()
  });

  test('renders data', async () => {
    render(<App />);
    screen.debug()
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument()
    expect(helloWorldElement).toHaveStyle({color: 'red'})
    screen.debug()
  });

  test('click event', async () => {
    render(<App/>);
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test('input event', async () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/input value/)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // искусственные события !!!
    /*fireEvent.input(input, {
      target: {
        value: '123'
      }
    })*/

    // нативные события (близко к пользователю) !!!
    userEvent.type(input, '123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123')
  })

});

