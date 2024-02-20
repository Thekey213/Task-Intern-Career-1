import { render, screen, fireEvent } from '@testing-library/react';
import { expect } from 'vitest';
import Radio from './Radio'; 

describe('Radio Component', () => {
  it('renders the correct number of radio buttons', () => {
    const options = [
      { value: 'option1', label: 'Option  1' },
      { value: 'option2', label: 'Option  2' },
    ];
    render(<Radio options={options} selectedOption="" onChange={() => {}} />);

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(options.length);
  });

  
  
});
