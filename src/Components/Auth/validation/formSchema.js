import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().trim()
        .min(2, 'Username must be at least 2 characters.')
        .required('Username required.'),
    password: yup.string().trim()
        .min(8, 'Password must be at least 8 characters.')
        .required('Password required.'),

})

export default formSchema;