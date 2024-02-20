
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Button } from './Button'; 

describe('Button Component', () => {
  it('renders with the correct classes and label', () => {
    const label = 'Click Me';
    render(<Button label={label} />);

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('storybook-button');
    expect(buttonElement).toHaveClass('storybook-button--medium');
    expect(buttonElement).toHaveClass('storybook-button--secondary');
  });



  it('renders as primary when primary prop is true', () => {
    const label = 'Click Me';
    render(<Button label={label} primary />);

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toHaveClass('storybook-button--primary');
  });

  it('renders with the correct size', () => {
    const label = 'Click Me';
    const size = 'large';
    render(<Button label={label} size={size} />);

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toHaveClass(`storybook-button--${size}`);
  });
});
