import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { createContext, useMemo, useState } from "react";

// Color Tokens

export const tokens = (mode) => {
    return (mode === 'light'
        ? {
            primary: {
                100: "#d7d3e6",
                200: "#afa7cc",
                300: "#867bb3",
                400: "#5e4f99",
                500: "#362380",
                600: "#2b1c66",
                700: "#20154d",
                800: "#160e33",
                900: "#0b071a"
            },
            secondary: {
                100: "#dbf5e9",
                200: "#b6ebd4",
                300: "#92e0be",
                400: "#6dd6a9",
                500: "#49cc93",
                600: "#3aa376",
                700: "#2c7a58",
                800: "#1d523b",
                900: "#0f291d"
            },
            orangeAccent: {
                100: "#ffe8cc",
                200: "#ffd199",
                300: "#ffb966",
                400: "#ffa233",
                500: "#ff8b00",
                600: "#cc6f00",
                700: "#995300",
                800: "#663800",
                900: "#331c00"
            },

        } : { // Dark Mode
            primary: {
                100: "#0b071a",
                200: "#160e33",
                300: "#20154d",
                400: "#2b1c66",
                500: "#362380",
                600: "#5e4f99",
                700: "#867bb3",
                800: "#afa7cc",
                900: "#d7d3e6",
            },
            secondary: {
                100: "#0f291d",
                200: "#1d523b",
                300: "#2c7a58",
                400: "#3aa376",
                500: "#49cc93",
                600: "#6dd6a9",
                700: "#92e0be",
                800: "#b6ebd4",
                900: "#dbf5e9",
            },
            orangeAccent: {
                100: "#331c00",
                200: "#663800",
                300: "#995300",
                400: "#cc6f00",
                500: "#ff8b00",
                600: "#ffa233",
                700: "#ffb966",
                800: "#ffd199",
                900: "#ffe8cc",
            },
        }
    )
}


export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        breakpoints:{
            values:{
                xs: 0,
                sm: 600,
                md: 1000,
                lg: 1100,
                xl: 1536
            }
        },
        palette: {
            mode: mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary: {
                        main: colors.secondary[500]
                    },
                    orangeAccent: {
                        main: colors.orangeAccent[500]
                    },

                } : {
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary: {
                        main: colors.secondary[500]
                    },
                    orangeAccent: {
                        main: colors.orangeAccent[500]
                    }
                }),
        },

        typography: {
            fontFamily: "Poppins",
            fontSize: 12,
            // The H's
            h1: {
                fontFamily: 'Poppins',
                fontSize: 48,
            },
        
            h2: {
                fontFamily: 'Poppins',
                fontSize: 32,
            },
        
            h3: {
                fontFamily: 'Poppins',
                fontSize: 28,
            },
        
            h4: {
                fontFamily: 'Poppins',
                fontSize: 24,
            },
        
            h5: {
                fontFamily: 'Poppins',
                fontSize: 18,
            },
        
            h6: {
                fontFamily: 'Poppins',
                fontSize: 14,
            },
        }
        
    }
}

// Context for color mode
export const ColorModContext = createContext({
    toggleColorMode: () => { }
})

export const useMode = () => {
    const [mode, setmode] = useState('light')

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setmode((prev) => prev === 'light' ? 'dark' : 'light')
    }), []) 


    const theme = useMemo(() => createTheme(themeSettings(mode), [mode]))

    return [theme, colorMode]
}


