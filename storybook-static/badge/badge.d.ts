/// <reference types="react" />
interface IBadgeProps {
    /**
     * Текст
     */
    text?: string;
    /**
     * Визуальное отображение
     */
    mode?: "emerald" | "orange";
    /**
     * Делает компонент менее акцентным
     */
    outline?: boolean;
}
/**
 * Компонент для отображения дополнительной информации
 */
export declare const Badge: React.FC<IBadgeProps>;
export {};
