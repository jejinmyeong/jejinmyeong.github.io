import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "components/common";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tag> = {
  title: "Common/Atoms/Tag",
  tags: ["autodocs"],
  component: Tag
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof Tag>;

export const TypeScript: Story = {
  args: {
    children: "TypeScript",
  },
};

export const JavaScript: Story = {
  args: {
    children: "JavaScript",
  },
};

export const React: Story = {
  args: {
    children: "React",
  },
};
export const Next: Story = {
  args: {
    children: "Next",
  },
};
export const Recoil: Story = {
  args: {
    children: "Recoil",
  },
};
export const Emotion: Story = {
  args: {
    children: "Emotion",
  },
};
export const Java: Story = {
  args: {
    children: "Java",
  },
};
export const Spring: Story = {
  args: {
    children: "Spring",
  },
};
export const Electron: Story = {
  args: {
    children: "Electron",
  },
};
export const WebRTC: Story = {
  args: {
    children: "WebRTC",
  },
};

export const Solidity: Story = {
  args: {
    children: "Solidity",
  },
};
export const Storybook: Story = {
  args: {
    children: "Storybook",
  },
};

export const Remix: Story = {
  args: {
    children: "Remix",
  },
};
export const Redux: Story = {
  args: {
    children: "Redux",
  },
};
export const styledComponents: Story = {
  args: {
    children: "styled-components",
  },
};
export const TailwindCSS: Story = {
  args: {
    children: "Tailwind CSS",
  },
};

export const Other: Story = {
  args: {
    children: "Other",
  },
};
