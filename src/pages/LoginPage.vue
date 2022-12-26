<template>
  <div class="fullscreen bg-blue text-center q-pa-md flex flex-center">
    <div class="bg-white q-pa-md login-wrap">
      <div class="text-bold text-indigo-8 login-title">Login</div>

      <q-form @submit.prevent="onSubmit">
        <q-input v-model="id" type="text" label="ID" required />
        <q-input v-model="password" type="password" label="Password" required />
        <div class="q-my-sm text-bold text-blue">
          (ID: test / admin , password: 1234)
        </div>

        <q-btn
          type="submit"
          class="q-mt-xl q-pa-md"
          color="blue-1"
          text-color="blue"
          unelevated
          label="Login"
          no-caps
          style="width: 100%"
        >
          <q-icon name="login" />
        </q-btn>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const router = useRouter();
const $q = useQuasar();

const id = ref('');
const password = ref('');
const login = () => {
  if (
    (id.value === 'test' || id.value === 'admin') &&
    password.value === '1234'
  ) {
    const obj = {
      name: id.value,
      token: `${password.value}`,
    };
    sessionStorage.setItem('test', JSON.stringify(obj));
    router.push('index');
  } else {
    showNotif();
  }
};
const onSubmit = () => {
  login();
};
const showNotif = () => {
  $q.notify({
    message: '아이디 패스워드가 맞지 않습니다.',
    color: 'red',
    position: 'top',
    timeout: 3000,
  });
};
</script>
<style lang="scss" scoped>
.login-wrap {
  width: max(300px, 50%);
}
.login-title {
  font-size: 4em;
}
</style>
