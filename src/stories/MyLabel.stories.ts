import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  tags: ["autodocs"],
  component: MyLabel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    allCaps: { control: "boolean" },
    fontColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};
export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
  },
};
export const Secundary: Story = {
  args: {
    label: "Secundary Label",
    color: "text-secondary ",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
  },
};
export const BackgroundCustom: Story = {
  args: {
    label: "Background custom Label",
    background: "blue",
  },
};
