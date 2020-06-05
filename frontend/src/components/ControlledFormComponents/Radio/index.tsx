import React, { useMemo, useCallback } from 'react';

import { useField } from 'formik';

import TRadio, {
    RadioOption,
    BaseRadioProps,
} from '../../FormComponents/Radio';

interface RadioProps extends Omit<BaseRadioProps, 'onChange'> {
    onChange?(selected: RadioOption): void | Promise<void>;
    options: RadioOption[];
}

const Radio: React.FC<RadioProps> = ({ name, ...rest }) => {
    const [field, meta, helpers] = useField(name);

    const handleChange = useCallback(
        (value) => {
            if (!meta.touched) helpers.setTouched(true);

            helpers.setValue(value.value);
        },
        [helpers, meta.touched]
    );

    const selectedValue = useMemo(() => {
        return field.value;
    }, [field.value]);

    return (
        <TRadio
            {...field}
            {...rest}
            selectedValue={selectedValue}
            onChange={handleChange}
        />
    );
};

export default Radio;
