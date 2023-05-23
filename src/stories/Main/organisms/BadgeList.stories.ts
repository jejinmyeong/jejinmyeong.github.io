import { Meta, StoryObj } from "@storybook/react";
import { BadgeList } from "components/Main";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BadgeList> = {
  title: "Main/Organisms/BadgeList",
  component: BadgeList
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof BadgeList>;

export const Default: Story = {
  args: {
    "explain": {
      "skilllist": [
        {
          "level": 4,
          "name": "JavaScript"
        },
        {
          "level": 3,
          "name": "TypeScript"
        },
        {
          "level": 3,
          "name": "Java"
        },
        {
          "level": 1,
          "name": "Solidity"
        }
      ]
    }
  }
};