<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div class="text-bold text-indigo-8" style="font-size: 4em">Login</div>

      <q-form @submit.prevent="onSubmit">
        <q-input v-model="id" type="text" label="ID" required />
        <q-input v-model="password" type="password" label="Password" required />
        <div class="q-my-sm">(ID: test / password: 1234)</div>

        <q-btn
          type="submit"
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          label="Login"
          no-caps
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
  if (id.value === 'test' && password.value === '1234') {
    sessionStorage.setItem('test', 1234);
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
