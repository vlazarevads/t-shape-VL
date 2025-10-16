import { DefaultTheme } from "styled-components";
import { colors } from "./tokens";

export const lightTheme: DefaultTheme = {
    colors: {
    bg: {
        disabled: colors.neutral[100],
        global: {
            base: colors.neutral[0],
            section: colors.neutral[50],
        },
        brend: {
            loud: {
                enabled: colors.cobalt[800],
                hover: colors.cobalt[700],
                active: colors.cobalt[600],
            },
        },
        gray: {
            calm: {
                enabled: colors.neutral[100],
                hover: colors.neutral[200],
                active: colors.neutral[300],
            },
            loud: {
                enabled: colors.neutral[400],
                hover: colors.neutral[500],
                active: colors.neutral[600],
            },
                },
        red: {
            calm: {
                enabled: colors.red[50],
                hover: colors.red[100],
                active: colors.red[200],
            },
            loud: {
                enabled: colors.red[400],
                hover: colors.red[500],
                active: colors.red[600],
            },
        },
        orange: {
            calm: {
                enabled: colors.orange[50],
                hover: colors.orange[100],
                active: colors.orange[200],
            },
            loud: {
                enabled: colors.orange[400],
                hover: colors.orange[500],
                active: colors.orange[600],
            },
        },
        grass: {
            calm: {
                enabled: colors.grass[50],
                hover: colors.grass[100],
                active: colors.grass[200],
            },
            loud: {
                enabled: colors.grass[400],
                hover: colors.grass[500],
                active: colors.grass[600],
            },
        },
        emerald: {
            calm: {
                enabled: colors.emerald[50],
                hover: colors.emerald[100],
                active: colors.emerald[200],
            },
            loud: {
                enabled: colors.emerald[400],
                hover: colors.emerald[500],
                active: colors.emerald[600],
            },
        },
        azure: {
            calm: {
                enabled: colors.azure[50],
                hover: colors.azure[100],
                active: colors.azure[200],
            },
            loud: {
                enabled: colors.azure[400],
                hover: colors.azure[500],
                active: colors.azure[600],
            },
        },
        cobalt: {
            calm: {
                enabled: colors.cobalt[50],
                hover: colors.cobalt[100],
                active: colors.cobalt[200],
            },
            loud: {
                enabled: colors.cobalt[400],
                hover: colors.cobalt[500],
                active: colors.cobalt[600],
            },
        },
    },
    border: {
        disabled: colors.neutral[300],
        brend: {
            enabled: colors.cobalt[800],
            hover: colors.cobalt[700],
            active: colors.cobalt[600],
        },
        gray: {
            calm: {
                enabled: colors.neutral[100],
            },
            loud: {
                enabled: colors.neutral[400],
            },
        },
        red: {
            calm: {
                enabled: colors.red[100],
            },
            loud: {
                enabled: colors.red[400],
            },
        },
        orange: {
            calm: {
                enabled: colors.orange[100],
            },
            loud: {
                enabled: colors.orange[400],
            },
        },
        grass: {
            calm: {
                enabled: colors.grass[100],
            },
            loud: {
                enabled: colors.grass[400],
            },
        },
        emerald: {
            calm: {
                enabled: colors.emerald[100],
            },
            loud: {
                enabled: colors.emerald[400],
            },
        },
        azure: {
            calm: {
                enabled: colors.azure[100],
            },
            loud: {
                enabled: colors.azure[400],
            },
        },
        cobalt: {
            calm: {
                enabled: colors.cobalt[100],
            },
            loud: {
                enabled: colors.cobalt[400],
            },
        },
    },
    text: {
        disabled: colors.neutral[300],
        global: {
            primary: colors.cobalt[800],
            secondary: colors.neutral[400],
            primaryInverted: colors.cobalt[50],
            primaryOnDark: colors.cobalt[50],
        },
        brend: {
            enabled: colors.cobalt[800],
            hover: colors.cobalt[700],
            active: colors.cobalt[600],
        },
        gray: {
            calm: {
                enabled: colors.neutral[50],
            },
            loud: {
                enabled: colors.neutral[400],
            },
        },
        red: {
            calm: {
                enabled: colors.red[50],
            },
            loud: {
                enabled: colors.red[400],
            },
        },
        orange: {
            calm: {
                enabled: colors.orange[50],
            },
            loud: {
                enabled: colors.orange[400],
            },
        },
        grass: {
            calm: {
                enabled: colors.grass[50],
            },
            loud: {
                enabled: colors.grass[400],
            },
        },
        emerald: {
            calm: {
                enabled: colors.emerald[50],
            },
            loud: {
                enabled: colors.emerald[400],
            },
        },
        azure: {
            calm: {
                enabled: colors.azure[50],
            },
            loud: {
                enabled: colors.azure[400],
            },
        },
        cobalt: {
            calm: {
                enabled: colors.cobalt[50],
            },
            loud: {
                enabled: colors.cobalt[400],
            },
        },
    },
},
}

