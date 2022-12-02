// Button.stories.tsx
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Rocket from './rocket';

export default {
  title: 'Codepens/Rocket',
  component: Rocket,
} as Meta;

export const Primary: Story = (args) => <Rocket {...args} />;
