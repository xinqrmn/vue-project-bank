import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuth = defineStore('auth', () => {
  const mode = ref('login')
  const {handleSubmit, errors} = useForm()
  const {value: email} = useField('email', yup.string().email().required("Обязательное поле"))
  const {value: password} = useField('password', yup.string().min(6, 'Минимум 6 символов').required("Обязательное поле"))

  const submitForm = handleSubmit(values => {

    console.log('Form Submitted', values);
  })

  const setMode = (newMode: string) => {
    mode.value = newMode;
  }

  return {
    mode,
    setMode,
    email,
    password,
    errors,
    submitForm,
  }
})
