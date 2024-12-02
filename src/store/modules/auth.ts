import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { defineStore } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';

export const useAuth = defineStore('auth', () => {
  const mode = ref<'login' | 'register'>('login');
  const loading = ref<boolean>(false);
  const errorMessage = ref('');
  const successMessage = ref('');

  onMounted(() => loadStatus());

  const schema = computed(() =>
    mode.value === 'register'
      ? yup.object({
          firstName: yup.string().required('Введите имя'),
          lastName: yup.string().required('Введите фамилию'),
          email: yup
            .string()
            .email('Введите корректный email')
            .required('Введите email'),
          password: yup
            .string()
            .min(6, 'Минимум 6 символов')
            .required('Введите пароль'),
        })
      : yup.object({
          email: yup
            .string()
            .email('Введите корректный email')
            .required('Введите email'),
          password: yup
            .string()
            .min(6, 'Минимум 6 символов')
            .required('Введите пароль'),
        })
  );

  const { handleSubmit, resetForm, errors } = useForm({
    validationSchema: schema,
  });

  const { value: firstName } = useField('firstName');
  const { value: lastName } = useField('lastName');
  const { value: email } = useField('email');
  const { value: password } = useField('password');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const appleProvider = new OAuthProvider('apple.com');

  const submitForm = handleSubmit(async (values) => {
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    try {
      if (mode.value === 'register') {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log('User registered successfully', values);
        successMessage.value = 'Успешная регистрация!';
        mode.value = 'login';
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log('User logged in successfully', values);
        successMessage.value = 'Успешная авторизация!';
      }
      resetForm();
    } catch (error) {
      errorMessage.value = getFirebaseErrorMessage(error);
    } finally {
      loading.value = false;
    }
  });

  const authWithGoogle = async () => {
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('User signed in with Google successfully');
      successMessage.value = 'Успешная авторизация с помощью Google!';
    } catch (error) {
      errorMessage.value = getFirebaseErrorMessage(error);
    } finally {
      loading.value = false;
    }
  };

  const authWithFacebook = async () => {
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log('User signed in with Facebook successfully');
      successMessage.value = 'Успешная авторизация с помощью Facebook!';
    } catch (error) {
      errorMessage.value = getFirebaseErrorMessage(error);
    } finally {
      loading.value = false;
    }
  };

  const authWithApple = async () => {
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    try {
      await signInWithPopup(auth, appleProvider);
      console.log('User signed in with Apple successfully');
      successMessage.value = 'Успешная авторизация с помощью Apple!';
    } catch (error) {
      errorMessage.value = getFirebaseErrorMessage(error);
    } finally {
      loading.value = false;
    }
  };

  const sendResetPasswordEmail = async (email: string) => {
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully');
      successMessage.value =
        'Ссылка для восстановления данных была отправлена на указанный email!';
    } catch (error) {
      errorMessage.value = getFirebaseErrorMessage(error);
    } finally {
      loading.value = false;
    }
  };

  const loadStatus = () => {
    const savedMode = localStorage.getItem('auth');
    if (savedMode !== null) {
      mode.value = JSON.parse(savedMode);
    }
  };

  const setMode = (newMode: 'login' | 'register') => {
    mode.value = newMode;
    localStorage.setItem('auth', JSON.stringify(mode.value));
    resetForm();
  };

  const getFirebaseErrorMessage = (error: any) => {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Неправильный email';
      case 'auth/user-disabled':
        return 'Пользователь заблокирован';
      case 'auth/user-not-found':
        return 'Пользователь не найден';
      case 'auth/wrong-password':
        return 'Неправильный пароль';
      case 'auth/invalid-credential':
        return 'Неправильные данные';
      case 'auth/email-already-in-use':
        return 'Email уже исользуется';
      case 'auth/operation-not-allowed':
        return 'Операция отклонена.';
      case 'auth/weak-password':
        return 'Слишком лёгкий пароль ';
      default:
        return 'Неизвестная ошибка';
    }
  };

  return {
    mode,
    setMode,

    firstName,
    lastName,
    email,
    password,
    loading,
    errorMessage,
    successMessage,

    errors,
    submitForm,
    authWithGoogle,
    authWithFacebook,
    authWithApple,
    sendResetPasswordEmail,
  };
});
