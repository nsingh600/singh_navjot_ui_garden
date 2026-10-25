import { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
    alt: 'Abstract Background',
    width: '300px',
    height: '200px',
    borderRadius: '8px',
  },
};