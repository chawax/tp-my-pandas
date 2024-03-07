import type { Meta, StoryObj } from '@storybook/react';
import PandasList from '../components/PandasList';
import pandas from '../mocks/pandas.json';

const meta = {
  title: 'Components/PandasList',
  component: PandasList,
  argTypes: { onPress: { action: 'pressed' } },
} satisfies Meta<typeof PandasList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithNoPandas: Story = {
  args: {
    pandas: [],
  },
};

export const WithPandas: Story = {
  args: {
    pandas,
  },
};
