import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            white: string;
            textWhite: string;
            textGrey: string;
            grey: string;
            background: string;
            placeholder: string;
        };
    }
}
