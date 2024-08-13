import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width",
    variant: "secondary",
  },
};

export const AsLink: Story = {
  args: {
    variant: "primary",
    children: "Link",
  },
  render: (args) => {
    return (
        <div>
          <Button {...args} asChild >
              <a href="https://google.com" target="_blank" style={{display: 'inline'}}>
                Go to google
              </a>
          </Button>

        </div>
    );
  },
};
