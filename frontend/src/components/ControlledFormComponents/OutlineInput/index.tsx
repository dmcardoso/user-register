import React, { useMemo } from 'react';

import { useField } from 'formik';

import TOutlineInput, { Props } from '../../FormComponents/OutlineInput';

const Input: React.FC<Props> = ({ name, ...rest }) => {
    const [field, meta] = useField(name);

    const error = useMemo(
        () => (meta.touched && meta.error ? meta.error : ''),
        [meta.error, meta.touched]
    );

    return <TOutlineInput {...field} {...rest} error={error} />;
};

export default Input;
