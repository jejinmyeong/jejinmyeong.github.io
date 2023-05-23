import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "components/Main";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Badge> = {
  title: "Main/Molecules/Badge",
  tags: ["autodocs"],
  component: Badge
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof Badge>;

export const TypeScript: Story = {
  args: {
    name: "TypeScript",
    level: 3
  },
};

export const JavaScript: Story = {
  args: {
    name: "JavaScript",
    level: 4
  },
};
