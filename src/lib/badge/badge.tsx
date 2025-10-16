import styled from "styled-components"

interface IBadgeProps {
    /**
     * Текст
     */
    text?: string;
    /**
     * Визуальное отображение
     */
    mode?: "emerald" | "orange"
    /**
     * Делает компонент менее акцентным
     */
    outline?: boolean;
}


const StyledBadge = styled.div<IBadgeProps>`
display: inline-flex;
align-items: center;
justify-content: center;
border: 1px solid transparent;
height: 24px;
font-size: 12px;
line-height: 16px;
font-weight: 500;
border-radius: 4px;
padding: 2px 8px 4px;


${(props)=> props.mode==="emerald" && `
    background-color: ${props.theme.colors.bg.emerald.loud.enabled};
    color: ${props.theme.colors.text.global.primaryInverted};
`}

${(props)=> props.mode==="orange" && `
    background-color: ${props.theme.colors.bg.orange.loud.enabled};
    color: ${props.theme.colors.text.global.primaryInverted};
`}

/* OUTLINE */

${(props)=>  props.outline && props.mode==="emerald"  && `
    background-color: ${props.theme.colors.bg.emerald.calm.enabled};
    border-color: ${props.theme.colors.border.emerald.calm.enabled};
    color: ${props.theme.colors.text.global.primary};
`}

${(props)=>  props.outline && props.mode==="orange"  && `
    background-color: ${props.theme.colors.bg.orange.calm.enabled};
    border-color: ${props.theme.colors.border.orange.calm.enabled};
    color: ${props.theme.colors.text.global.primary};
`}

`;




/**
 * Компонент для отображения дополнительной информации
 */
export const Badge:React.FC<IBadgeProps> = ({
    text="BageText",
    mode="emerald",
    outline}
) => {
    return <StyledBadge 
        outline={outline} 
        mode={mode}>{text}
    </StyledBadge>;
};