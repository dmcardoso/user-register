import { string, addMethod, StringSchema } from 'yup';

const regexEspecialCharacters = /[^\d]+/g;

addMethod<StringSchema>(string, 'isPhone', function (message: string) {
    return this.test('isPhone', message, function (value) {
        const { path, createError } = this;

        if (value === undefined || value === '') {
            return true;
        }
        value = value.trim().replace(regexEspecialCharacters, '');

        if (value.length < 10) {
            return createError({
                path,
                message,
            });
        }
        return true;
    });
});

addMethod<StringSchema>(string, 'isCPF', function (message: string) {
    return this.test('isCPF', message, function (value) {
        const { path, createError } = this;

        if (value === undefined || value === '') {
            return true;
        }
        value = value.trim().replace(regexEspecialCharacters, '');

        if (
            value.length !== 11 ||
            value === '00000000000' ||
            value === '11111111111' ||
            value === '22222222222' ||
            value === '33333333333' ||
            value === '44444444444' ||
            value === '55555555555' ||
            value === '66666666666' ||
            value === '77777777777' ||
            value === '88888888888' ||
            value === '99999999999'
        ) {
            return createError({
                path,
                message,
            });
        }

        let add = 0;
        for (let i = 0; i < 9; i += 1) {
            add += Number(value.charAt(i)) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== Number(value.charAt(9))) {
            return createError({
                path,
                message,
            });
        }
        add = 0;
        for (let i = 0; i < 10; i += 1) {
            add += Number(value.charAt(i)) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== Number(value.charAt(10))) {
            return createError({
                path,
                message,
            });
        }

        return true;
    });
});
