import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
