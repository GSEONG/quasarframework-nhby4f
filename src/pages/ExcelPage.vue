<template>
  <q-page class="flex column flex-center">
    <q-file v-model="model" label="Select ExcelFile" hint="엑셀파일" />
    <q-input type="file" hint="엑셀파일" @update:model-value="handleFile" />
    <q-table> </q-table>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { read, utils } from 'xlsx';

const model = ref(null);
const file = ref(null);

const row = ref({});

async function handleFile(event) {
  const file = event[0];
  console.log(file);
  const data = await file.arrayBuffer();
  const workbook = read(data);
  const sheetList = workbook.SheetNames;

  console.log(workbook.SheetNames);

  sheetList.forEach((sheetName, index) => {
    const sheetObject = {
      [`${sheetName}`]: utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[index]]
      ),
    };
    Object.assign(row.value, sheetObject);
  });

  console.log('업로드 된 엑셀 파일: ', JSON.stringify(row.value, null, 2));
}
</script>
