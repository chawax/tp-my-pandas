import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import type { PandaFormProps } from '.';
import PandaForm from '.';

export default {
  title: 'Components/PandaForm',
  component: PandaForm,
} as Meta;

const Template: Story<PandaFormProps> = (args) => <PandaForm {...args} />;

export const WithoutInitialValues = Template.bind({});
WithoutInitialValues.args = {};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  initialValues: {
    name: 'Yuan Meng',
    image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
    interests: ['yoga', 'bambou'].join(','),
  },
};
