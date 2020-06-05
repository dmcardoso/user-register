import React, { useMemo } from 'react';

import { useField } from 'formik';

import TMask, { MaskProps } from '../../FormComponents/MaskInput';

const MaskInput: React.FC<MaskProps> = ({ name, ...rest }) => {
    const [field, meta] = useField(name);

    const error = useMemo(
        () => (meta.touched && meta.error ? meta.error : ''),
        [meta.error, meta.touched]
    );

    return <TMask {...field} {...rest} error={error} />;
};

export default MaskInput;
