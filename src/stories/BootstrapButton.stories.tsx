import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from 'reactstrap';

export default {
  title: 'Example/BootstrapButton',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  children: 'Danger',
};
