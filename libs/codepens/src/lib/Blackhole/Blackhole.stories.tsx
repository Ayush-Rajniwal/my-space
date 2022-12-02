import { Meta, Story } from '@storybook/react';
import Blackhole from './Blackhole';

export default {
  title: 'Codepens/Blackhole',
  component: Blackhole,
} as Meta;

export const Primary: Story = (args) => <Blackhole {...args} />;
