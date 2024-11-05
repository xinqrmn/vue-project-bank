<script setup lang="ts">
import RoundedIcon from "@/components/RoundedIcon.vue";
import DecorRightTopImage from "@/assets/img/decor-right-top.svg";
</script>

<template>
  <section class="login">
    <div class="login__overlay"></div>
    <img class="login__decor" :src=DecorRightTopImage alt="decor"/>
    <div class="login__container">
      <div class="login__header">
        <h2 class="title text-primary">Sign Up</h2>
        <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
      </div>
      <div class="login__wrapper">
        <form class="login__form" @submit.prevent="onSubmit">
          <div class="login__inputs-box" :style="[{marginBottom: '10px'}]">
            <input type="email" placeholder="Enter first name" class="login__input" required/>
            <input type="password" placeholder="Enter last name" class="login__input" required/>
          </div>~
          <div class="login__inputs-box">
            <input type="email" placeholder="Enter your Email" class="login__input" required/>
            <input type="password" placeholder="Enter your Password" class="login__input" required/>
          </div>
          <div class="login__buttons-box">
<!--            <a href="#" class="login__forgot">Forgot Password?</a>-->
            <button type="submit" class="login__button login__button--primary">Sign Up</button>
            <button type="button" class="login__button login__button--secondary">Login</button>
          </div>
        </form>
        <div class="login__social">
          <div class="login__alternative">
            <div class="line"></div>
            <span>Or Continue with</span>
            <div class="line"></div>
          </div>
          <div class="login__icons">
            <router-link to="">
              <RoundedIcon>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_67_207)">
                    <path
                        d="M29.7083 15.3456C29.7083 14.3259 29.6256 13.3007 29.4493 12.2976H15.3008V18.0738H23.4029C23.0667 19.9368 21.9864 21.5848 20.4046 22.632V26.3799H25.2383C28.0768 23.7674 29.7083 19.9092 29.7083 15.3456Z"
                        fill="#CAFF33"/>
                    <path
                        d="M15.2989 30.0012C19.3445 30.0012 22.7562 28.6728 25.242 26.38L20.4082 22.6321C19.0634 23.547 17.3272 24.0651 15.3044 24.0651C11.3911 24.0651 8.07311 21.425 6.88259 17.8755H1.89453V21.7392C4.44092 26.8044 9.6274 30.0012 15.2989 30.0012Z"
                        fill="#CAFF33"/>
                    <path
                        d="M6.87895 17.8754C6.25063 16.0124 6.25063 13.9952 6.87895 12.1322V8.26855H1.89641C-0.231095 12.507 -0.231095 17.5006 1.89641 21.7391L6.87895 17.8754Z"
                        fill="#CAFF33"/>
                    <path
                        d="M15.2989 5.93708C17.4374 5.90401 19.5043 6.70871 21.0531 8.18583L25.3356 3.90327C22.6239 1.35688 19.0248 -0.0430825 15.2989 0.00101083C9.6274 0.00101083 4.44092 3.19778 1.89453 8.26851L6.87708 12.1322C8.06209 8.57716 11.3856 5.93708 15.2989 5.93708Z"
                        fill="#CAFF33"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_207">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </RoundedIcon>
            </router-link>
            <router-link to="">
              <RoundedIcon>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_67_204)">
                    <path
                        d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z"
                        fill="#CAFF33"/>
                    <path
                        d="M20.8389 19.3359L21.5039 15H17.3438V12.1875C17.3438 11.0013 17.925 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9632 5.85938 18.322 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C14.2093 30.0607 15.7907 30.0607 17.3438 29.8178V19.3359H20.8389Z"
                        fill="#1C1C1C"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_204">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </RoundedIcon>
            </router-link>
            <router-link to="">
              <RoundedIcon>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M26.0533 21.4311C25.6374 22.3919 25.1451 23.2763 24.5748 24.0893C23.7973 25.1978 23.1608 25.9651 22.6702 26.3911C21.9097 27.0905 21.095 27.4487 20.2225 27.469C19.5961 27.469 18.8407 27.2908 17.9614 26.9292C17.0792 26.5694 16.2685 26.3911 15.5272 26.3911C14.7498 26.3911 13.916 26.5694 13.0241 26.9292C12.1309 27.2908 11.4114 27.4792 10.8612 27.4979C10.0245 27.5335 9.19055 27.1652 8.35811 26.3911C7.8268 25.9277 7.16224 25.1333 6.36612 24.0079C5.51195 22.8061 4.80971 21.4124 4.25955 19.8236C3.67036 18.1074 3.375 16.4456 3.375 14.8367C3.375 12.9938 3.77323 11.4043 4.57087 10.0722C5.19775 9.00232 6.03172 8.15833 7.0755 7.53875C8.11928 6.91917 9.24708 6.60344 10.4616 6.58324C11.1262 6.58324 11.9977 6.78881 13.0807 7.19281C14.1606 7.59817 14.854 7.80373 15.158 7.80373C15.3853 7.80373 16.1556 7.56337 17.4615 7.08417C18.6964 6.63977 19.7387 6.45576 20.5925 6.52824C22.9062 6.71497 24.6444 7.62702 25.8004 9.27018C23.7311 10.5239 22.7076 12.28 22.7279 14.5327C22.7466 16.2874 23.3832 17.7476 24.6342 18.9069C25.2011 19.445 25.8343 19.8609 26.5388 20.1563C26.386 20.5993 26.2247 21.0237 26.0533 21.4311ZM20.747 0.550401C20.747 1.92571 20.2445 3.20984 19.243 4.39842C18.0344 5.8114 16.5725 6.62789 14.9873 6.49905C14.9671 6.33405 14.9554 6.1604 14.9554 5.97792C14.9554 4.65762 15.5301 3.24464 16.5508 2.08933C17.0604 1.50438 17.7085 1.01801 18.4944 0.630012C19.2787 0.247807 20.0205 0.0364399 20.7181 0.000244141C20.7385 0.184102 20.747 0.367972 20.747 0.550383V0.550401Z"
                      fill="#CAFF33"/>
                </svg>
              </RoundedIcon>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.login {
  width: 80%;
  margin: 0 auto;
  position: relative;
  border: 1px solid $color-grey-15;
  min-height: 80vh;
  background-image: url("@/assets/img/auth-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  padding: 100px 150px;
  overflow: hidden;
  text-align: center;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1;
  }

  &__decor {
    position: absolute;
    right: 0;
    top: 0;
    width: 290px;
    height: 290px;
    z-index: 23;
  }

  &__container {
    position: relative;
    z-index: 22;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &__header {
    margin-bottom: 50px;
  }

  &__wrapper {
    width: 100%;
    z-index: 25;
    text-align: center;
  }

  &__inputs-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;

    input {
      width: 50%;
      border-radius: 55px;
      background-color: $color-grey-10;
      border: 1px solid $color-grey-15;
      color: $color-grey-35;
      padding: 20px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
  }


  &__forgot {
    width: max-content;
    display: block;
    color: $color-white;
    font-weight: 400;
    text-decoration: none;
    border-bottom: 1px solid $color-white;
    text-align: center;
    margin-bottom: 20px;
  }

  &__button {
    padding: 15px;
    font-size: 1rem;
    border-radius: 55px;
    cursor: pointer;
    border: none;
    color: #fff;

    &--primary {
      background-color: $color-green-60;
      color: $color-black;
      margin-top: 10px;
    }

    &--secondary {
      background-color: $color-grey-15;
      border: 1px solid $color-grey-20;
      margin-top: 10px;
    }
  }

  &__buttons-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    button {
      width: 100%;
    }
  }

  &__alternative {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 25px;
  }

  &__social {
    width: 49%;
    margin: 0 auto;

    .line {
      width: 40%;
      flex: 1;
      height: 1px;
      background-color: #b5b5b5;
    }
  }

  &__icons {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 10px;

    .login__icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #D3FF39;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
