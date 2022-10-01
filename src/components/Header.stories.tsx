import { Meta, Story } from '@storybook/react/types-6-0';
import { DisplayModeProvider } from '../context/DisplayModeProvider';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => (
  <DisplayModeProvider>
    <Header {...args} />
  </DisplayModeProvider>
);

export const Default = Template.bind({});
Default.args = {};
