import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import type { PandasListProps } from '.';
import PandasList from '.';
import pandas from '../../mocks/pandas.json';

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
