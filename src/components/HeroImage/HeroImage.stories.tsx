import { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Welcome to Our UI Garden',
    subtitle: 'Explore our design system components built with React and Styled Components.',
    height: '400px',
  },
};