import { CSSProperties } from 'react';
import { Theme, StylesConfig } from 'react-select';

import { lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

export interface ValueSelect {
    label: string;
    value: string | number;
}

export function getSelectTheme(theme: DefaultTheme, selectTheme: Theme): Theme {
    return {
        ...selectTheme,
        borderRadius: 6,
        colors: {
            ...selectTheme.colors,
            text: theme.colors.textGrey,
            primary25: lighten(0.25, theme.colors.primary),
            primary50: lighten(0.5, theme.colors.primary),
            primary75: lighten(0.75, theme.colors.primary),
            primary: theme.colors.primary,
        },
    };
}

export function getCustomStyles(
    theme: DefaultTheme,
    hasError: boolean
): StylesConfig {
    return {
        container: (provided: CSSProperties) => {
            return {
                ...provided,
                height: '25px',
                fontFamily: "'Nunito', sans-serif",
            };
        },
        control: (provided: CSSProperties) => {
            return {
                ...provided,
                '&:hover': null,
                background: 'transparent',
                border: 'unset',
                boxShadow: 'unset',
                borderBottom: `1px solid ${
                    hasError ? theme.colors.error : 'rgba(230, 238, 244, 0.5)'
                }`,
                borderRadius: 0,
                minHeight: '25px',
            };
        },
        valueContainer: (provided: CSSProperties) => {
            return {
                ...provided,
                padding: '0',
                fontSize: '1.4rem',
            };
        },
        placeholder: (provided: CSSProperties) => {
            return {
                ...provided,
                color: theme.colors.textGrey,
                margin: 0,
            };
        },
        input: (provided: CSSProperties) => {
            return {
                ...provided,
                padding: '0',
                margin: '0',
            };
        },
        indicatorsContainer: (provided: CSSProperties) => {
            return {
                ...provided,
                '> div': {
                    padding: '0 8px',
                },
            };
        },
        option: (provided: CSSProperties) => {
            return {
                ...provided,
                color: theme.colors.background,
            };
        },
        singleValue: (provided: CSSProperties) => {
            return {
                ...provided,
                color: theme.colors.textWhite,
                marginLeft: 0,
            };
        },
    };
}
