import React from 'react';
import Profile from '../components/Profile/Profile';

export default {
  title: 'Profile',
  component: Profile,
  argTypes: {
    source: { control: 'text' },
    alternate: { control: 'text' },
  },
};

export const Dog = {
  args: {
    source: 'https://picsum.photos/id/237/300',
    alternate: 'Bob_Image'
  },
};
