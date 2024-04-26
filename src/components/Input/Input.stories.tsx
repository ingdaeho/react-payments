import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Index';
import { WithTitle as Container } from './InputContainer/InputContainer.stories';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['basic', 'underline'],
      control: { type: 'radio' },
    },
    type: {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'basic',
    type: 'text',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    type: 'text',
  },
};

export const WithLabel: Story = {
  args: {
    variant: 'basic',
    type: 'text',
  },
  render: () => {
    return (
      <Input.Container {...Container.args}>
        <div style={{ display: 'flex', gap: 6, width: '30%' }}>
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
        </div>
      </Input.Container>
    );
  },
};
