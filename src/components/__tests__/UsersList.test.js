import { render, screen, cleanup } from '@testing-library/react';
import UsersList from "../UsersList"

test('should render UsersList', () =>{

    render(<UsersList/>);
    const todoElement = screen.getByTestId('UsersList-1');
    expect(todoElement).toBeInTheDocument();
})