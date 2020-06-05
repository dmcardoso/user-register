/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import ReactSelect, { Theme } from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectCreatable from 'react-select/async-creatable';

import useApp from '../../../../hooks/useApp';
import { getCustomStyles, getSelectTheme } from '../configs';
import { SelectProps } from '../index';

const SelectComponent: React.FC<SelectProps> = ({
    name,
    id,
    isClearable = true,
    isDisabled = false,
    defaultOptions = true,
    value,
    error,
    options = [],
    onCreateOption,
    loadOptions,
    placeholder = 'Selecione...',
    noOptionsMessage = () => 'Nenhum resultado encontrado',
    ...rest
}) => {
    const { theme } = useApp();

    const customStyles = useMemo(() => {
        return getCustomStyles(theme, !!error);
    }, [theme, error]);

    const customOptions = {
        theme: (selectTheme: Theme) => getSelectTheme(theme, selectTheme),
        styles: customStyles,
        id,
        name,
        value,
        isClearable,
        isDisabled,
        placeholder,
        formatCreateLabel: (inputValue: string) => `Adicionar "${inputValue}"`,
        defaultOptions,
        noOptionsMessage,
        components: {
            IndicatorSeparator: null,
        },
        ...rest,
    } as any;

    if (!loadOptions) {
        customOptions.options = options;
    } else {
        customOptions.loadOptions = loadOptions;
    }

    if (onCreateOption) {
        customOptions.onCreateOption = onCreateOption;
    }

    if (loadOptions && !onCreateOption) {
        return <ReactSelectAsync {...customOptions} />;
    }

    if (onCreateOption) {
        return <ReactSelectCreatable {...customOptions} />;
    }

    return <ReactSelect {...customOptions} />;
};

export default SelectComponent;
