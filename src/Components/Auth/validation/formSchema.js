import * as yup from 'yup';

//
const userRegex = '^[\\w]+$'
const passRegex = '^[\\S]+$'

const formSchema = yup.object().shape({
    username: yup.string()
        .matches(userRegex, 'Username must not have spaces or special characters.')
        .min(2, 'Username must be at least 2 characters.')
        .required('Username required.'),
    password: yup.string()
        .matches(passRegex, 'Password must not have spaces.')
        .min(8, 'Password must be at least 8 characters.')
        .required('Password required.'),

})

export default formSchema;