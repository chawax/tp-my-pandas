import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TextInput from '.';
import type { TextInputProps } from '.';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const WithPlaceHolder = Template.bind({});
WithPlaceHolder.args = {
  label: 'Nom',
  name: 'name',
  placeholder: 'Saisissez votre nom',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Nom',
  name: 'name',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Nom',
  name: 'name',
  placeholder: 'Saisissez votre nom',
  required: true,
  error: 'Le nom est obligatoire',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  label: 'Nom',
  name: 'name',
  placeholder: 'Saisissez votre nom',
  required: true,
  value: 'Dupont',
};
