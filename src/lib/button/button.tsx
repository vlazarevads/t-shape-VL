import styled from "styled-components";
import { Icon } from "../icon";

type TIcon = 
    "chevronDown" 
    | "chevronLeft" 
    | "chevronRight" 
    | "chevronUp" 
    | "user"
 
interface IButtonProps{
    /**
     * Вариант визуального отображения кнопки
     */
    mode?: "primary" | "secondary";
    /**
     * Текст
     */
    text?: string;
    /**
     * Неактивное состояние кнопки
     */
    disabled?: boolean;
    /**
     * Размер
     */
    size?: "small" | "medium";
    /**
     * Иконка перед текстом
     */
    iconBefore?: TIcon;
    /**
     * Иконка после текстом
     */
    iconAfter?: TIcon;
}



const StyledButton = styled.button<IButtonProps>`
    display: inline-flex;
    flex-direction: row;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: 8px;
    cursor: pointer;
    &:focus-visible{
    box-shadow: 0px 0px 0px 4px rgba(79, 96, 255, 0.25);
    }


${(props)=> props.mode==="primary" &&
`
    background-color: ${props.theme.colors.bg.brend.loud.enabled};
    color: ${props.theme.colors.text.global.primaryOnDark};

    &:hover{ 
    background-color: ${props.theme.colors.bg.brend.loud.hover};
    color: ${props.theme.colors.text.global.primaryOnDark};
    }

    &:active{
    background-color: ${props.theme.colors.bg.brend.loud.active};
    color: ${props.theme.colors.text.global.primaryOnDark};
    }

    &:disabled {
        background-color: ${props.theme.colors.bg.disabled};
        border-color: transparent;
        color: ${props.theme.colors.text.disabled};
        cursor: not-allowed;
    }


`}


${(props)=> props.mode==="secondary" &&
`
    background-color: transparent;
    border-color: ${props.theme.colors.border.brend.enabled};
    color: ${props.theme.colors.text.brend.enabled};
    

    &:hover{ 
    border-color: ${props.theme.colors.border.brend.hover};
    color: ${props.theme.colors.text.brend.hover};
    }

    &:active{
    border-color: ${props.theme.colors.border.brend.active};
    color: ${props.theme.colors.text.brend.active};
    }

    &:disabled {
        background-color: transparent;
        border-color: ${props.theme.colors.border.disabled};
        color: ${props.theme.colors.text.disabled};
        cursor: not-allowed;
    }

`}

${(props)=> props.size==="small" && `
    height: 40px;
    padding: 12px;
    font-size: 14px;
    font-height: 24px;
    font-weight: 400;
`}
${(props)=> props.size==="medium" && `
    height: 48px;
    padding: 20px;
    font-size: 16px;
    font-height: 24px;
    font-weight: 400;
`}


`;



/**
 * Кнопка
 */
export const Button = ({
    text="Button",
    disabled,
    mode="primary",
    size="small",
    iconAfter,
    iconBefore,
   
}: IButtonProps) => {
    return (
        <StyledButton disabled={disabled} mode={mode} size={size}>
            {iconBefore ? <Icon iconName={iconBefore} size={size=== "medium" ? 20 : 16} /> : null}
            {text}
            {iconAfter ? <Icon iconName={iconAfter} size={size=== "medium" ? 20 : 16} /> : null}
        </StyledButton>)
};