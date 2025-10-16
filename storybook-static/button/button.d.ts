type TIcon = "chevronDown" | "chevronLeft" | "chevronRight" | "chevronUp" | "user";
interface IButtonProps {
    mode?: "primary" | "secondary";
    text?: string;
    disabled?: boolean;
    size?: "small" | "medium";
    iconBefore?: TIcon;
    iconAfter?: TIcon;
}
export declare const Button: ({ text, disabled, mode, size, iconAfter, iconBefore, }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
