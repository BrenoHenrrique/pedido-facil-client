import React, { createContext, useContext, useState, useEffect } from 'react';
import { getInLocalStorage, saveInLocalStorage } from '../util/methodsUtils';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeApp, setThemeApp] = useState(() => getInLocalStorage('theme@app') || 'light');

    useEffect(() => {
        changeBackgroundColor();
    }, [themeApp]);

    function changeBackgroundColor() {
        document.body.style.backgroundColor = themeApp === 'dark' ? '#0F111A' : '#FAFAFA';
    }

    function togglethemeApp() {
        const newTheme = themeApp === 'dark' ? 'light' : 'dark';
        saveInLocalStorage('theme@app', newTheme);
        setThemeApp(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ themeApp, togglethemeApp }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
