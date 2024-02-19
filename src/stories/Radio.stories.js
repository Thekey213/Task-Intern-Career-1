import React from 'react';
import Radio from '../components/Radio/Radio';

export default {
  component: Radio,
  title: 'Radio',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    options: [
      { label: 'Option  1', value: 'option1' },
      { label: 'Option  2', value: 'option2' },
      { label: 'Option  3', value: 'option3' },
    ],
    selectedOption: 'option1',
    onChange: (value) => console.log('Selected option:', value),
  },
};

export const Pinned = {
  args: {
    options: [
      { label: 'Option  1', value: 'option1' },
      { label: 'Option  2', value: 'option2' },
      { label: 'Option  3', value: 'option3' },
    ],
    selectedOption: 'option2',
    onChange: (value) => console.log('Selected option:', value),
  },
};

export const Archived = {
  args: {
    options: [
      { label: 'Option  1', value: 'option1' },
      { label: 'Option  2', value: 'option2' },
      { label: 'Option  3', value: 'option3' },
    ],
    selectedOption: 'option3',
    onChange: (value) => console.log('Selected option:', value),
  },
};
