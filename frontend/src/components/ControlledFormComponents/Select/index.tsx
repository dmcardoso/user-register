import React, { useCallback, useMemo } from 'react';

import { useField } from 'formik';

import TSelect, { SelectProps } from '../../FormComponents/Select';

export interface SelectInterface {
    value: string | number;
    label: string;
}

const Select: React.FC<SelectProps> = ({ name, onChange, ...rest }) => {
    const [{ value, ...field }, meta, helpers] = useField(name);

    const handleMenuClose = useCallback(() => {
        if (!meta.touched) {
            helpers.setTouched(true);
        }
    }, [helpers, meta.touched]);

    const error = useMemo(
        () =>
            // @ts-ignore
            meta.touched && meta.error && meta.error.value
                ? // @ts-ignore
                  // @ts-ignore
                  meta.error.value
                : '',
        [meta.error, meta.touched]
    );

    const fieldValue = useMemo(() => {
        if (!value) return null;
        return Object.keys(value).length > 0 ? value : null;
    }, [value]);

    const handleChange = useCallback(
        (selectValue, actions) => {
            if (!selectValue) {
                if (onChange) onChange(null, actions);
                helpers.setValue({});
            } else {
                if (onChange) onChange(selectValue, actions);
                helpers.setValue(selectValue);
            }
        },
        [helpers, onChange]
    );

    return (
        <TSelect
            {...field}
            {...rest}
            value={fieldValue}
            error={error}
            onMenuClose={handleMenuClose}
            onChange={handleChange}
        />
    );
};

export default Select;
