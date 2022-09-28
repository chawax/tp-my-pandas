import { Meta, Story } from '@storybook/react';
import type { PandasListProps } from '../components/PandasList';
import PandasList from '../components/PandasList';
import pandas from '../mocks/pandas.json';

export default {
  title: 'Components/PandasList',
  component: PandasList,
} as Meta;

const Template: Story<PandasListProps> = (args) => <PandasList {...args} />;

export const WithNoPandas = Template.bind({});
WithNoPandas.args = {
  pandas: [],
};

export const WithPandas = Template.bind({});
WithPandas.args = {
  pandas,
};
