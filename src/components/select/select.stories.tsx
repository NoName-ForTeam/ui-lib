import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { SelectSeparator } from "@radix-ui/react-select";

const meta = {
  component: Select,
  title: "Components/Select",
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;
const options = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
  {
    label: "Option 3",
    value: "3",
  },
];
export const Primary: Story = {
  args: {
    placeholder: "Select a theme",
    children: (
      <>
        {options.map(({ label, value }) => {
          return <SelectItem value={value}>{label}</SelectItem>;
        })}
        <SelectGroup>
          <SelectLabel>Group 1</SelectLabel>
          <SelectItem value={"1"}>1</SelectItem>
          <SelectSeparator />
          <SelectItem value={"2"}>2</SelectItem>
          <SelectItem value={"3"}>3</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Group 2</SelectLabel>
          <SelectItem value={"4"}>4</SelectItem>
          <SelectItem value={"5"}>5</SelectItem>
          <SelectItem value={"6"}>6</SelectItem>
        </SelectGroup>
      </>
    ),
  },
};
