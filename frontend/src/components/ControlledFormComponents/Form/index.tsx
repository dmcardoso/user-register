import React from 'react';

import { FormikProvider, FormikProps } from 'formik';

interface FormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formikState: FormikProps<any>;
}

const Form: React.FC<FormProps> = ({ formikState, children }) => {
    return (
        <FormikProvider value={formikState}>
            <form onSubmit={formikState.handleSubmit}>{children}</form>
        </FormikProvider>
    );
};

export default Form;