export const darkTheme: DefaultTheme = {
    colors: {
    bg: {
        disabled: colors.neutral[100],
        global: {
            base: colors.neutral[0],
            section: colors.neutral[50],
        },
        brend: {
            loud: {
                enabled: colors.cobalt[800],
                hover: colors.cobalt[700],
                active: colors.cobalt[600],
            },
        },
        gray: {
            calm: {
                enabled: colors.neutral[100],
                hover: colors.neutral[200],
                active: colors.neutral[300],
            },
            loud: {
                enabled: colors.neutral[400],
                hover: colors.neutral[500],
                active: colors.neutral[600],
            },
                },
        red: {
            calm: {
                enabled: colors.red[50],
                hover: colors.red[100],
                active: colors.red[200],
            },
            loud: {
                enabled: colors.red[400],
                hover: colors.red[500],
                active: colors.red[600],
            },
        },
        orange: {
            calm: {
                enabled: colors.orange[50],
                hover: colors.orange[100],
                active: colors.orange[200],
            },
            loud: {
                enabled: colors.orange[400],
                hover: colors.orange[500],
                active: colors.orange[600],
            },
        },
        grass: {
            calm: {
                enabled: colors.grass[50],
                hover: colors.grass[100],
                active: colors.grass[200],
            },
            loud: {
                enabled: colors.grass[400],
                hover: colors.grass[500],
                active: colors.grass[600],
            },
        },
        emerald: {
            calm: {
                enabled: colors.emerald[50],
                hover: colors.emerald[100],
                active: colors.emerald[200],
            },
            loud: {
                enabled: colors.emerald[400],
                hover: colors.emerald[500],
                active: colors.emerald[600],
            },
        },
        azure: {
            calm: {
                enabled: colors.azure[50],
                hover: colors.azure[100],
                active: colors.azure[200],
            },
            loud: {
                enabled: colors.azure[400],
                hover: colors.azure[500],
                active: colors.azure[600],
            },
        },
        cobalt: {
            calm: {
                enabled: colors.cobalt[50],
                hover: colors.cobalt[100],
                active: colors.cobalt[200],
            },
            loud: {
                enabled: colors.cobalt[400],
                hover: colors.cobalt[500],
                active: colors.cobalt[600],
            },
        },
    },
    border: {
        disabled: colors.neutral[300],
        brend: {
            enabled: colors.cobalt[800],
            hover: colors.cobalt[700],
            active: colors.cobalt[600],
        },
        gray: {
            calm: {
                enabled: colors.neutral[100],
            },
            loud: {
                enabled: colors.neutral[400],
            },
        },
        red: {
            calm: {
                enabled: colors.red[100],
            },
            loud: {
                enabled: colors.red[400],
            },
        },
        orange: {
            calm: {
                enabled: colors.orange[100],
            },
            loud: {
                enabled: colors.orange[400],
            },
        },
        grass: {
            calm: {
                enabled: colors.grass[100],
            },
            loud: {
                enabled: colors.grass[400],
            },
        },
        emerald: {
            calm: {
                enabled: colors.emerald[100],
            },
            loud: {
                enabled: colors.emerald[400],
            },
        },
        azure: {
            calm: {
                enabled: colors.azure[100],
            },
            loud: {
                enabled: colors.azure[400],
            },
        },
        cobalt: {
            calm: {
                enabled: colors.cobalt[100],
            },
            loud: {
                enabled: colors.cobalt[400],
            },
        },
    },
    text: {
        disabled: colors.neutral[300],
        global: {
            primary: colors.cobalt[800],
            secondary: colors.neutral[400],
            primaryInverted: colors.cobalt[50],
            primaryOnDark: colors.cobalt[50],
        },
        brend: {
            enabled: colors.cobalt[800],
            hover: colors.cobalt[700],
            active: colors.cobalt[600],
        },
        gray: {
            calm: {
                enabled: colors.neutral[50],
            },
            loud: {
                enabled: colors.neutral[400],
            },
        },
        red: {
            calm: {
                enabled: colors.red[50],
            },
            loud: {
                enabled: colors.red[400],
            },
        },
        orange: {
            calm: {
                enabled: colors.orange[50],
            },
            loud: {
                enabled: colors.orange[400],
            },
        },
        grass: {
            calm: {
                enabled: colors.grass[50],
            },
            loud: {
                enabled: colors.grass[400],
            },
        },
        emerald: {
            calm: {
                enabled: colors.emerald[50],
            },
            loud: {
                enabled: colors.emerald[400],
            },
        },
        azure: {
            calm: {
                enabled: colors.azure[50],
            },
            loud: {
                enabled: colors.azure[400],
            },
        },
        cobalt: {
            calm: {
                enabled: colors.cobalt[50],
            },
            loud: {
                enabled: colors.cobalt[400],
            },
        },
    },
},
}