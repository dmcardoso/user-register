import { StringSchema } from 'yup';

declare module 'yup' {
    interface StringSchema {
        isCPF(message?: string): StringSchema;
        isPhone(message?: string): StringSchema;
    }
}
