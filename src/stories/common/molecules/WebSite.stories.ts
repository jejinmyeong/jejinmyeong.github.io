import { Meta, StoryObj } from "@storybook/react";
import { WebSite } from "components/common";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof WebSite> = {
  title: "Common/Molecules/WebSite",
  tags: ["autodocs"],
  component: WebSite
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof WebSite>;

export const Google: Story = {
  args: {
    url: "google.com",
  },
};