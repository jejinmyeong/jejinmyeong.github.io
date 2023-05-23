import { Meta, StoryObj } from "@storybook/react";
import { Period } from "components/common";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Period> = {
  title: "Common/Atoms/Period",
  tags: ["autodocs"],
  component: Period
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof Period>;

export const Default: Story = {
  args: {
    startdate: "1900.01.01",
    enddate: "1901.01.01"
  },
};