declare const _default: {
    title: string;
    component: ({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").Props) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        color: {
            control: string;
            options: string[];
        };
    };
};
export default _default;
export declare const Basic: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").Props>;
export declare const AllCaps: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").Props>;
export declare const Secondary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").Props>;
export declare const Tertiary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").Props>;
export declare const CustomFontColor: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").Props>;
export declare const CustomBackgroundColor: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").Props>;
