import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuth = defineStore('auth', () => {
  const mode = ref<'login' | 'register'>('login')

  const {handleSubmit, errors} = useForm()
  const {value: firstName} = useField('firstName', yup.string().required('Введите имя'))
  const {value: lastName} = useField('lastName', yup.string().required('Введите фамилию'))
  const {value: email} = useField('email', yup.string().email('Введите корректный email').required('Введите email'))
  const {value: password} = useField('password', yup.string().min(6, 'Минимум 6 символов').required('Введите пароль'))

  const submitForm = handleSubmit(values => {
    console.log('Form Submitted', values);
  })

  const registerHandler = handleSubmit(values => {
    console.log('Form Submitted', values);
  })

  // const onSubmit = handleSubmit(async () => {
  //   try {
  //     console.log('Form Submitted', password.value, email.value);
  //     password.value = ''
  //     email.value = ''
  //   } catch (e) {
  //     console.error('Login error', e)
  //   }
  // })

  const setMode = (newMode: 'login' | 'register') => {
    mode.value = newMode;
  }

  return {
    mode,
    setMode,
    firstName,
    lastName,
    email,
    password,
    errors,
    submitForm,
    registerHandler,
    // onSubmit
  }
})
