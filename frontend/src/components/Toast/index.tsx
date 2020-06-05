import cogoToast, { CTReturn, CTOptions } from 'cogo-toast';

const options: CTOptions = {
    position: 'bottom-right',
    hideAfter: 4,
};

const success = ({ message = '', body = '' }): void => {
    const { hide } = cogoToast.success(message, {
        ...{
            ...options,
            onClick() {
                if (hide) hide();
            },
        },
        heading: body,
    });
};

const info = ({ message = '', body = '' }): void => {
    const { hide } = cogoToast.info(message, {
        ...{
            ...options,
            onClick() {
                if (hide) hide();
            },
        },
        heading: body,
    });
};

const warn = ({ message = '', body = '' }): void => {
    const { hide } = cogoToast.warn(message, {
        ...{
            ...options,
            onClick() {
                if (hide) hide();
            },
        },
        heading: body,
    });
};

const error = ({ message = '', body = '' }): void => {
    const { hide } = cogoToast.error(message, {
        ...{
            ...options,
            onClick() {
                if (hide) hide();
            },
        },
        heading: body,
    });
};

const loading = ({ message = '', body = '' }): CTReturn =>
    cogoToast.loading(message, { ...options, heading: body, hideAfter: 0 });

export { success, error, info, loading, warn };
