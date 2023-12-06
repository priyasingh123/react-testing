import {ThemeProvider, createTheme} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme ({
    palette: {
        mode: 'dark'//another option is light
    }
})

export const AppProviders = ({children} :{children: React.ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}