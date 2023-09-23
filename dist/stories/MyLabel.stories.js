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
};
export default meta;
export const Basic = {
    args: {
        label: "Basic Label",
    },
};
export const AllCaps = {
    args: {
        label: "All Caps Label",
        allCaps: true,
    },
};
export const Secundary = {
    args: {
        label: "Secundary Label",
        color: "text-secondary ",
    },
};
export const CustomColor = {
    args: {
        label: "Custom Color Label",
        fontColor: "#5517ac",
    },
};
export const BackgroundCustom = {
    args: {
        label: "Background custom Label",
        backgroundColor: "blue",
    },
};
