import styled from "styled-components";
import { Button } from "../button";
import { Badge } from "../badge";

interface ICardProps {
    /**
     * Визуальное отображение
     */
    mode?: "emerald" | "orange";
    /**
     * Размер основного текста
     */
    textSize?: "medium" | "large"
     /**
     * Текст
     */
    text?: string;
    /**
     * Календарная дата
     */
    newsData?: string;
    buttonText?: string;
    badgeText?: string;
    children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>`
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border: 1px solid black;
    min-width: 420px;
    max-width: 600px;
    background-color: wheat;

    .card-content{
        display: inherit;
        flex-direction: inherit;
        gap: inherit;
    }

    .card-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .card-newsData{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }

    .card-body-text{
        ${props => props.textSize === "medium" && `
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
        `}

        ${props => props.textSize === "large" && `
            font-size: 32px;
            line-height: 40px;
            font-weight: 600;
        `}
    }

    ${props => props.mode === "emerald" && `
        color: ${props.theme.colors.text.global.primaryInverted};
        background-color:  ${props.theme.colors.bg.emerald.loud.enabled};
        border-color: ${props.theme.colors.border.emerald.loud.enabled};
    `}

        ${props => props.mode === "orange" && `
        color: ${props.theme.colors.text.global.primaryInverted};
        background-color:  ${props.theme.colors.bg.orange.loud.enabled};
        border-color: ${props.theme.colors.border.orange.loud.enabled};
    `}


`;


/**
 * Коспонент карточки
 */
export const Card: React.FC<ICardProps> = ({
    mode, 
    textSize="medium", 
    text = "Hello text", 
    newsData = "10.10", 
    badgeText = "Bage Text", 
    buttonText = "CTA", 
    children,
}) => {
    return (<StyledCard mode={mode} textSize={textSize}>
        <div className="card-content">
            <div className="card-header">
                <div className="card-newsData">{newsData}</div>
                <Badge text={badgeText} mode={mode} outline/>
            </div>
            <div className="card-body">
                <p className="card-body-text">{text}</p>
                {children}
            </div>
        </div>

        <div>
        <Button text={buttonText} size="small"/>
        </div>
    </StyledCard>);
};