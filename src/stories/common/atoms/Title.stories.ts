import { Meta, StoryObj } from "@storybook/react";
import { Title } from "components/common";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Title> = {
  title: "Common/Atoms/Title",
  tags: ["autodocs"],
  component: Title
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof Title>;

export const Large: Story = {
  args: {
    size: 'large',
    children: "Large"
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: "Medium"
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: "Small"
  },
};