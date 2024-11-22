import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth"

export const useAuth = defineStore('auth', () => {
  const mode = ref<'login' | 'register'>('login')

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
  )

  const {handleSubmit, resetForm, errors} = useForm({
    validationSchema: schema,
  })

  const {value: firstName} = useField('firstName')
  const {value: lastName} = useField('lastName')
  const {value: email} = useField('email')
  const {value: password} = useField('password')

  const auth = getAuth()

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const appleProvider = new OAuthProvider('apple.com');

  const submitForm = handleSubmit(async (values) => {
    try {
      if (mode.value === 'register') {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log('User registered successfully', values)
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password)
        console.log('User logged in successfully', values)
      }
      resetForm()
    } catch (error) {
      console.error('Error in auth', error)
    }
  })

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      console.log('User signed in with Google successfully')
    } catch (error) {
      console.error('Error during Google authentication: ', error)
    }
  }

  const authWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
      console.log('User signed in with Facebook successfully')
    } catch (error) {
      console.error('Error during Google authentication: ', error)
    }
  }

  const authWithApple = async () => {
    try {
      await signInWithPopup(auth, appleProvider)
      console.log('User signed in with Apple successfully')
    } catch (error) {
      console.error('Error during Google authentication: ', error)
    }
  }

  const setMode = (newMode: 'login' | 'register') => {
    mode.value = newMode
    resetForm()
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
    authWithGoogle,
    authWithFacebook,
    authWithApple,
  }
})
