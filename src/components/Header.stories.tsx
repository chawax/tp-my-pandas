import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
