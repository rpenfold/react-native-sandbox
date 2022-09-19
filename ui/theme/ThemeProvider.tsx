import { createContext, useContext } from 'react';

export interface ThemeColors {
    text: string;
    background: string;
    surface: string;
    disabled: string;
    divider: string;
    info: string;
    warning: string;
    error: string;
    success: string;
}

export interface Theme {
    colors: ThemeColors;
}

export const DefaultTheme: Theme = {
    colors: {
        text: 'black',
        background: 'white',
        surface: '#EEE',
        disabled: '#555',
        divider: '#CCC',
        info: '#3498db',
        warning: '#f1c40f',
        error: '#e74c3c',
        success: '#2ecc71',
    }
}

export const DarkTheme: Theme = {
    colors: {
        text: '#EEE',
        background: '#222',
        surface: '#111',
        disabled: '#777',
        divider: '#555',
        info: '#3498db',
        warning: '#f1c40f',
        error: '#e74c3c',
        success: '#2ecc71',
    },
}

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider(props) {
    const { theme = DefaultTheme, children } = props;

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}
