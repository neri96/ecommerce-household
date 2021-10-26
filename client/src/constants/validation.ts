import * as yup from 'yup';

const required = 'Данное поле обязательно для заполнения';
const phoneRegex = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
const emailRegex = /.+@[^@]+\.[^@]{2,}$/;

const loginSchema = yup.object().shape({
    name: yup.string().min(5, 'Имя должно содержать не менее 5 символов')
        .max(15, 'Имя должно содержать не более 15 символов')
        .typeError('Имя может содержать только буквы'),
    password: yup.string().min(8, 'Пароль должен содержать не менее 8 символов')
        .max(20, 'Пароль должен содержать не более 20 символов')
});

const registerSchema = yup.object().shape({
    name: yup.string().min(5, 'Имя должно содержать не менее 5 символов')
        .max(15, 'Имя должно содержать не более 15 символов')
        .typeError('Имя может содержать только буквы'),
    phone: yup.string().matches(phoneRegex, 'Неверный формат').required(required),
    email: yup.string().matches(emailRegex, 'Неверный формат').required(required),
    password: yup.string().min(8, 'Пароль должен содержать не менее 8 символов')
        .max(20, 'Пароль должен содержать не более 20 символов'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required(required)
});

export { loginSchema, registerSchema };