import {ThemeProvider, useTheme} from "./contexts/ThemeProvider";
import {ConfigProvider, FloatButton, theme} from "antd";
import {MoonOutlined, SunFilled} from "@ant-design/icons";
import {BrowserRouter} from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";

export default function App() {
    return (
        <ThemeProvider>
            <ThemedAppContent />
        </ThemeProvider>
    );
}

function ThemedAppContent() {
    const { themeApp, togglethemeApp } = useTheme();

    return (
        <ConfigProvider theme={{ algorithm: themeApp === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
            <FloatButton
                icon={themeApp === "dark" ? <SunFilled /> : <MoonOutlined />}
                onClick={togglethemeApp}
                type="primary"
                style={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                }}
            />
            <BrowserRouter>
                <RoutesApp />
            </BrowserRouter>
        </ConfigProvider>
    );
}
