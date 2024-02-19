import { Button } from '../components/Button/Button';


export default {
  title: 'Button',
  component: Button,
  parameters: {
    
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small',
  },
};
