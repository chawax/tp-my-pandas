import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'reactstrap';

export default {
  title: 'Example/Reactstrap Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
};
