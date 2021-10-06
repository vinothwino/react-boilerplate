type themeItem = {
    primary: string,
    secondary: string
}
interface theme {
    [key: string]: themeItem
}

const themes: theme = {
    default: {
        primary: 'blue',
        secondary: 'purple'
    }
}

export default themes