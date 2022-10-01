import { Meta, Story } from '@storybook/react';
import type { PandaFormProps } from './PandaForm';
import PandaForm from './PandaForm';

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
