import {useField, useForm} from 'vee-validate';
import * as yup from 'yup';
import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useAuth = defineStore('auth', () => {
  const mode = ref<'login' | 'register'>('login');

  const schema = computed(() =>
    mode.value === 'register'
      ? yup.object({
        firstName: yup.string().required('Введите имя'),
        lastName: yup.string().required('Введите фамилию'),
        email: yup.string().email('Введите корректный email').required('Введите email'),
        password: yup.string().min(6, 'Минимум 6 символов').required('Введите пароль'),
      })
      : yup.object({
        email: yup.string().email('Введите корректный email').required('Введите email'),
        password: yup.string().min(6, 'Минимум 6 символов').required('Введите пароль'),
      })
  );

  const {handleSubmit, resetForm, errors} = useForm({
    validationSchema: schema,
  });

  const {value: firstName} = useField('firstName');
  const {value: lastName} = useField('lastName');
  const {value: email} = useField('email');
  const {value: password} = useField('password');

  const submitForm = handleSubmit((values) => {
    console.log('Form Submitted:', values);
    resetForm();
  });

  const setMode = (newMode: 'login' | 'register') => {
    mode.value = newMode;
    resetForm();
  };

  return {
    mode,
    setMode,

    firstName,
    lastName,
    email,
    password,

    errors,
    submitForm,
  };
});
