import {createTheme, ThemeProvider, Container, CssBaseline, Box, Button} from '@mui/material';
import React, {useState} from 'react';
import {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {mode: darkMode ? 'dark' : 'light'},
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{display: "flex", justifyContent: "flex-end", p: 2}}>
                <Button variant="contained" onClick={() => setDarkMode((prev) => !prev)}>
                    Toggle Theme
                </Button>
            </Box>
            <Container>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    );
}