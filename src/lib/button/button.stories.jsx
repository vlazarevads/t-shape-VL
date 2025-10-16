import {Button} from "./button";

export default {
    title: "Компоненты/Button",
    component: Button,
    parameters:{
        layout: "centered",
        status: {
            type: "stable",
        },
    },
    tags: ["autodocs"],
    argTypes:{
        iconBefore:{
            // Выбор типа отображающегося пропа
            control: {type: "select"},

            // Можно управлять очередностью пропов
            options: ["—","chevronDown", "1", "chevronLeft", "chevronRight", "chevronUp"],
            
            // Можно маппить что угодно к чему угодно
            mapping: {
                "—": null,
                // "1": "user",
            },
        },

        iconAfter:{
            control: {type: "select"},
            options: ["—","chevronDown", "user", "chevronLeft", "chevronRight", "chevronUp"],
            mapping: {"—":null,}
        }
    },

}

export const View = {
    args: {
        mode: "primary",
        size: "medium",
        disabled: false,
        iconBefore:"—",
        text: "Button text",
        iconAfter:"—",
    }
}