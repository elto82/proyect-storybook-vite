import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    tags: string[];
    component: ({ backgroundColor, allCaps, color, fontColor, label, size }: import("../components/MyLabel").Props) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    argTypes: {
        size: {
            control: string;
        };
        color: {
            control: string;
        };
        allCaps: {
            control: string;
        };
        fontColor: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secundary: Story;
export declare const CustomColor: Story;
export declare const BackgroundCustom: Story;
