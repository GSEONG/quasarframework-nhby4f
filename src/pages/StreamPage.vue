<template>
  <q-page padding>
    <nav>
      <q-btn
        :color="onairColor"
        text-color="black"
        @click="changeCondition"
        label="OnAir"
      />
      <q-btn text-color="black" label="새로고침" />
      <q-btn text-color="black" label="설정" @click="dialog = true" />
    </nav>

    <TableView />
    <q-dialog v-model="dialog" noEscDismiss full-width full-height>
      <q-card class="column no-wrap">
        <q-card-section class="column items-center">
          <div class="text-h6">1번</div>
          <q-input
            label="url 1"
            v-model="settingObj1.url1"
            class="input-style"
          />
          <q-input
            label="url 2"
            v-model="settingObj1.url2"
            class="input-style"
          />
          <q-input
            label="url 3"
            v-model="settingObj1.url3"
            class="input-style"
          />
          <q-select
            v-model="settingObj1.resolution"
            :options="resolOptions"
            label="화질 선택"
            class="input-style"
          />
          <q-input
            label="비디오 비트레이트"
            type="number"
            class="input-style"
            v-model="settingObj1.videoBitrate"
            max="10"
            min="1"
            :rules="[
              (val) => (val > 0 && val <= 10) || '1에서 10사이의 정수를 입력',
            ]"
          />
          <q-select
            v-model="settingObj1.audioBitrate"
            :options="audioOptions"
            label="오디오 비트레이트"
            class="input-style"
          />
        </q-card-section>
        <q-card-section class="column items-center">
          <div class="text-h6">2번</div>
          <q-input
            label="url 1"
            v-model="settingObj2.url1"
            class="input-style"
          />
          <q-input
            label="url 2"
            v-model="settingObj2.url2"
            class="input-style"
          />
          <q-input
            label="url 3"
            v-model="settingObj2.url3"
            class="input-style"
          />
          <q-select
            v-model="settingObj2.resolution"
            label="화질 선택"
            class="input-style"
            :options="resolOptions"
          >
            <!-- <template #option="scope">
              {{ scope }}
            </template> -->
          </q-select>
          <q-input
            label="비디오 비트레이트"
            type="number"
            class="input-style"
            v-model="settingObj2.videoBitrate"
            max="10"
            min="1"
            :rules="[
              (val) => (val > 0 && val <= 10) || '1에서 10사이의 정수를 입력',
            ]"
          />
          <q-select
            v-model="settingObj2.audioBitrate"
            :options="audioOptions"
            label="오디오 비트레이트"
            class="input-style"
          />
        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="right" class="content-stretch">
          <q-btn
            label="저장하기"
            color="primary"
            @click="saveSettings"
            v-close-popup
          />
          <q-btn flat label="취소" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import TableView from 'components/TableView.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const onairColor = ref('yellow');
const dialog = ref(false);
const cancelEnabled = ref(false);

const settingObj1 = ref({
  url1: '',
  url2: '',
  url3: '',
  resolution: '',
  videoBitrate: 5,
  audioBitrate: 128,
});
const settingObj2 = ref({
  url1: '',
  url2: '',
  url3: '',
  resolution: '',
  videoBitrate: 5,
  audioBitrate: 128,
});
const resolOptions = ref([
  { label: 'FHD(1920 X 1080)', value: 'FHD' },
  { label: 'HD(1280 X 720)', value: 'HD' },
]);
const audioOptions = ref([
  { label: '128kbps', value: 128 },
  { label: '192kbps', value: 192 },
]);

const changeCondition = () => {
  // 작동 중일 때만!
  if (onairColor.value === 'yellow') {
    onairColor.value = 'red';
  } else {
    onairColor.value = 'yellow';
  }
};
const prompt = () => {
  $q.dialog({
    title: 'Prompt',
    message: 'What is your name?',
    prompt: {
      model: '',
      type: 'text', // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      console.log('>>>> OK, received', data);
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};
const saveSettings = () => {
  console.log('settingObj1: ', settingObj1.value);
  console.log('settingObj2: ', settingObj2.value);
};
</script>

<style lang="scss">
.input-style {
  width: max(200px, 50%);
}
</style>
