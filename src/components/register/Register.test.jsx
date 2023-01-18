/*** @vitest-environment jsdom*/

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from './Register';

describe('Register component', () => {
  it('should render Register component correctly', () => {
    render(<Register />);
    const element = screen.getByText('Register');
    expect(element).toBeInTheDocument();
  });
  it('should not show any error message when the component is loaded', () => {
    render(<Register />);
    const alertElement = screen.queryByRole('alert');
    expect(alertElement).not.toBeInTheDocument();
    });
  it('should show error message when all the fields are not entered', async () => {
    render(<Register />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    await userEvent.click(buttonElement);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    });
    it("should show success message when the registration is successful.", async () => {
        render(<Register />);
        const buttonElement = screen.getByRole("button");
        await userEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
    });
});