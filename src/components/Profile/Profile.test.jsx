// Profile.test.jsx
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Profile from './Profile'; // Adjust the import path as necessary

describe('Profile Component', () => {
  it('renders the profile image with the correct source and alt text', () => {
    const source = 'https://example.com/profile.jpg';
    const alternate = 'Profile Image';

    render(<Profile source={source} alternate={alternate} />);

    const imgElement = screen.getByAltText(alternate);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', source);
    expect(imgElement).toHaveClass('profile');
  });
});
