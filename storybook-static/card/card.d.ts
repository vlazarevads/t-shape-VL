/// <reference types="react" />
interface ICardProps {
    /**
     * Визуальное отображение
     */
    mode?: "emerald" | "orange";
    /**
     * Размер основного текста
     */
    textSize?: "medium" | "large";
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
/**
 * Коспонент карточки
 */
export declare const Card: React.FC<ICardProps>;
export {};
